import { gql } from '@apollo/client';

const GET_PROFILE = gql`
  query Users($where: UserWhere) {
    users(where: $where) {
      email
      name
      gender
      gotra
      picture
    }
  }
`;

export const GET_FAMILY_TREE = gql`
  fragment Children1 on User {
    email
    name
    gender
    gotra
    childrens {
      ...Children2
    }
  }

  fragment Children2 on User {
    email
    name
    gender
    gotra
    childrens {
      ...Children3
    }
  }

  fragment Children3 on User {
    email
    name
    gender
    gotra
  }
  query Users($where: UserWhere) {
    users(where: $where) {
      email
      name
      gender
      gotra
      childrens {
        ...Children1
      }
    }
  }
`;

export const GET_ALL_FAMILIES = gql`
  query Query {
    getAllFamilies {
      name
      email
      gotra
    }
  }
`;

export default GET_PROFILE;
