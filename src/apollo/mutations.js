import { gql } from '@apollo/client';

const GOOGLE_AUTH = gql`
  mutation googleAuth($idToken: String!) {
    googleAuth(idToken: $idToken) {
      message
      payload {
        id
        email
        name
      }
      status
      token
    }
  }
`;

export const SYNC_CONTACTS_REMOTE = gql`
  mutation syncContacts($contacts: [ContactInput]!) {
    syncContacts(contacts: $contacts)
  }
`;

export default GOOGLE_AUTH;
