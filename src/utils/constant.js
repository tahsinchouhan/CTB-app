import { PermissionsAndroid } from 'react-native';

// Screens ------------------
export const HOME_TAB = 'HOME_TAB';
export const HOME_SCREEN = 'HOME_SCREEN';
export const DETAILS_SCREEN = 'DETAILS_SCREEN';
export const GET_STARTED_SCREEN = 'GET_STARTED_SCREEN';
export const LOADIN_SCREEN = 'LOADING_SCREEN';
export const DONATION_SCREEN = 'DONATION_SCREEN';
export const REGISTER_SCREEN = 'REGISTER_SCREEN';
export const FAMILY_SCREEN = 'FAMILY_SCREEN';
export const FAMILY_TREE_SCREEN = 'FAMILY_TREE_SCREEN';
export const LOGIN_SCREEN = 'LOGIN_SCREEN';
export const PROFILE_SCREEN = 'PROFILE_SCREEN';
export const PAYMENT_SCREEN = 'PAYMENT_SCREEN';
export const TRANSACTIONS_SCREEN = 'TRANSACTIONS_SCREEN';
export const PAYMENT_SUCESS_SCREEN = 'PAYMENT_SUCESS_SCREEN';
export const CONTACT_SCREEN = 'CONTACT_SCREEN';
export const PERMISSION_SCREEN = 'PERMISSION_SCREEN';

// query ------------------
export const DONATIONS_QUERY = 'DONATIONS_QUERY';
export const GET_ALL_PERMISSONS = 'GET_ALL_PERMISSONS';
export const GET_CONTACTS = 'GET_CONTACTS';
export const SYNC_CONTACTS = 'SYNC_CONTACTS';
export const SYNC_CONTACTS_LOCAL = 'SYNC_CONTACTS_LOCAL';

// extras ------------------
export const PERMISSIONS = [
  {
    name: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    title: 'Contacts',
    message: 'we need permission to read your contacts',
  },
  {
    name: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    title: 'Location',
    message: 'we need permission to access your location',
  },
  {
    name: PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
    title: 'Call Logs',
    message: 'we need permission to read your call logs',
  },
];
