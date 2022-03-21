import React, { useReducer } from "react";
const initialPhone = [{ id: 1, name: "iphone", price: "1000", quanlity: 1 }];
const arrListPhone = [
  { id: 1, name: "iphone 11", price: "1200" },
  { id: 2, name: "Sumsung Note", price: "1500" },
  { id: 3, name: "RedMi Note", price: "100" },
];
const carReducer = (state, action) => {
  switch (action.type) {
    case "addToList": {
      let cartPhone = [...state];
      let index = cartPhone.findIndex((phone) => phone.id === action.item.id);
      console.log(cartPhone[index]);
      if (index === -1) {
        const newPhone = { ...action.item, quanlity: 1 };
        cartPhone.push(newPhone);
      } else {
        cartPhone[index].quanlity += 1;
      }
      return cartPhone;
    }
  }
  return [...state];
};
export default function DemoUseReducer() {
  const [cart, dispatch] = useReducer(carReducer, initialPhone);
  const handleAddList = (item) => {
    dispatch({
      type: "addToList",
      item,
    });
  };
  return (
    <div className="row justify-content-center">
      <h3 className="col-12 ">List phone</h3>
      {arrListPhone.map((item, index) => {
        return (
          <div key={index} className="card">
            <img
              className="card-img-top"
              src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg"
              alt="Iphone"
              style={{ width: "300px", height: "300px" }}
            />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.price}</p>
              <button
                onClick={() => {
                  handleAddList(item);
                }}
                className="btn btn-success"
              >
                ADD TO LIST
              </button>
            </div>
          </div>
        );
      })}

      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quanlity</td>
            <td>Total</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {cart.map((phone) => {
            return (
              <tr key={phone.id}>
                <td>{phone.id}</td>
                <td>{phone.name}</td>
                <td>{phone.price}</td>
                <td>{phone.quanlity}</td>
                <td>{phone.price * phone.quanlity}</td>
                <td>
                  <button className="btn btn-danger">X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
