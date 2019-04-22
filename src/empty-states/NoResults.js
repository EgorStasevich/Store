import React, { Component } from "react";

const NoResults = () => {
  return (
    <div className="products">
      <div className="no-results">
        <img
          src="http://kartinki-telefon.pifos.ru/_ph/20/2/612025872.jpg?1552740267"
          alt="cat"
        />
        <h2>Извините, по вашему запросу ничего не найдено!!</h2>
        <p>Введите другое ключевое слово и попробуйте.</p>
      </div>
    </div>
  );
};

export default NoResults;
