import { db } from './firebase-admin';

const fetchChartData = async (collectionName, order) => {
  try {
    const collectionRef = db.collection(collectionName);

    const snapshot = await collectionRef.orderBy('date', order).get();

    const collectionData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return collectionData;
  } catch (error) {
    console.log(error);
  }
};

export default fetchChartData;
