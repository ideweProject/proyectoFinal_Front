import React, { useEffect, useState } from "react";
import CardOrder from "../components/CardOrder";
import axios from "axios";
import { useSelector } from "react-redux";

function Order() {
  const userId = useSelector((state) => state.login);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    async function getUserOrders() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        data: { userId: userId.userId },
      });

      setUserOrders(response.data);
    }

    getUserOrders();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5  order-container">
      <h2>Historial de compra</h2>
      <p>
        Consulta el estado de pedidos recientes, gestiona devoluciones y
        descubre productos similares.{" "}
      </p>

      {userOrders.map((order) => (
        <div key={order.id}>
          <CardOrder orderData={order} />
        </div>
      ))}
    </div>
  );
}

export default Order;
