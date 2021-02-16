import { gql, useQuery } from "@apollo/client";
import { Spinner, Table } from "evergreen-ui";
import React from "react";

const GET_USERS = gql`
  query {
    users {
      id
      firebase_id
      name
      email
      role
      created_at
      updated_at
      driver_location
      avatar
    }
  }
`;
const Users = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  return (
    <Table className=" w-full container rounded-lg shadow-md">
      <Table.Head className=" flex flex-row w-full p-3"></Table.Head>
      <Table.Body className=" border-2 border-gray-100 border-solid w-full max-h-56 h-full overflow-y-auto bg-white rounded-b-md">
        {loading && (
          <div className=" w-full p-4 flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {!loading && error?.message}
        {!loading &&
          (data?.users?.length > 0
            ? data?.users.map((user) => {
                return <p key={user.id}>{user.name}</p>;
              })
            : "No data found")}
      </Table.Body>
    </Table>
  );
};

export default Users;
