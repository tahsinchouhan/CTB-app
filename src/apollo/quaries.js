import { gql } from '@apollo/client';

const GET_PROFILE = gql`
  query Users($where: UserWhere) {
    users(where: $where) {
      email
      fullName
      gender
      gotra
      picture
    }
  }
`;

export default GET_PROFILE;
