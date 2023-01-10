import "../Styles/styles.css";

const api = "https://xkcd.com/614/info.0.json";

async function getData(api) {
  const response = await fetch(api);
  console.log(response);
}
getData(api);
