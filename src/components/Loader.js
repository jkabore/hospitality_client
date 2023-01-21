import React from "react";
import HashLoader from "react-spinners/HashLoader";

const override={
  margin: "0 auto",
};
const Loader = () => {
 

  return (
    <div className="sweet-loading " style={{ marginTop: "150px" }}>
      <HashLoader
        color={"#000"}
        loading={true}
        cssOverride={override}
        size={80}
      />
    </div>
  );
};

export default Loader;
