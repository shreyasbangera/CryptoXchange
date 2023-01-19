import { React, useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import herobanner from "./assets/herobanner.png";
import axios from "axios";
import Result from "./components/Result";

const Home = () => {
  const [crypto, setCrypto] = useState("");
  const [country, setCountry] = useState("");
  const [coinlist, setCoinlist] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [price, setPrice] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (crypto && country) {
      fetchResult();
    } else {
      alert("Please fill the required fields");
    }
  };
  const fetchResult = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${country}&ids=${crypto}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    setPrice(res.data);
    setLoading(false);
  };

  const handleChange = (e) => {
    const tokenid = coinlist.filter((t) => t.name === e.target.value);
    setCrypto(tokenid[0].id);
  };

  const fetchCoins = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    setCoinlist(res.data);
  };

  const fetchCurrency = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    );
    setCurrency(res.data);
  };

  useEffect(() => {
    fetchCoins();
    fetchCurrency();
  }, []);

  return (
    <Container>
    <div className="box">
      <div className="inputform">
        <h2 style={{ color: "white", fontWeight: "bold" }}>
          Cryptocurrency Coverter
        </h2>
        <div className="underline"></div>

        <div className="inputfield">
          <p style={{ color: "white" }}>Select your preferred Crypto</p>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option selected disabled hidden>
              Select Cryptocurrency
            </option>
            {coinlist?.map((t) => (
              <option key={t.id}>{t.name}</option>
            ))}
          </Form.Select>
        </div>

        <div className="inputfield">
          <p style={{ color: "white" }}>Select Global Currency</p>
          <Form.Select
            aria-label="Default select example"
            style={{ textTransform: "Capitalize" }}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option selected disabled hidden>
              Select Currency
            </option>
            {currency?.map((key) => (
              <option style={{ textTransform: "uppercase" }} key={key}>
                {key}
              </option>
            ))}
          </Form.Select>
        </div>

        <Button
          style={{ width: "100%", marginTop: "5px" }}
          variant="outline-warning"
          onClick={handleSubmit}
        >
          Convert
        </Button>
      </div>
      <Container>
        <img src={herobanner} alt="banner" className="herobanner" />
      </Container>
      <Result
        crypto={crypto}
        country={country}
        price={price}
        loading={loading}
      />
    </div>
    </Container>
  );
};

export default Home;
