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
const arr = ["/assets/images/664112.png", "/assets/images/Iron_Shovel_25718.png", "/assets/images/pngkit_minecraft-pickaxe-png_1516343.png", "/assets/images/SeekPng.com_bullet-fire-png_3253322.png", "/assets/images/Convite Minecraft_ modelos e artes grátis para editar e enviar no Whats.png", "/assets/images/Dirt Survival Minecraft Server.jfif", "/assets/images/Geeks, Nerds, Gamers - 24 designs  by joyfulrose.png", "/assets/images/Spoonflower.jfif"]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let div = document.createElement("div");
    div.classList.add("imgToolsContainer");
    let img = document.createElement("img");
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

