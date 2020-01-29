import React from "react";
import Axios from "axios";

const api = Axios.create({
  baseURL: "https://sandbox.iexapis.com/stable"
  //Tpk_b7cad06c724e45b9be0f7c9e43af6b96
});

export const LoadStockQuote = symbol => {
  return api
    .get(`/stock/${symbol}/quote?token=Tpk_b7cad06c724e45b9be0f7c9e43af6b96`)
    .then(result => result.data);
};

export const LoadStockLogo = symbol => {
  return api
    .get(`/stock/${symbol}/logo?token=Tpk_b7cad06c724e45b9be0f7c9e43af6b96`)
    .then(result => result.data.url);
};

export const LoadStockNews = symbol => {
  return api
    .get(
      `/stock/${symbol}/news/last/5?token=Tpk_b7cad06c724e45b9be0f7c9e43af6b96`
    )
    .then(result => result.data);
};

export const LoadStockChart = (symbol, range) => {
  return api.get(`/stock/${symbol}/chart/${range}`);
};
