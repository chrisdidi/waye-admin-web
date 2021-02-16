import { gql, useQuery } from "@apollo/client";
import { Spinner, Table } from "evergreen-ui";
import React from "react";
import OrderRow from "./OrderRow";

const GET_ORDERS = gql`
  query {
    order(order_by: { created_at: desc }) {
      id
      user_id
      created_at
      description
      budget
      delivery_address
      delivery_place_id
      delivery_lat
      delivery_lng
      status
      complete_date
      driver_id
      type
      delivery_location
      latest_message
      driver_commission
    }
  }
`;
const Orders = () => {
  const { data, loading, error } = useQuery(GET_ORDERS);
  return (
    <Table className=" w-full container rounded-lg shadow-md">
      <Table.Head className=" flex flex-row w-full">
        <Table.Cell>
          <p className=" text-gray-700 text-sm">Service</p>
        </Table.Cell>
        <Table.Cell>
          <p className=" text-gray-700 text-sm">ID</p>
        </Table.Cell>
        <Table.Cell>
          <p className=" text-gray-700 text-sm">Status</p>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Head>
      <Table.Body className=" no-scrollbar border-2 border-gray-100 border-solid w-full max-h-64 h-full overflow-y-auto bg-white rounded-b-md">
        {loading && (
          <div className=" w-full p-4 flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {!loading && error?.message}
        {!loading &&
          (data?.order?.length > 0
            ? data?.order.map((order, index) => {
                return <OrderRow key={order.id} index={index} order={order} />;
              })
            : "No data found")}
      </Table.Body>
    </Table>
  );
};

export default Orders;
