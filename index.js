const catContainer = document.getElementById("catContainer");

fetch(
  "https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_YNdBDkb6hJuKn2sTeEUeI2J2p14xqL77loXkCwJJVr284EgKEM1nSrVDrdrpCZKb"
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Invalid Request");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const catImgUrl = data[0].url;
    const catImg = document.createElement("img");
    catImg.src = catImgUrl;
    catContainer.appendChild(catImg);
  })
  .catch((err) => {
    console.warn(err);
  });
