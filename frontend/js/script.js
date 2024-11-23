function searchDisease() {
    var input, filter, diseaseList, cards, card, cardTitle, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    diseaseList = document.getElementById("diseaseList");
    cards = diseaseList.getElementsByClassName('disease-item');

    for (i = 0; i < cards.length; i++) {
      card = cards[i];
      cardTitle = card.getElementsByClassName("card-title")[0];
      txtValue = cardTitle.textContent || cardTitle.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    }
  }