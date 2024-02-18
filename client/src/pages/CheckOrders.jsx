import axios from "axios";
import { useEffect, useState } from "react";

export default function CheckOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/order")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log({ err }));
  }, []);
  // console.log({ orders });

  return (
    <div className="bg-back">
      <div className="container pb-40 pt-32">
        {orders.map((order) => (
          <div
            key={order._id}
            className="mb-12 bg-white flex flex-col gap-3 border-2 p-3"
          >
            <div className="flex gap-3">
              <p>Country : {order.country}</p>
              <p>
                Name : {order.firstName}
                <span> </span>
                {order.lastName}
              </p>
              <p>Address : {order.address}</p>
              <p>Email : {order.email}</p>
              <p>phone : {order.phone}</p>
            </div>
            {order.userOrder.map((el) => (
              <div key={el.name} className=" flex gap-8">
                <div>
                  <img src={el.image} alt="" className="w-[120px] " />
                </div>
                <p>item : {el.name}</p>
                <p>price : {el.price}</p>
                <p>quantity : {el.quantity}</p>
                {/* {el.image} */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
