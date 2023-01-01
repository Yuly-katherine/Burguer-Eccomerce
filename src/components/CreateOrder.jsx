import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { serverTimestamp, setDoc, doc, collection } from "firebase/firestore";
import { db } from "../utils/FirebaseConfig";
import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import Swal from "sweetalert2";

const CreateOrder = () => {
  const [loading, setLoading] = useState(false);
  const contextInfo = useContext(CartContext);

  const createOrder = () => {
    const order = {
      buyer: {
        name: "Yuly Gómez",
        email: "yuly@coderhouse.com",
        phone: "123456789",
      },
      date: serverTimestamp(),
      total: contextInfo.calculateSubTotal(),
      items: contextInfo.cartList.map((item) => ({
        id: item.id,
        title: item.nombre,
        price: item.precio,
        qty: item.cantidad,
      })),
    };
    const createOrderInFirestore = async () => {
      setLoading(true);
      const newOrderInFirestore = doc(collection(db, "orders"));
      await setDoc(newOrderInFirestore, order);
      setLoading(false);
      return newOrderInFirestore;
    };

    createOrderInFirestore()
      .then((result) => swalMessage(result.id))
      .catch((err) => console.log(err));

    const swalMessage = (id) => {
      Swal.fire({
        title: "Gracias por preferirnos!",
        text: `Tu orden ha sido creada con el número: ${id}`,
        icon: "success",
        confirmButtonColor: "#ffce12",
      });
      contextInfo.deleteAllProducts();
    };
  };

  return (
    <div className="total-info">
      <span className="total-info__subtotal">
        Subtotal ${contextInfo.calculateSubTotal()}
      </span>
      <span className="total-info__msg">
        IVA incluido y envíos calculados en el checkout
      </span>
      <button className="total-info__btn" onClick={createOrder}>
        {loading === false ? (
          <span>Checkout</span>
        ) : (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
};

export default CreateOrder;
