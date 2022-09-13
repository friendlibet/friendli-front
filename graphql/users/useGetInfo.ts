import { gql, useQuery } from "@apollo/client";

const GET_USER_INFO = gql`
  query GetUserInfo {
    getUser {
      id
      firstName
      lastName
    }
  }
`;

export const useGetInfo = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  return useQuery(GET_USER_INFO, {
    variables: {},
    context: {
      headers: {
        Authorization: token !== "" ? `Bearer ${token}` : "",
      },
    },
  });
};
