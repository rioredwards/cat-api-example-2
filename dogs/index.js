const dogContainer = document.getElementById("dogContainer");

fetch(
  "https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_cJYKf789eUk5mDuCfoXp2O9FovgZd1gbIDkftrZVjGJgtRclLAkuiP9k0OnrpmMy"
)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Invalid Request");
    }
    return res.json();
  })
  .then((data) => {
    // Clear out previous dog
    dogContainer.innerHTML = "";

    const dogImgUrl = data[0].url;
    const dogImg = document.createElement("img");
    dogImg.src = dogImgUrl;

    const breedName = data[0].breeds[0].name;
    const dogBreedTitle = document.createElement("h2");
    dogBreedTitle.innerText = breedName;

    const breedTemperament = document.createElement("p");
    breedTemperament.innerText = data[0].breeds[0].temperament;

    dogContainer.appendChild(dogBreedTitle);
    dogContainer.appendChild(breedTemperament);
    dogContainer.appendChild(dogImg);
  })
  .catch((err) => {
    console.warn(err);
  });
