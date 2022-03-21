import React, { useState, useEffect, useCallback, useMemo } from "react";
import ChildHook from "./ChildHook";
import ChildHookMemo from "./ChildHookMemo";
import ChildUseMemo from "./ChildUseMemo";
export default function DemoStateHook() {
  const [state, setState] = useState({ like: 0 });
  const handleLike = () => {
    setState({
      like: (state.like += 1),
    });
  };
  useEffect(() => {
    console.log("didmount");
  });
  useEffect(() => {
    console.log("didUpdate");
  }, []);
  useEffect(() => {
    console.log("didUpdate");
    return () => {
      console.log("willunmount");
    };
  }, [state]);
  console.log("render");
  console.log(state.like);
  const renderNotify = () => {
    return `Cam ơn bạn đã nhấn ${state.like}`;
  };
  //UseCallBack
  const callBackNotify = useCallback(renderNotify, [state.like]);
  //useMemo
  let phone = [
    { id: 1, name: "iphone", price: "1200" },
    { id: 2, name: "samsung", price: "1500" },
    { id: 3, name: "oppo", price: "1000" },
  ];
  const useMemoPhone = useMemo(() => phone, [state.like]);

  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/266368761_1006788756567224_6673832682192062207_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=CszEqY-S_Q0AX8rwddH&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9MKIaiiWykoJOPtE8SUPfTbRiLWlwf53QmVofP9viD5g&oe=623CD119"
          alt="123"
          style={{ width: "400px", height: "400px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{state.like} </h4>
          <button className="btn btn-danger" onClick={handleLike}>
            Like
          </button>
        </div>
        {/* {state.like === 1 ? <ChildHook /> : ""}
        <ChildHookMemo renderNotify={callBackNotify} /> */}
        {/* {renderNotify()} */}
        <ChildUseMemo useMemoPhone={useMemoPhone} />
      </div>
    </div>
  );
}
