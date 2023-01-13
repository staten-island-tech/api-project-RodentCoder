const api = "https://pokeapi.co/api/v2/pokemon/ditto";

async function getData(api) {
  try {
    const response = await fetch(api);
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status);
    } else {
      const data = await response.json();
      document.getElementsByClassName("area").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}

console.log(api.content);

getData(api);
