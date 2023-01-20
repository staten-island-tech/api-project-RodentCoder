import { Doms } from "./doms";

const api = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

<<<<<<< HEAD
=======
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

>>>>>>> cc7a73613789a1f9041b910133f271342cd31b48
function insertCard(el) {
  return `<div class="card">
  <img src=${el.img_url}>
  <h2>${el.name}</h2>
  </div>`;
}
<<<<<<< HEAD

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
=======
 data.filter((data) => data.race.includes("Dragon"))
  .forEach((el) => {
    Doms.Area.insertAdjacentHTML("afterbegin", insertCard(el));
  });
>>>>>>> cc7a73613789a1f9041b910133f271342cd31b48



getData(api);
