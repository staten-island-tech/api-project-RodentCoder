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
    const things = Object.keys(data);
    things
      .filter((data) => data.name.includes("'race':'Dragon'"))
      .forEach((el) => {
        console.log(el);
      });

    return data.data;
  } catch (error) {
    console.log(error);
  }
}


getData(api);
