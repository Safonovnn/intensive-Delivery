document.addEventListener("DOMContentLoaded", () => {
  const btnOrder = document.getElementById("btnOrder");
  const modal = document.getElementById("modal");
  btnOrder.addEventListener("click", () => {
    modal.classList.add("open");
  });
  modal.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target === modal || event.target.closest("#close")) {
      modal.classList.remove("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cardWrapper = document.getElementById("cardWrapper");

  const renderArr = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      price: 900,
      raiting: 4.5,
      type: "пицца",
      image: "image0.jpg",
    },
  ];

  const loading = () => {
    cardWrapper.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const renderCard = (arr) => {
    cardWrapper.innerHTML = "";
    arr.forEach((el) => {
      cardWrapper.insertAdjacentHTML(
        "beforeend",
        `
        <div class="products-card" id="${el.id}">
            <img src="img/${el.image}" alt="image" />
            <div class="card-descr-top">
                <div class="card-descr-title">${el.title}</div>
                <div class="card-time-delivery">${el.time} мин.</div>
            </div>
            <div class="card-descr-bottom">
                <div class="card-descr-star">
                <img src="img/icon-star.png" alt="icon" />
                <p>${el.raiting}</p>
                </div>
                <div class="card-descr-price">От ${el.price} руб.</div>
                <div class="card-descr-subtitle">${el.type}</div>
            </div>
        </div>
        `
      );
    });
  };

  loading();
  setTimeout(() => {
    renderCard(renderArr);
  }, 2000);
});
