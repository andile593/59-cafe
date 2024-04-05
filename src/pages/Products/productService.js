import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export const getProducts = async () => {
  const productCollectionRef = collection(db, "products");

  try {
    const data = await getDocs(productCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
