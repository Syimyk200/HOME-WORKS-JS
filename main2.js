const body = document.getElementById("body");
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.gap = "60px";
body.style.marginTop = "100px";
body.style.backgroundColor = "aqua";

const array3 = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png",
    title: "TWITTER",
    description:
      "Twitter - американский сервис микроблогов и социальная сеть, в который пользователи публикуют сообщения, известные как твиты и взаимодействуют с ними.",

    link: "https://web.telegram.org/k/",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    title: "INSTAGRAM",
    description:
      "Instagram - американсякая социальная сеть для обмена фотографиями и видео, основанная Кевином Систромом и Майком Кригером",
    link: "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png",
    title: "TELEGRAM",
    description:
      "Telergam - клоссплатформенная система мгновенного обмена сообщениями с функциями обмена текстовыми, голосовыми и видеосообщениями, а также...",
    link: "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F",
  },
];

array3.forEach((item) => {
  const divTag = document.createElement("div");
  const pTag = document.createElement("p");
  const image = document.createElement("img");
  const h1Tag = document.createElement("h1");
  const button = document.createElement("button");

  divTag.style.border = "5px solid black";
  divTag.style.width = "400px";
  divTag.style.height = "600px";
  divTag.style.display = "flex";
  divTag.style.flexDirection = "column";
  divTag.style.gap = "35px";
  divTag.style.alignItems = "center";
  divTag.style.paddingTop = "40px";
  divTag.style.backgroundColor = "White";

  image.src = item.icon;
  image.style.width = "100px".height = "100px";

  h1Tag.textContent = item.title;
  h1Tag.style.fontFamily = "sans-serif";
  h1Tag.style.fontSize = "40px";

  pTag.textContent = item.description;
  pTag.style.fontSize = "20px";
  pTag.style.padding = "0 20px";
  pTag.style.textAlign = "center";
  pTag.style.fontFamily = "sans-serif";

  button.textContent = "READ MORE";
  button.style.width = "210px";
  button.style.height = "60px";
  button.style.borderRadius = "50px";
  button.style.backgroundColor = "black";
  button.style.color = "White";

  divTag.addEventListener("mouseover", () => {
    divTag.style.backgroundColor = "red";
    divTag.style.border = "none";
    h1Tag.style.color = "White";
    pTag.style.color = "White";
    button.style.backgroundColor = "White";
    button.style.color = "black";
  });

  divTag.addEventListener("mouseout", () => {
    divTag.style.backgroundColor = "White";
    divTag.style.border = "5px solid black";
    h1Tag.style.color = "";
    pTag.style.color = "";
    button.style.backgroundColor = "black";
    button.style.color = "White";
  });

  divTag.appendChild(image);
  divTag.appendChild(h1Tag);
  divTag.appendChild(pTag);
  divTag.appendChild(button);
  body.append(divTag);
});
