import  { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto marketplace
        </h1>
        <p>
          welcome to the world's largest cryptocurrency marketplace. sign up to
          explore more about cryptos{" "}
        </p>
        <form>
          <input type="text" placeholder="search crypto" />
          <button type="submit">search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>coins</p>
          <p>price</p>
          <p style={{textAlign:"center"}}>24h change</p>
          <p className="market-cap">market cap</p>
        </div>

          {
            displayCoin.slice(0,10).map((item, index)=> (
              <div className="table-layout" key={index}>
                <p>{item.market_cap_rank}</p>
                <div>
                  <img src={item.image} alt=""></img>
                  <p>{item.name + " - " + item.symbol}</p>
                </div>
                <p>{currency.symbol} {item.current_price} </p>
                <p style={{textAlign:"center"}}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                <p className="market-cap">{currency.symbol} {item.market_cap_change_percentage_24h}</p>
              </div>
            ))
          }

      </div>

    </div>
  );
};

export default Home;
