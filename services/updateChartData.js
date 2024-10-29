import axios from 'axios';
import { db } from './firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
const sessionId = process.env.NEXT_PUBLIC_MYFXBOOK_SESSION_ID;

export const updateChartData = async (col) => {
  try {
    const collectionRef = collection(db, col);

    const snapshot = await getDocs(collectionRef);

    const colDataArray = snapshot.docs.map((doc) => ({ ...doc.data() }));

    const colDataPips = colDataArray.map((data) => data.pips);

    const pipsSum = colDataPips.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    console.log(pipsSum);

    const response = await axios.get(
      `https://www.myfxbook.com/api/get-my-accounts.json?session=${sessionId}`
    );

    const { accounts, error: dataError } = response.data;

    const dataArray = [];

    accounts.forEach((account) => {
      dataArray.push(account);
    });

    return { pipsSum, dataArray };
  } catch (err) {
    console.log(err);
  }
};

export const updatePrecisionChart = async () => {
  try {
    const { pipsSum, dataArray } = await updateChartData('precision');

    const collectionRef = collection(db, 'precision');

    const data = {
      balance: dataArray[0].balance,
      pips: dataArray[0].pips - pipsSum,
      profit: dataArray[0].profit,
      date: Date.now(),
      date2Test: Date.now() - 24 * 60 * 60 * 1000,
    };

    await addDoc(collectionRef, data);
  } catch (err) {
    console.log(err);
  }
};

export const updateCasiScalpChart = async () => {
  try {
    const { pipsSum, dataArray } = await updateChartData('casiScalp');

    const collectionRef = collection(db, 'casiScalp');

    const data = {
      balance: dataArray[2].balance,
      pips: dataArray[2].pips - pipsSum,
      profit: dataArray[2].profit,
      date: Date.now(),
      date2Test: Date.now() - 24 * 60 * 60 * 1000,
    };

    await addDoc(collectionRef, data);
  } catch (err) {
    console.log(err);
  }
};

export const updateAggressiveChart = async () => {
  try {
    const { pipsSum, dataArray } = await updateChartData('aggressive');

    const collectionRef = collection(db, 'aggressive');

    const data = {
      balance: dataArray[1].balance,
      pips: dataArray[1].pips - pipsSum,
      profit: dataArray[1].profit,
      date: Date.now(),
      date2Test: Date.now() - 24 * 60 * 60 * 1000,
    };

    await addDoc(collectionRef, data);
  } catch (err) {
    console.log(err);
  }
};
