import { ApolloError, gql, useQuery } from "@apollo/client";
import React from "react";
import { auth } from "../firebase";
import { USERS_FRAGMENT } from "../fragments";

const GET_ME = gql`
  query getMe($firebase_id: String) {
    users(where: { firebase_id: { _eq: $firebase_id } }) {
      ...UsersPart
    }
  }
  ${USERS_FRAGMENT}
`;

interface MeResult {
  me?: {
    id: number;
    name: string;
    role: string;
  };
  loading: boolean;
  error?: ApolloError;
}
const useMe = (): MeResult => {
  const { data, loading, error } = useQuery(GET_ME, {
    variables: {
      firebase_id: auth().currentUser?.uid,
    },
  });

  return {
    me: data?.users[0],
    loading,
    error,
  };
};

export default useMe;
