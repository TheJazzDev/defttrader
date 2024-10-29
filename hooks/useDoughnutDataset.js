import { useState, useEffect, useRef } from 'react';

const useDoughnutDataset = (doughnutData) => {
  //const monthlyGain = useRef(null);

  const [activeOption, setActiveOption] = useState(doughnutData[0].title);

  const [doughnutDataset, setDoughnutDataset] = useState({
    labels: doughnutData[0].data.map((data) => data.title),
    datasets: [
      {
        type: 'doughnut',
        data: doughnutData[0].data.map((data) => data.value),
        backgroundColor: [
          '#ed1e1e',
          '#2269e5',
          '#fce302',
          '#04f759',
          '#fc9700',
          '#cad4f9',
          '#2196f3',
          '#9b3193',
          '#009688',
          '#e721f3',
          '#824ac3',
          '#00bcd4',
        ],
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  });

  const [monthlyGain, setMonthlyGain] = useState(doughnutData[0].monthlyGain);

  useEffect(() => {
    const selectedData = doughnutData.find(
      (data) => data.title === activeOption
    );
    setMonthlyGain(selectedData.monthlyGain);
    setDoughnutDataset({
      labels: selectedData.data.map((data) => data.title),
      datasets: [
        {
          ...doughnutDataset.datasets[0],
          data: selectedData.data.map((data) => data.value),
        },
      ],
    });
  }, [activeOption, doughnutData]);

  return { doughnutDataset, setActiveOption, monthlyGain };
};

export default useDoughnutDataset;
