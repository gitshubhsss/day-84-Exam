async function getData() {
  try {
    let response = await fetch("https://harry-potter-api-en.onrender.com/db");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("connection essue", error);
  }
}
getData();
