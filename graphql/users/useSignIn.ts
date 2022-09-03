import { gql, useMutation } from "@apollo/client";

const SIGN_IN_USER = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signInUser(data: { email: $email, password: $password })
  }
`;

export const useSignIn = () => {
  return useMutation(SIGN_IN_USER);
};
