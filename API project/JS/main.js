const api = "https://xkcd.com/614/info.0.json";

async function getData() {
  const response = await fetch(api);
  console.log(response);
}

getData(api);
