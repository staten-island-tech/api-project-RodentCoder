import { Doms } from "./doms";

const api = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function insertCard(el) {
  return `<div class="card">
  <img src=${el.img_url}>
  <h2>${el.name}</h2>
  </div>`;
}

async function getData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    const things = Object.values(data);
    things
      .filter((data) => data.race.includes("Dragon"))
      .forEach((data) => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
}

getData(api);
