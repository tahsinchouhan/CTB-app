/* eslint-disable no-async-promise-executor */
// eslint-disable-next-line import/no-unresolved
import { Aigle } from 'aigle';
import Contacts from 'react-native-contacts';
import Realm from 'realm';
import { SYNC_CONTACTS_REMOTE } from '../apollo/mutations';
import client from '../client';

const ContactSchema = {
  name: 'Contact',
  properties: {
    _id: 'string',
    name: 'string',
    email: 'string',
    number: 'string',
    isSynced: { type: 'bool', default: false },
  },
  primaryKey: '_id',
};

const getRealm = async () => {
  const realm = await Realm.open({
    path: 'myrealm',
    schema: [ContactSchema],
    schemaVersion: 2,
  });
  return realm;
};

const ContactsApi = {
  addContact: contact =>
    new Promise(async (resolve, reject) => {
      try {
        const realm = await getRealm();
        realm.write(() => {
          const contact1 = realm.create('Contact', contact);
          console.log(`created two tasks: ${contact1.name} & ${contact1.name}`);
          resolve(contact1);
        });
      } catch (error) {
        reject(error);
      }
    }),
  getContacts: () =>
    new Promise(async (resolve, reject) => {
      try {
        const realm = await getRealm();
        const constacts = realm
          .objects('Contact')
          .filtered('isSynced == false');
        resolve(constacts);
      } catch (error) {
        reject(error);
      }
    }),
  syncContactsLocal: async () =>
    new Promise(async (resolve, reject) => {
      try {
        const contacts = await Contacts.getAll();
        const realm = await getRealm();
        realm.write(() => {
          contacts.forEach(contact => {
            const { displayName, emailAddresses, phoneNumbers } = contact;
            const email =
              emailAddresses.length > 0 ? emailAddresses[0].email : '';
            const phones = phoneNumbers || [];
            phones.forEach(phone => {
              const { number } = phone;
              const myNumber = realm.objectForPrimaryKey('Contact', number);
              if (myNumber) {
                myNumber.name = displayName;
                myNumber.email = email;
                // console.log(`updated contacts: ${myNumber.name}`);
              } else {
                realm.create('Contact', {
                  _id: number,
                  name: displayName,
                  email,
                  number,
                  isSynced: false,
                });
                // console.log(`created contacts: ${contact1.name}`);
              }
            });
          });
        });
      } catch (error) {
        reject(error);
      }
    }),
  startSyncContacts: async () =>
    new Promise(async (resolve, reject) => {
      try {
        const realm = await getRealm();
        const contacts = realm.objects('Contact');
        const nonSyncedTasks = contacts.filtered('isSynced == false');
        console.log('nonSyncedTasks', nonSyncedTasks.length);
        const batchNumbers = nonSyncedTasks.reduce((r, e, i) => {
          if (i % 30 === 0) r.push([]);
          r[r.length - 1].push(e);
          return r;
        }, []);

        const iterator = async batch => {
          try {
            await client.mutate({
              mutation: SYNC_CONTACTS_REMOTE,
              variables: {
                contacts: batch,
              },
            });
            realm.write(() => {
              batch.forEach(contact => {
                // eslint-disable-next-line no-param-reassign
                contact.isSynced = true;
                console.log('batch', contact);
              });
            });
            return Aigle.delay(100).then(() => batch);
          } catch (error) {
            return Aigle.delay(100).then(() => batch);
          }
        };

        Aigle.resolve(batchNumbers)
          .concatLimit(1, iterator)
          .then(() => {
            console.log('done');
            resolve(nonSyncedTasks);
          });
      } catch (error) {
        console.log('error2', error);
        reject(error);
      }
    }),
};

export default ContactsApi;
