const api = "https://pokeapi.co/api/v2/pokemon/ditto";

async function getData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data.content);
  } catch (error) {
    console.log(error);
  }
}

getData(api);
