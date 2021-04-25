const men = [
  "beest.jpg",
  "kermit.jpg",
  "golden-boy1.jpg",
  "my-aal-time-favorite.jpg",
  "viva-brazil.jpg",
  "zalig.jpg",
  "lekker.jpg",
  "nogeentje.jpg",
  "dechristiano.jpg",
  "nam-hazard.jpg",
  "jeej-nog-eden.jpg",
  "de-chris.jpg",
  "modelleke.webp",
  "nog-ronaldo.jpg",
  "binky.jpg",
  "leve-den-alex.webp",
];

function ManFoto(foto, x, y, r = 0, id) {
  this.foto = `./images/${foto}`;
  this.x = Math.round(x);
  this.y = Math.round(y);
  this.r = r;
  this.id = id;
}

let printArr = [];

function showMen() {
  document.querySelector("body").addEventListener("click", () => {
    const theBody = document.querySelector("body");
    const randomFotoIndex = Math.floor(Math.random() * men.length);
    const randomPositionX = Math.random();
    const randomPositionY = Math.random();
    const topCalc = (theBody.offsetHeight - 210) * randomPositionY;
    const leftCalc = (theBody.offsetWidth - 210) * randomPositionX;
    const randomFifteen = Math.floor(Math.random() * 30 - 15);

    const newFoto = new ManFoto(
      men[randomFotoIndex],
      leftCalc,
      topCalc,
      randomFifteen
    );

    printArr.push(newFoto);

    theBody.innerHTML = "";

    printArr.forEach((obj, i) => {
      theBody.innerHTML += `<img src="${obj.foto}" alt="">`;
      let thisFotos = document.querySelectorAll(`img[src="${obj.foto}"]`);
      let thisFoto = thisFotos[thisFotos.length - 1];
      thisFoto.style.top = `${obj.y}px`;
      thisFoto.style.left = `${obj.x}px`;
      thisFoto.style.transform = `rotate(${obj.r}deg)`;
      console.log(thisFoto);
    });

    for (var i = 0; i < printArr.length - 1; i++) {
      if (newFoto.foto === printArr[i].foto) {
        console.log("duplicate found");
        setTimeout(() => {
          theBody.innerHTML = "";
          printArr.splice(0, printArr.length);
        }, 1000);
      }
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  men.forEach(function (img) {
    new Image().src = "../images/" + img;
  });
  showMen();
});
