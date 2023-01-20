import { Doms } from "./doms";

const api = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

async function getData(api) {
  try {
    const response = await fetch(api);
    if (response.status <200 || response.status >299) {
      throw console.log("Poopypants")
    } else {
      const cards = await response.json();
      console.log(cards)
      return cards.data
    }
  } catch (error) {
    console.log("error");
  } 
}

const promise =  getData(api);

promise.then(function (cards) {
  console.log(cards);
});

function insertCard(el) {
  return `<div class="card">
  <img src=${el.img_url}>
  <h2>${el.name}</h2>
  </div>`;
}
 data.filter((data) => data.race.includes("Dragon"))
  .forEach((el) => {
    Doms.Area.insertAdjacentHTML("afterbegin", insertCard(el));
  });



getData(api);
