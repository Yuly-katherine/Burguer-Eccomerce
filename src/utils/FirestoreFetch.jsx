import { query, where,collection,getDocs,doc,getDoc,} from "firebase/firestore";
import {db} from "./FirebaseConfig.jsx";

export const fetchFromFireStore = async (idCategoria) => {
  let queryFilter;
  if (!idCategoria) {
    queryFilter = query(collection(db, "productos"));
  } else {
    queryFilter = query(
      collection(db, "productos"),
      where("categoria", "==", idCategoria)
    );
  }
  const querySnapshot = await getDocs(queryFilter);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFirestore;
};

export const fetchOneFromFireStore = async (idProducto) => {
  const docRef = doc(db, "productos", idProducto);
  const docSnap = await getDoc(docRef);

  console.log(docSnap.exists());

  if (docSnap.exists()) {

    return {
      id: idProducto,
      ...docSnap.data(),
    };
  } else {
    console.log("No such document!");
  }
};
