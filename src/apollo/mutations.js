import { gql } from '@apollo/client';

const GOOGLE_AUTH = gql`
  mutation Mutation($idToken: String!) {
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
  mutation Mutation($contacts: [ContactInput]) {
    syncContacts(contacts: $contacts) {
      name
      id
      number
    }
  }
`;

export default GOOGLE_AUTH;
