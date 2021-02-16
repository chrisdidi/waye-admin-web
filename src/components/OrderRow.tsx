import { Switch, Table } from "evergreen-ui";
import React from "react";

const OrderRow = ({ index, order }) => {
  return (
    <Table.Row
      className={` p-1 pb-0 flex items-center flex-row ${
        index % 2 === 1 ? "bg-gray-50" : "bg-white"
      } border-b border-solid border-gray-200 last:border-none`}
    >
      <Table.Cell>Hello {order.id}</Table.Cell>
      <Table.Cell>
        <Switch />
      </Table.Cell>
    </Table.Row>
  );
};

export default OrderRow;
