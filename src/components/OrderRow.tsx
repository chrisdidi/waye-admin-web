import {
  IconButton,
  Menu,
  MoreIcon,
  Popover,
  Table,
  Tooltip,
} from "evergreen-ui";
import React from "react";

const OrderRow = ({ index, order }) => {
  let statusStyle = " bg-green-50 text-green-400 border-green-200";

  if (order.status === "Cancelled") {
    statusStyle = " bg-red-50 text-red-400 border-red-200";
  }

  if (order.status === "Ongoing") {
    statusStyle = " bg-blue-50 text-blue-400 border-blue-200";
  }

  if (order.status === "Waiting") {
    statusStyle = " bg-yellow-50 text-yellow-500 border-yellow-200";
  }

  let serviceStyle = " bg-gray-400 text-gray-50";
  if (order.type === "shopping") {
    serviceStyle = "bg-indigo-400 text-indigo-50";
  }
  if (order.type === "property") {
    serviceStyle = "bg-pink-400 text-pink-50";
  }

  return (
    <Table.Row
      className={` p-1 pb-0 flex items-center flex-row ${
        index % 2 === 1 ? "bg-gray-50" : "bg-white"
      } border-b border-solid border-gray-200 last:border-none`}
    >
      <Table.Cell>
        <div className={` ${serviceStyle}   p-1 rounded-md`}>
          <p className=" text-xs font-semibold">{order.type.toUpperCase()}</p>
        </div>
      </Table.Cell>
      <Table.Cell>
        <Tooltip
          appearance="card"
          content={
            <div className=" bg-white p-3">
              <p className=" font-semibold text-lg text-gray-700">
                Order Details
              </p>
              <br />
              {order.type === "property" && (
                <div className=" w-full">
                  <p className="text-gray-700 font-semibold">Viewing Address</p>
                  <p className="text-gray-700 text-sm">
                    {order.delivery_address}
                  </p>
                  <br />
                  <p className="text-gray-700 font-semibold">Instructions</p>
                  <p className="text-gray-700 text-sm">
                    {decodeURI(order.description)}
                  </p>
                </div>
              )}
              {order.type === "shopping" && (
                <div className=" w-full">
                  <p className="text-gray-700 font-semibold">
                    Delivery Address
                  </p>
                  <p className="text-gray-700 text-sm">
                    {order.delivery_address}
                  </p>
                  <br />
                  <p className="text-gray-700 font-semibold">Descriptions</p>
                  <p className="text-gray-700 text-sm">
                    {decodeURI(order.description)}
                  </p>
                </div>
              )}
            </div>
          }
        >
          <p className=" underline text-gray-600 hover:text-gray-800 font-semibold cursor-pointer">
            {order.id}
          </p>
        </Tooltip>
      </Table.Cell>
      <Table.Cell>
        <div className={` ${statusStyle} border-solid border p-1 rounded-md`}>
          <p className=" text-xs font-semibold">{order.status.toUpperCase()}</p>
        </div>
      </Table.Cell>
      <Table.Cell>
        <Popover
          content={({ close }) => (
            <Menu>
              <Menu.Group>
                <Menu.Item intent="danger">Cancel Order</Menu.Item>
              </Menu.Group>
            </Menu>
          )}
        >
          <IconButton appearance="minimal" icon={<MoreIcon />} />
        </Popover>
      </Table.Cell>
    </Table.Row>
  );
};

export default OrderRow;
