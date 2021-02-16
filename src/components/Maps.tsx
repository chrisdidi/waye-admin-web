import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

const Maps = withScriptjs(
  withGoogleMap((props: any) => {
    return (
      <div className=" w-full h-80">
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        ></GoogleMap>
      </div>
    );
  })
);

export default Maps;
