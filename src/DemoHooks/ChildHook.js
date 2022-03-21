import React, { memo } from "react";

export default function ChildHook() {
  const text = { name: "Binh", age: "13" };
  console.log(text);
  return (
    <div>
      <textarea></textarea>
    </div>
  );
}
// export default memo(ChildHook);
