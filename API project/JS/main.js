import { Doms } from "./doms";

const api = "https://valorant-api.com/v1/weapons";

function insertCard(data) {
  return `<div class="card">
  <img src=${data.displayIcon}>
  <h2>${data.displayname}</h2>
  </div>`;
}

async function getData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    const things = Object.values(data);
    console.log(things)
    things.forEach((data) => {
      Doms.Area.insertAdjacentHTML("afterbegin",insertCard(data) )
    });
  } catch (error) {
    console.log(error);
  }
}

getData(api);
