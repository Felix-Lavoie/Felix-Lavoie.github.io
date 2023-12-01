let chapters = {
  debut: {
    titre: "Survivre l'empire",
    description:
      "Darth Vader est en train d'essayer de rantrer dans votre vaisseau et vous menace de vous tuer toi et tes collegues. Tu a deux choix, t'enfuire ou guarder ton poste.",
    image: "./assets/images/Vader.webp",
    video: "./assets/video/ship.mp4",
    boutons: [
      { titre: "fuire", destination: "stop" },
      { titre: "rester", destination: "mourrire" },
    ],
  },
  mourrire: {
    titre: "mort",
    description: "Darth Vader vous tue",
    image: "./assets/images/Vader.webp",
    video: "./assets/video/obi-wan-kenobi-death.mp4",
    boutons: [{ titre: "retour au depart", destination: "debut" }],
  },
  stop: {
    titre: "arreter vous!",
    description:
      "Alors que vous vous mettez a courrir, votre superieur vous arrete et vous demande ce que vous faite. Tu a deux choix, continuer de courrire ou t'arreter.",
    image: "./assets/images/superieur.png",
    boutons: [
      { titre: "vous continuez de courrire", destination: "shotDown" },
      { titre: "vous vous arretez", destination: "superieur" },
    ],
  },
  shotDown: {
    titre: "trahison",
    description:
      'votre superieur vous tire dans le dos et crie "AUCUN DESERTEUR!"',
    image: "./assets/images/shot-in-back.png",
    son: "./assets/son/pew-pew.mp3",
    boutons: [{ titre: "retour au depart", destination: "debut" }],
  },
  superieur: {
    titre: "superieur",
    description: "votre superieur vous demande pourquoi vous courrez.",
    image: "./assets/images/superieur-ask.png",
    boutons: [
      { titre: "J'ais oublier le robinet ouvert.", destination: "front" },
      { titre: "J'e veut fuire.", destination: "front" },
      { titre: "Je veut aller au toilette", destination: "toilette" },
      {
        titre: "Je veut aller au toilette pouver vous me donner la clee",
        destination: "toilette2",
      },
    ],
  },
  front: {
    titre: "retour au front",
    description: "votre superieur vous retourne au front",
    image: "./assets/images/superieur.png",
    boutons: [{ titre: "continuer", destination: "mourrire" }],
  },
  toilette: {
    titre: "toilette",
    description: "vous vous dirigez au toilettes, mais allez-i vous vraiment.",
    image: "./assets/images/corridor.png",
    boutons: [
      { titre: "oui", destination: "clef" },
      { titre: "non", destination: "vaisseau" },
    ],
  },
  toilette2: {
    titre: "toilette",
    description: "vous vous dirigez au toilettes, mais allez-i vous vraiment.",
    image: "./assets/images/corridor.png",
    boutons: [
      { titre: "oui", destination: "clef" },
      { titre: "non", destination: "vaisseau" },
    ],
  },
  vaisseau: {
    titre: "vaisseau",
    description:
      "vous vous metter a courire mais vous arriver rapidement a la fin du vaisseau",
    image: "./assets/images/corridor.png",
    boutons: [{ titre: "continuer", destination: "mourrire" }],
  },
  clef: {
    titre: "clef?",
    description: "avez-vous la clef",
    image: "./assets/images/keys.png",
    boutons: [{ titre: "non", destination: "vaisseau" }],
  },
  ending: {
    titre: "la fin?",
    description:
      "pendant que vous fesiez vos besoin Darth Vader a fini de tuer tous les personne dans le vaisseau sauf toi, le chanceux qui est restez au toilette.",
    image: "./assets/images/toilette.png",
    boutons: [{ titre: "une autre partie?", destination: "debut" }],
  },
};

let twist = false;

function goToChapter(chapter) {
  localStorage.setItem("chapter", chapter);

  console.log(localStorage.getItem("chapter"));

  const chap = chapters[chapter];

  const title = document.getElementById("text");
  const texte = document.getElementById("desc");
  const img = document.getElementById("img");

  title.innerHTML = chap.titre;
  texte.innerHTML = chap.description;
  img.innerHTML = `<img src=${chap.image}>`;

  // Sélectionne le div .boutons
  const boutons = document.getElementById("boutons");

  // Supprime tous les boutons enfants du div .boutons
  while (boutons.firstChild) {
    boutons.removeChild(boutons.firstChild);
  }

  // Pour chaque boutons ...
  for (let i = 0; i < chap.boutons.length; i++) {
    // on crée un nouveau bouton
    const nouveauBtn = document.createElement("button");

    // on applique un libellé au bouton
    nouveauBtn.textContent = chap.boutons[i].titre;

    // on appele goToChapter lorsqu'on clique le bouton
    nouveauBtn.addEventListener("click", () => {
      // la destination, c'est la destination du bouton!
      goToChapter(chap.boutons[i].destination);
    });
    // enfin, on ajoute le bouton dans la page Web (dans le DOM)
    boutons.appendChild(nouveauBtn);

    if (chapters[chapter] && chapter === "toilette2") {
      localStorage.setItem("twist", "yes");
    }

    if (chapters[chapter] && chapter === "debut") {
      localStorage.setItem("twist", "no");
    }

    if (localStorage.getItem("twist") === "yes") {
      twist = true;
    }

    if (localStorage.getItem("twist") === "no") {
      twist = false;
    }

    if (chapter === "clef" && twist) {
      const boutons = document.getElementById("boutons");
      const btnV = document.createElement("button");
      btnV.textContent = "oui";
      btnV.addEventListener("click", () => {
        goToChapter("ending");
      });
      boutons.appendChild(btnV);
    }
  }

  const media = document.querySelector("#img");
  const video = document.createElement("video");
  const image = document.createElement("img");

  if (chapters[chapter].video) {
    media.innerHTML = "";
    video.src = chapters[chapter].video;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    media.appendChild(video);
  } else {
    media.innerHTML = "";
    image.src = chapters[chapter].image;
    media.appendChild(image);
  }

  const son = new Audio(chapters[chapter].son);

  if (chapters[chapter].son) {
    son.src = chapters[chapter].son;
    son.autoplay = true;
  }
}
console.log(localStorage.getItem("chapter"))
let cha = localStorage.getItem("chapter") || 'debut';
  goToChapter(cha);


const btnRedo = document.getElementById("redo");
btnRedo.addEventListener("click", () => {
    localStorage.clear();
    goToChapter("debut");
});