import React, { useState } from "react";
import Charts from "./Charts";
import Maps from "./Maps";
import Tab from "./Tab";

const ChartsMaps = () => {
  const menu = ["Maps", "Charts"];
  const [selected, setSelected] = useState(menu[0]);
  return (
    <div className=" w-full">
      <div className=" flex flex-row">
        {menu.map((a) => (
          <Tab
            label={a}
            key={a}
            isSelected={selected === a}
            onClick={() => {
              setSelected(a);
            }}
          />
        ))}
      </div>
      <div className=" container">
        {selected === "Maps" && (
          <Maps
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbeNxirAVEL1p2-DEydum3tYTz1aNkvcQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        )}
        {selected === "Charts" && <Charts />}
      </div>
    </div>
  );
};

export default ChartsMaps;
