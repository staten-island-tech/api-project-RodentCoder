import { Doms } from "./doms";

const api = "https://valorant-api.com/v1/weapons";

function insertCard(data) {
  return `<div class="card">
  <h2>${data.displayName}</h2>
  <img class ="img" src=${data.displayIcon} alt = "${data.displayName} , It is a Weapon">
  </div>`;
}

async function getData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    const things = Object.values(data);
    console.log(things[1])
    things[1].forEach((data) => {
      Doms.Cards.insertAdjacentHTML("afterbegin",insertCard(data))
    })

  } catch (error) {
    console.log(error);
  }
}



getData(api);
