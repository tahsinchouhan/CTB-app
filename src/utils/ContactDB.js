/* eslint-disable no-async-promise-executor */
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
        const constacts = realm.objects('Contact');
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
                const contact1 = realm.create('Contact', {
                  _id: number,
                  name: displayName,
                  email,
                  number,
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
        console.log('syncContacts');
        const realm = await getRealm();
        const contacts = realm.objects('Contact');
        const nonSyncedTasks = contacts.filtered('isSynced == false');

        const iterator = async contact => {
          try {
            console.log('contact', contact);
            await client.mutate({
              mutation: SYNC_CONTACTS_REMOTE,
              variables: {
                contacts: [contact],
              },
            });
            return Aigle.delay(1000).then(() => contact);
          } catch (error) {
            console.log('error1', error);
            return Aigle.delay(1000).then(() => contact);
          }
        };

        Aigle.resolve(nonSyncedTasks)
          .concatLimit(1, iterator)
          .then(() => {
            console.log('done');
            resolve(nonSyncedTasks);
          });
      } catch (error) {
        reject(error);
      }
    }),
};

export default ContactsApi;
