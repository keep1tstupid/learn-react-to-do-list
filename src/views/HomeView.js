import React from 'react';
import Header from "../components/Header";
import Quote from "../components/Quote";


const HomeView = () => {

  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });

  return (
    <div>
      <Header />
      <Quote />
    </div>
  );
}

export default HomeView;
