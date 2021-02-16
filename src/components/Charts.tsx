import { gql, useSubscription } from "@apollo/client";
import { Spinner } from "evergreen-ui";
import React from "react";
import { VictoryChart, VictoryPie, VictoryLine, VictoryTheme } from "victory";

const ORDER_TYPE = gql`
  subscription {
    order_types_analytic {
      type
      coalesce
    }
  }
`;

const DAILY_ORDERS = gql`
  subscription {
    daily_orders_analytic(order_by: { year: asc, month: asc, day: asc }) {
      month
      day
      year
      count
    }
  }
`;
const Charts = () => {
  const {
    data: typeData,
    loading: typeLoading,
    error: typeError,
  } = useSubscription(ORDER_TYPE);
  const {
    data: dailyData,
    loading: dailyLoading,
    error: dailyError,
  } = useSubscription(DAILY_ORDERS);
  return (
    <div className=" w-full flex flex-col md:flex-row p-2">
      <div className=" w-full bg-white rounded-md h-80 md:mr-1 mb-3 md:mb-0 flex items-center justify-center">
        {!dailyLoading ? (
          dailyData?.daily_orders_analytic?.length > 0 ? (
            <VictoryChart theme={VictoryTheme.material} minDomain={{ y: 0 }}>
              <VictoryLine
                labels={({ datum }) => datum.y}
                data={dailyData.daily_orders_analytic
                  .reverse()
                  .map((daily, index) => {
                    if (index <= 9) {
                      return {
                        x: daily.day + "/" + daily.month + "/" + daily.year,
                        y: daily.count,
                      };
                    } else {
                      return null;
                    }
                  })}
              />
            </VictoryChart>
          ) : (
            "No data found."
          )
        ) : (
          <Spinner />
        )}
      </div>
      <div className=" w-full bg-white rounded-md h-80 md:ml-1 flex items-center justify-center">
        {!typeLoading ? (
          typeData && typeData?.order_types_analytic?.length > 0 ? (
            <VictoryPie
              colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
              data={typeData.order_types_analytic.map((orderType) => {
                return {
                  x: orderType.type + ": " + orderType.coalesce,
                  y: orderType.coalesce,
                };
              })}
            />
          ) : (
            "No data found."
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Charts;
