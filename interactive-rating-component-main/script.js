const submitBtn = document.querySelector(".btn");
const ratings = document.getElementsByName("rating");
const rateCard = document.querySelector(".rate-card");
const thankYouCard = document.querySelector(".thank-you-card");
const rateChosen = document.querySelector(".rate-chosen");

// console.log(rateCard);

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  for (var i = 0; i < ratings.length; i++) {
    if (ratings[i].checked) {
      console.log(ratings[i].value);
      rateCard.classList.add("hidden");
      thankYouCard.classList.remove("hidden");
      rateChosen.textContent = ratings[i].value;
    }
  }
});
