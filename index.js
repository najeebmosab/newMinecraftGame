const gameScreen = document.querySelector(".gameScreen");
const Convite = "/assets/images/Convite Minecraft_ modelos e artes grátis para editar e enviar no Whats.png"
const woodImg = "/assets/images/Oak Block Fabric.png"
const gras = "/assets/images/Geeks, Nerds, Gamers - 24 designs  by joyfulrose.png"
const flot = "/assets/images/Dirt Survival Minecraft Server.jfif"
const Spoonflower = "/assets/images/Spoonflower.jfif"
const wood = Math.floor(Math.random() * 15)
const blockFlot = Math.floor(Math.random() * 15)
numOfLevel = Math.floor(Math.random() * 3);
const yllowBlock = 3;
console.log(wood);
console.log(numOfLevel);
console.log(yllowBlock);
sessionStorage.setItem("kindImg", JSON.stringify(-1));
for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 15; col++) {
        let img = document.createElement("img");
        let baicsDiv = document.createElement("div");
        baicsDiv.classList.add(`baicsDiv`)
        baicsDiv.addEventListener("click", (event) => {
            console.log(baicsDiv);
            const val = JSON.parse(sessionStorage.getItem("kindImg"));
            let changeImg;
            let children
            let temp;
            switch (val) {
                case event.target.className.includes("Spoonflower") && 0:
                    newDiv = document.createElement("div");
                    newDiv.style.backgroundColor = "#96d6f2";
                    baicsDiv.appendChild(newDiv);
                    const divChangeVal = document.getElementsByClassName("imgToolsContainer").item(7);
                    changeImg = baicsDiv.children.item(0).remove();
                    console.log(divChangeVal);
                    children = divChangeVal.children[0];
                    children.innerHTML = Number(children.innerHTML) + 1;
                    break;
                case event.target.className.includes("gras") && 1:
                    newDiv = document.createElement("div");
                    newDiv.style.backgroundColor = "#96d6f2";
                    baicsDiv.appendChild(newDiv);
                    const shovel = document.getElementsByClassName("imgToolsContainer").item(6);
                    changeImg = baicsDiv.children.item(0).remove();
                    children = shovel.children.item(0);
                    children.innerHTML = Number(children.innerHTML) + 1;
                    // console.log("divChangeVal", children.innerHTML);
                    break;
                case event.target.className.includes("flot") && 1:
                    newDiv = document.createElement("div");
                    newDiv.style.backgroundColor = "#96d6f2";
                    baicsDiv.appendChild(newDiv);
                    const flot = document.getElementsByClassName("imgToolsContainer").item(5);
                    changeImg = baicsDiv.children.item(0).remove();
                    children = flot.children.item(0);
                    children.innerHTML = Number(children.innerHTML) + 1;
                    // console.log("divChangeVal", children.innerHTML);
                    break;
                case event.target.className.includes("Convite") && 2:
                    newDiv = document.createElement("div");
                    newDiv.style.backgroundColor = "#96d6f2";
                    baicsDiv.appendChild(newDiv);
                    const Convite = document.getElementsByClassName("imgToolsContainer").item(4);
                    changeImg = baicsDiv.children.item(0).remove();
                    children = Convite.children.item(0);
                    children.innerHTML = Number(children.innerHTML) + 1;
                    // console.log("divChangeVal", children.innerHTML);
                    break;
                case event.target.className.includes("woodImg") && 2:
                    newDiv = document.createElement("div");
                    newDiv.style.backgroundColor = "#96d6f2";
                    baicsDiv.appendChild(newDiv);
                    const woodImg = document.getElementsByClassName("imgToolsContainer").item(8);
                    changeImg = baicsDiv.children.item(0).remove();
                    children = woodImg.children.item(0);
                    children.innerHTML = Number(children.innerHTML) + 1;
                    // console.log("divChangeVal", children.innerHTML);
                    break;
                case event.target.className.includes("yellowBoxs") && 3:
                    newDiv = document.createElement("div");
                    newDiv.style.backgroundColor = "#96d6f2";
                    baicsDiv.appendChild(newDiv);
                    const yellowBox = document.getElementsByClassName("imgToolsContainer").item(9);
                    changeImg = baicsDiv.children.item(0).remove();
                    children = yellowBox.children.item(1);
                    children.innerHTML = Number(children.innerHTML) + 1;
                    // console.log("divChangeVal", children.innerHTML);
                    break;
                case 4:

                    debugger;
                    const greenConvite = document.getElementsByClassName("imgToolsContainer").item(4);
                    children = greenConvite.children.item(0);
                    temp = Number(children.innerHTML);
                    if (temp <= 0) {
                        break;
                    }
                    else {
                        changeImg = baicsDiv.children.item(0).remove();
                        temp -= 1;
                        children.innerText = temp.toString();

                        let img = document.createElement("img");
                        img.src = "/assets/images/Convite Minecraft_ modelos e artes grátis para editar e enviar no Whats.png";
                        img.classList.add("Convite")
                        baicsDiv.appendChild(img);
                    }
                    break;

                case 5:

                    debugger;
                    const float = document.getElementsByClassName("imgToolsContainer").item(5);
                    children = float.children.item(0);
                    temp = Number(children.innerHTML);
                    if (temp <= 0) {
                        break;
                    }
                    else {
                        changeImg = baicsDiv.children.item(0).remove();
                        temp -= 1;
                        children.innerText = temp.toString();

                        let img = document.createElement("img");
                        img.src = "/assets/images/Dirt Survival Minecraft Server.jfif";
                        img.classList.add("flot")
                        baicsDiv.appendChild(img);
                    }
                    break;
                case 6:

                    debugger;
                    const gras = document.getElementsByClassName("imgToolsContainer").item(6);
                    children = gras.children.item(0);
                    temp = Number(children.innerHTML);
                    if (temp <= 0) {
                        break;
                    }
                    else {
                        changeImg = baicsDiv.children.item(0).remove();
                        temp -= 1;
                        children.innerText = temp.toString();

                        let img = document.createElement("img");
                        img.src = "/assets/images/Geeks, Nerds, Gamers - 24 designs  by joyfulrose.png";
                        img.classList.add("gras")
                        baicsDiv.appendChild(img);
                    }
                    break;
                case 7:

                    debugger;
                    const Spoonflower = document.getElementsByClassName("imgToolsContainer").item(7);
                    children = Spoonflower.children.item(0);
                    temp = Number(children.innerHTML);
                    if (temp <= 0) {
                        break;
                    }
                    else {
                        changeImg = baicsDiv.children.item(0).remove();
                        temp -= 1;
                        children.innerText = temp.toString();

                        let img = document.createElement("img");
                        img.src = "/assets/images/Spoonflower.jfif";
                        img.classList.add("Spoonflower")
                        baicsDiv.appendChild(img);
                    }
                    break;

                case 8:

                    debugger;
                    const wood = document.getElementsByClassName("imgToolsContainer").item(8);
                    children = wood.children.item(0);
                    temp = Number(children.innerHTML);
                    if (temp <= 0) {
                        break;
                    }
                    else {
                        changeImg = baicsDiv.children.item(0).remove();
                        temp -= 1;
                        children.innerText = temp.toString();

                        let img = document.createElement("img");
                        img.src = "/assets/images/Oak Block Fabric.png";
                        img.classList.add("woodImg")
                        baicsDiv.appendChild(img);
                    }
                    break;
                case 9:

                    debugger;
                    const sun = document.getElementsByClassName("imgToolsContainer").item(9);
                    children = sun.children.item(1);
                    temp = Number(children.innerHTML);
                    if (temp <= 0) {
                        break;
                    }
                    else {
                        changeImg = baicsDiv.children.item(0).remove();
                        temp -= 1;
                        children.innerText = temp.toString();

                        let div = document.createElement("div");
                        div.style.backgroundColor = "yellow";
                        div.classList.add("yellowBoxs")
                        baicsDiv.appendChild(div);
                    }
                    break;
                default:
                    break;
            }
        })
        if (col == wood && row >= 9 + numOfLevel && row < 12) {
            img.src = woodImg;
            img.classList.add("woodImg")
            //    img.style.gridColumn = col + 1;
            //    img.style.gridRow = row + 1;
            baicsDiv.appendChild(img);
            baicsDiv.style.gridColumn = col + 1;
            baicsDiv.style.gridRow = row + 1;
            gameScreen.appendChild(baicsDiv);
        }
        else if (col <= yllowBlock - 2 && row <= yllowBlock - 2) {
            let div = document.createElement("div");
            div.style.backgroundColor = "yellow";
            div.classList.add("yellowBoxs")
            baicsDiv.appendChild(div);
            baicsDiv.style.gridColumn = col + 1;
            baicsDiv.style.gridRow = row + 1;
            gameScreen.appendChild(baicsDiv);
        }
        else if ((col == wood - 1 && row >= 9 - 2 && row < 12 + numOfLevel - 3) || (col == wood && row >= 9 - 2 && row < 12 + numOfLevel - 3) || (col == wood + 1 && row >= 9 - 2 && row < 12 + numOfLevel - 3)) {
            img.src = Convite;
            img.classList.add("Convite")
            baicsDiv.appendChild(img);
            baicsDiv.style.gridColumn = col + 1;
            baicsDiv.style.gridRow = row + 1;
            gameScreen.appendChild(baicsDiv);
        }
        else if (col == blockFlot && row >= 9 + numOfLevel && row < 12) {

            img.src = Spoonflower;
            img.classList.add("Spoonflower")
            baicsDiv.appendChild(img);
            baicsDiv.style.gridColumn = col + 1;
            baicsDiv.style.gridRow = row + 1;
            gameScreen.appendChild(baicsDiv);

        }

        else if (row < 12) {
            let div = document.createElement("div");
            div.style.backgroundColor = "#96d6f2";
            baicsDiv.appendChild(div);
            baicsDiv.style.gridColumn = col + 1;
            baicsDiv.style.gridRow = row + 1;
            gameScreen.appendChild(baicsDiv);
        }
        else if (row == 12) {
            img.src = gras;
            img.classList.add("gras")
            baicsDiv.appendChild(img);
            baicsDiv.style.gridColumn = col + 1;
            baicsDiv.style.gridRow = row + 1;
            gameScreen.appendChild(baicsDiv);
        }
        else if (row > 12) {
            img.src = flot;
            img.classList.add("flot")

            baicsDiv.appendChild(img);
            baicsDiv.style.gridColumn = col + 1;
            baicsDiv.style.gridRow = row + 1;
            gameScreen.appendChild(baicsDiv);
        }




        // console.log(col);
    }
}



const tools = document.querySelector(".tools");
const arr = ["/assets/images/664112.png", "/assets/images/Iron_Shovel_25718.png", "/assets/images/pngkit_minecraft-pickaxe-png_1516343.png", "/assets/images/SeekPng.com_bullet-fire-png_3253322.png", "/assets/images/Convite Minecraft_ modelos e artes grátis para editar e enviar no Whats.png", "/assets/images/Dirt Survival Minecraft Server.jfif", "/assets/images/Geeks, Nerds, Gamers - 24 designs  by joyfulrose.png", "/assets/images/Spoonflower.jfif", "/assets/images/Oak Block Fabric.png", '']

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let div = document.createElement("div");
    div.classList.add("imgToolsContainer");
    let img = document.createElement("img");
    if (i == arr.length - 1) {
        let p = document.createElement("p")
        p.classList.add("textImgFloat");
        p.innerText = 0;
        let div2 = document.createElement("div");
        div2.classList.add("yellowBox");
        div2.value = arr.length - 1;
        div.appendChild(div2);
        div.appendChild(p);
        tools.appendChild(div);
        div.addEventListener("click", (event) => {
            console.log(event.target.value);
            sessionStorage.setItem("kindImg", JSON.stringify(event.target.value));
        });
        break
    }
    if (i >= 4) {
        let p = document.createElement("p")
        p.classList.add("textImgFloat");
        p.innerText = 0;
        div.appendChild(p);
    }
    img.src = element
    img.value = i;

    div.addEventListener("click", (event) => {
        console.log(event.target.value);
        sessionStorage.setItem("kindImg", JSON.stringify(event.target.value));
    });
    div.appendChild(img);
    tools.appendChild(div);
}


