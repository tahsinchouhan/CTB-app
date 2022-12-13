/* eslint-disable no-async-promise-executor */
import Realm from 'realm';
// import Contacts from 'react-native-contacts';

const ContactSchema = {
  name: 'Contact',
  properties: {
    _id: 'string',
    name: 'string',
    email: 'string',
    number: 'string',
  },
  primaryKey: '_id',
};

const getRealm = async () => {
  const realm = await Realm.open({
    path: 'myrealm',
    schema: [ContactSchema],
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
        const tasks = realm.objects('Contact');
        resolve(tasks);
      } catch (error) {
        reject(error);
      }
    }),
  syncContactsLocal: async () => {
    try {
      //   const contacts = await Contacts.getAll();
      //   const realm = await getRealm();
      //   realm.write(() => {
      //     contacts.forEach(contact => {
      //       console.log('contact', contact);
      //       const contact1 = realm.create('Contact', contact);
      //       console.log(
      //         `created two contacts: ${contact1.name} & ${contact1.name}`,
      //       );
      //     });
      //   });
      //   ContactDB.bulkDocs(contacts);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  syncContacts: async () => {},
};

export default ContactsApi;
