let cont = document.querySelector(".Container");
let forfetch = document.querySelector(".fetchcont");

fetch("./data.json")
  .then((data) => data.json())
  .then((json) => {
    console.log(json);
    for (let i = 0; i < json.length; i++) {
      let div = document.createElement("div");
      div.classList.add("div");
      forfetch.appendChild(div);

      let img = document.createElement("img");
      div.appendChild(img);
      img.src = json[i].img;
      img.classList.add("dataimgs");

      let p = document.createElement("p");
      p.innerHTML = json[i].txt1;
      div.appendChild(p);
      p.classList.add("p");

      let p2 = document.createElement("p2");
      p2.innerHTML = json[i].txt2;
      div.appendChild(p2);
      p2.classList.add("p2");
    }
  });
