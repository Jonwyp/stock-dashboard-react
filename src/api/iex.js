import Axios from "axios";
import timeout from "./timeout";

const api = Axios.create({
  baseURL: "https://sandbox.iexapis.com/stable"
  //Tpk_b7cad06c724e45b9be0f7c9e43af6b96
});

export const LoadStockQuote = symbol => {
  return api
    .get(`/stock/${symbol}/quote?token=Tpk_b7cad06c724e45b9be0f7c9e43af6b96`)
    .then(result => result.data);
};

export const LoadStockInfo = async symbol => {
  await timeout(1000);
  return await api
    .get(`/stock/${symbol}/company?token=Tpk_b7cad06c724e45b9be0f7c9e43af6b96`)
    .then(result => result.data);
};

export const LoadStockNews = async symbol => {
  await timeout(1000);
  return await api
    .get(
      `/stock/${symbol}/news/last/5?token=Tpk_b7cad06c724e45b9be0f7c9e43af6b96`
    )
    .then(result => result.data);
};

export const LoadStockChart = async (symbol, range) => {
  await timeout(1000);
  return await api
    .get(
      `/stock/${symbol}/chart/${range}?token=Tpk_b7cad06c724e45b9be0f7c9e43af6b96`
    )
    .then(result => result.data);
};
