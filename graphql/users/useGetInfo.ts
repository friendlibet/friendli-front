import { gql, useQuery } from "@apollo/client";

const GET_USER_INFO = gql`
  query GetUserInfo {
    getUser {
      firstName
      lastName
    }
  }
`;

export const useGetInfo = () => {
  return useQuery(GET_USER_INFO, {
    context: {
      headers: {
        Authorization: "Bearer token",
      },
    },
  });
};
