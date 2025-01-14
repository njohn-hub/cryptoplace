import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (e)=> {
    switch (e.target.value){
      case "usd": {
        setCurrency({name: "usd", Symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", Symbol: "💶 "});
        break;
      }
      case "ksh": {
        setCurrency({name: "ksh", Symbol: "KES"});
        break;
      }
      default:{
        setCurrency({name: "usd", Symbol: "$"});
        break;
      }
    }
  }

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="ksh">KSH</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} alt=""></img>{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
