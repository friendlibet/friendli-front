import { gql, useQuery } from "@apollo/client";

export const GET_ALL_CHAMPIONSHIPS = gql`
  query getAllChampionships {
    getChampionships {
      id
      championshipServiceId
      name
      country
      createdAt
      logoChampionship
    }
  }
`;

export const useGetChampionships = () => {
  return useQuery(GET_ALL_CHAMPIONSHIPS);
};
