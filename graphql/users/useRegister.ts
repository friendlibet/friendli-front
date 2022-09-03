import { gql, useMutation } from "@apollo/client";

const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $birthDate: String!
    $mobile: String
  ) {
    createUser(
      data: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        birthDate: $birthDate
        mobile: $mobile
      }
    ) {
      firstName
      lastName
    }
  }
`;

export const useRegister = () => {
  return useMutation(REGISTER_USER);
};
