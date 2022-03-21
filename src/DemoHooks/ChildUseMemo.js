import React, { memo } from "react";

function ChildUseMemo(props) {
  console.log("useMemoPhone", props.useMemoPhone);
  return (
    <table className="table">
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {props.useMemoPhone.map((phone, index) => {
          return (
            <tr key={index}>
              <td>{phone.id}</td>
              <td>{phone.name}</td>
              <td>{phone.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default memo(ChildUseMemo);
