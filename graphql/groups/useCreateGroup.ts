import { gql, useMutation } from "@apollo/client";

const CREATE_GROUP = gql`
  mutation CreateGroup(
    $name: String!
    $password: String!
    $description: String
    $championshipId: String!
  ) {
    createGroup(
      data: {
        name: $name
        password: $password
        description: $description
        championshipId: $championshipId
      }
    ) {
      id
      name
      description
    }
  }
`;

export const useCreateGroup = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  return useMutation(CREATE_GROUP, {
    context: {
      headers: {
        Authorization: token !== "" ? `Bearer ${token}` : "",
      },
    },
  });
};
