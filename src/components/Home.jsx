import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";
// import Welcome from "./Welcome.jsx";

/* eslint-disable */
function Home() {
  const [items, setItems] = useState([]);

  function handleSubmit(a) {
    console.log(a);
  }

  useEffect(() => {
    axios.get("http://localhost:4500/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  if (localStorage.getItem("loggedIn"))
    return (
      <div className="flex flex-row">
        {items.map((card) => {
          return (
            <Card
              key={card._id}
              link={card.image}
              desc={card.description}
              price={card.price}
              handleSubmit={handleSubmit}
              metamask_account={card.metamask_account}
            />
          );
        })}
      </div>
    );
  return (
    <div className="mx-10 my-10 flex flex-row">
      <img
        src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        width="500"
        alt="Farming"
      />
      <p className="mx-10 text-2xl">
        AgroGet is a web application. The main objective of the AgroGet is to
        provide a service for farmers to take equipment on rent from different
        renters and Provide Renter the functionality to list their equipment for
        rent and track their equipment which are rented.
      </p>
    </div>
  );
}

export default Home;
