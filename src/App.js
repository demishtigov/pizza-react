import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";

import "./scss/app.scss";

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("https://66a62f9d23b29e17a1a1f5a3.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((listItems) => {
        setPizzas(listItems);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
