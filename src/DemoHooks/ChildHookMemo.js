import React, { memo } from "react";

function ChildHookMemo(props) {
  console.log("ChildHookMemo");
  return (
    <div>
      ChildHookMemo
      <small>{props.renderNotify()}</small>
    </div>
  );
}
export default memo(ChildHookMemo);
