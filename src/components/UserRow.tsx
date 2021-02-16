import { gql, useMutation } from "@apollo/client";
import { Avatar, Switch, Table, toaster } from "evergreen-ui";
import React from "react";

const UPDATE_USER_ROLE = gql`
  mutation updateRole($id: Int!, $role: user_role_enum!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { role: $role }) {
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
const UserRow = ({ index, user }) => {
  let isDriver = user.role === "Driver";
  const [setRole] = useMutation(UPDATE_USER_ROLE);
  const updateUserRole = () => {
    setRole({
      variables: {
        id: user.id,
        role: isDriver ? "User" : "Driver",
      },
    })
      .then(() => {
        toaster.success(
          user.name + " is now a " + (isDriver ? " user." : "driver.")
        );
      })
      .catch((e) => {
        console.log(e);
        toaster.danger("An error has occured.");
      });
  };
  return (
    <Table.Row
      className={`  py-3 px-1 flex items-center flex-row ${
        index % 2 === 1 ? "bg-gray-50" : "bg-white"
      } border-b border-solid border-gray-200 last:border-none`}
    >
      <Table.Cell flexBasis={560} flexShrink={0} flexGrow={0}>
        <div className=" flex flex-row items-center">
          <Avatar name={user.name} />
          <div className=" ml-2">
            <p className=" font-semibold">{user.name}</p>
            <p className=" text-sm">{user.email}</p>
          </div>
        </div>
      </Table.Cell>
      <Table.Cell flexBasis={100} flexShrink={0} flexGrow={0}>
        <Switch checked={user.role === "Driver"} onChange={updateUserRole} />
      </Table.Cell>
    </Table.Row>
  );
};

export default UserRow;
