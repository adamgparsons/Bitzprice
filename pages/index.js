import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

import Prices from "../components/Prices";

const Index = props => (
  <div>
    <Layout>
      <div>
        <p>Check current Bitcoin rates</p>
        <h1>Welcome to BitzPrice</h1>
        <Prices bpi={props.bpi} />
      </div>
    </Layout>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

  const data = await res.json();

  return {
    bpi: data.bpi
  };
};

export default Index;
