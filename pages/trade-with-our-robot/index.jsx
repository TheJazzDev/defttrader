import Head from 'next/head';
import RobotTrade from '../../components/RobotTrade/RobotTrade';
import fetchChartData from '../../services/fetchChartData';

const index = (props) => {
  const {
    precisionData,
    pDoughnutData,
    casiScalpData,
    cDoughnutData,
    aggressiveData,
    aDoughnutData,
  } = props;

  return (
    <>
      <Head>
        <title>Deft Trader - Trade With Our Robot</title>
        <meta
          name='keywords'
          content='Robot Trading, EA robot, precision scalper, casi scalp, aggressive beast Trading, robot AI'
        />
      </Head>
      <RobotTrade
        precisionData={precisionData}
        pDoughnutData={pDoughnutData}
        casiScalpData={casiScalpData}
        cDoughnutData={cDoughnutData}
        aggressiveData={aggressiveData}
        aDoughnutData={aDoughnutData}
      />
    </>
  );
};

export async function getStaticProps() {
  const precisionData = await fetchChartData('precision', 'asc');
  const pDoughnutData = await fetchChartData('precisionDoughnut', 'desc');
  const casiScalpData = await fetchChartData('casiScalp', 'asc');
  const cDoughnutData = await fetchChartData('casiScalpDoughnut', 'desc');
  const aggressiveData = await fetchChartData('aggressive', 'asc');
  const aDoughnutData = await fetchChartData('aggressiveDoughnut', 'desc');

  return {
    props: {
      precisionData,
      pDoughnutData,
      casiScalpData,
      cDoughnutData,
      aggressiveData,
      aDoughnutData,
    },
    revalidate: 86400,
  };
}

export default index;
