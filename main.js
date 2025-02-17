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
      const divNew = document.createElement("div");
      const pNew = document.createElement("p");
      const divNew2 = document.createElement("div");
      const btnDA = document.createElement("button");
      const btnNONE = document.createElement("button");

      btnDA.addEventListener("click", () => {
        newText.textContent = "";
        divtag.removeChild(divElement);
        divtag.removeChild(divNew);
      });

      btnNONE.addEventListener("click", () => {
        divtag.removeChild(divNew);
      });

      divNew2.style.display = "flex";
      divNew2.style.flexDirection = "row";
      divNew2.style.justifyContent = "center";
      divNew2.style.gap = "50px";
      divNew2.style.marginTop = "70px";

      btnDA.textContent = "Да";
      btnDA.style.width = "150px";
      btnDA.style.height = "60px";
      btnDA.style.backgroundColor = "green";
      btnDA.style.fontFamily = "sans-serif";
      btnDA.style.fontSize = "30px";
      btnDA.style.color = "White";
      btnDA.style.borderRadius = "20px";
      btnDA.style.border = "none";

      btnNONE.textContent = "Отмена";
      btnNONE.style.width = "150px";
      btnNONE.style.height = "60px";
      btnNONE.style.backgroundColor = "orange";
      btnNONE.style.fontFamily = "sans-serif";
      btnNONE.style.fontSize = "30px";
      btnNONE.style.color = "White";
      btnNONE.style.borderRadius = "20px";
      btnNONE.style.border = "none";

      divNew.style.display = "block";
      divNew.style.position = "fixed";
      divNew.style.zIndex = "1";
      divNew.style.top = "270px";
      divNew.style.width = "450px";
      divNew.style.height = "260px";
      divNew.style.border = "3px solid  blue";
      divNew.style.borderRadius = "20px";
      divNew.style.backgroundColor = "White";

      pNew.textContent = "Вы уверены, что хотите удалить эту задачу?";
      pNew.style.fontFamily = "sans-serif";
      pNew.style.fontSize = "30px";
      pNew.style.color = "blue";
      pNew.style.textAlign = "center";

      divNew.appendChild(pNew);
      divtag.appendChild(divNew);

      divNew2.append(btnDA, btnNONE);
      divNew.appendChild(divNew2);
      // btnTag2.addEventListener("dblclick", () => {
      // });
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
divtag.style.overflow = "hidden";

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
