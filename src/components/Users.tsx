import { gql, useQuery } from "@apollo/client";
import { Spinner, Table } from "evergreen-ui";
import React, { useState } from "react";
import UserRow from "./UserRow";

const GET_USERS = gql`
  query getUsers($where: users_bool_exp) {
    users(where: $where) {
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
  const [searchText, setSearchText] = useState("");
  const { data, loading, error } = useQuery(GET_USERS, {
    variables: {
      where:
        searchText.length > 0
          ? {
              _or: [
                { name: { _ilike: searchText } },
                { email: { _ilike: searchText } },
              ],
            }
          : { id: { _is_null: false } },
    },
  });
  return (
    <Table className=" w-full container rounded-lg shadow-md">
      <Table.Head className=" flex flex-row w-full p-3">
        <Table.SearchHeaderCell
          value={searchText}
          onChange={(e) => {
            setSearchText(e);
          }}
          flexBasis={560}
          flexShrink={0}
          flexGrow={0}
        ></Table.SearchHeaderCell>
        <Table.HeaderCell flexBasis={100} flexShrink={0} flexGrow={0}>
          <p className=" text-gray-600 font-semibold text-sm">Driver</p>
        </Table.HeaderCell>
      </Table.Head>
      <Table.Body className=" border-2 border-gray-100 border-solid w-full max-h-96 h-full overflow-y-auto no-scrollbar bg-white rounded-b-md">
        {loading && (
          <div className=" w-full p-4 flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {!loading && error?.message}
        {!loading &&
          (data?.users?.length > 0
            ? data?.users.map((user, index) => {
                return <UserRow key={user.id} user={user} index={index} />;
              })
            : "No data found")}
      </Table.Body>
    </Table>
  );
};

export default Users;
