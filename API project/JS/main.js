import { Doms } from "./doms";

const api = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

async function getData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

const promise = getData(api);

promise.then(function (data) {
  console.log(data);
});

function insertCard(el) {
  return `<div class="card">
  <img src=${el.img_url}>
  <h2>${el.name}</h2>
  </div>`;
}

getData(api);
