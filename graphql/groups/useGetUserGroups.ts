import { gql, useQuery } from "@apollo/client";

const GET_USER_GROUPS = gql`
  query getUserGroups {
    getUserGroups {
      id
      name
      description
    }
  }
`;

export const useGetUserGroups = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  return useQuery(GET_USER_GROUPS, {
    context: {
      headers: {
        Authorization: token !== "" ? `Bearer ${token}` : "",
      },
    },
  });
};
