const body = document.getElementById("body");
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.backgroundColor = "aqua";
body.style.paddingTop = "50px";

const divtag = document.createElement("div");
const h1Teg = document.createElement("h1");
const divTag2 = document.createElement("div");
const inputTag = document.createElement("input");
const btnTag = document.createElement("button");

btnTag.addEventListener("click", () => {
  const divElement = document.createElement("div");
  const btnTag2 = document.createElement("button");
  const text = inputTag.value.trim();

  if (text === "") {
    alert("Пожалуйста введите текст!");
    divtag.removeChild(divElement);
  } else {
    const newText = document.createElement("p");
    newText.textContent = text;
    newText.style.marginLeft = "20px";
    newText.style.color = "White";
    newText.style.fontSize = "30px";
    newText.style.fontFamily = "sans-serif";

    inputTag.value = "";

    divElement.appendChild(newText);
    btnTag2.addEventListener("click", () => {
      newText.textContent = "";
      btnTag2.addEventListener("dblclick", () => {
        divtag.removeChild(divElement);
      });
    });
  }

  divElement.style.width = "800px";
  divElement.style.height = "80px";
  divElement.style.backgroundColor = " #6495ed";
  divElement.style.marginBottom = "15px";
  divElement.style.display = "flex";
  divElement.style.justifyContent = "space-between";
  divElement.style.alignItems = "center";

  btnTag2.textContent = "DELETE";
  btnTag2.style.width = "150px";
  btnTag2.style.height = "50px";
  btnTag2.style.marginRight = "30px";
  btnTag2.style.borderRadius = "50px";
  btnTag2.style.backgroundColor = "#ee748d";
  btnTag2.style.color = "White";
  btnTag2.style.fontSize = "24px";
  btnTag2.style.fontFamily = "sans-serif";

  divElement.append(btnTag2);
  divtag.append(divElement);
});

divtag.style.width = "1000px";
divtag.style.height = "700px";
divtag.style.backgroundColor = "White";
divtag.style.borderRadius = "40px";
divtag.style.display = "flex";
divtag.style.flexDirection = "column";
divtag.style.alignItems = "center";
divtag.style.overflow="hidden"

h1Teg.textContent = "TODO-LIST";
h1Teg.style.fontFamily = "sans-serif";
h1Teg.style.fontSize = "40px";
h1Teg.style.color = "#6495ed";

divTag2.style.display = "flex";
divTag2.style.gap = "30px";
divTag2.style.marginBottom = "30px";

inputTag.style.width = "500px";
inputTag.style.height = "70px";
inputTag.placeholder = "Enter new todo...";
inputTag.style.fontSize = "30px";
inputTag.style.paddingLeft = "15px";
inputTag.style.border = "3px solid #6495ed";

btnTag.textContent = "ADD";
btnTag.style.width = "150px";
btnTag.style.height = "70px";
btnTag.style.borderRadius = "50px";
btnTag.style.fontSize = "30px";
btnTag.style.fontFamily = "sans-serif";
btnTag.style.backgroundColor = "#be4e64";
btnTag.style.color = "White";

divtag.appendChild(h1Teg);

divTag2.append(inputTag, btnTag);

divtag.appendChild(divTag2);
body.appendChild(divtag);
