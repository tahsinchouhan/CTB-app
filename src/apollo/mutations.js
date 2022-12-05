import { gql } from '@apollo/client';

const GOOGLE_AUTH = gql`
  mutation Mutation($idToken: String!) {
    googleAuth(idToken: $idToken) {
      message
      payload {
        email
        fullName
      }
      status
      token
    }
  }
`;

export default GOOGLE_AUTH;
