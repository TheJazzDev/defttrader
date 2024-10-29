import axios from 'axios';
const sessionId = process.env.NEXT_PUBLIC_MYFXBOOK_SESSION_ID;

async function handler(req, res) {
    
  let isLoading = true;
  let dataArray = [];
  let error;

  try {
    const response = await axios.get(
      `https://www.myfxbook.com/api/get-my-accounts.json?session=${sessionId}`
    );

    const responseData = response.data;

    responseData.accounts.forEach((account) => {
      dataArray.push(account);
    });

    isLoading = false;

    res.status(200).json({ isLoading, dataArray });
  } catch (err) {
    error = err;
    res.status(500).json({ error });
  }
}

export default handler;
