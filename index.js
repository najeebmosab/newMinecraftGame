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

for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 15; col++) {
        let img = document.createElement("img");
       
        if (col == wood && row >= 9 + numOfLevel && row < 12) {
            img.src = woodImg;
            img.style.gridColumn = col + 1;
            img.style.gridRow = row + 1;
            gameScreen.appendChild(img);
        }
        else if(col <= yllowBlock-2 && row <=yllowBlock-2){
            let div = document.createElement("div");
            div.style.backgroundColor="yellow";
            div.style.gridColumn = col + 1;
            div.style.gridRow = row + 1;
            gameScreen.appendChild(div);
        }
        else if ((col == wood - 1 && row >= 9 - 2 && row < 12 + numOfLevel - 3) || (col == wood && row >= 9 - 2 && row < 12 + numOfLevel - 3) || (col == wood + 1 && row >= 9 - 2 && row < 12 + numOfLevel - 3)) {
            img.src = Convite;
            img.style.gridColumn = col + 1;
            img.style.gridRow = row + 1;
            gameScreen.appendChild(img);
        }
        else if (col == blockFlot && row >= 9 + numOfLevel && row < 12) {

            img.src = Spoonflower;
            img.style.gridColumn = col + 1;
            img.style.gridRow = row + 1;
            gameScreen.appendChild(img);

        }

        else if (row < 12) {
            let div = document.createElement("div");
            div.style.backgroundColor = "#96d6f2";
            gameScreen.appendChild(div);
            div.style.gridColumn = col + 1;
            div.style.gridRow = row + 1;
        }
        else if (row == 12) {
            img.src = gras;
            img.style.gridColumn = col + 1;
            img.style.gridRow = row + 1;
            gameScreen.appendChild(img);
        }
        else if (row > 12) {
            img.src = flot;
            img.style.gridColumn = col + 1;
            img.style.gridRow = row + 1;
            gameScreen.appendChild(img);
        }




        // console.log(col);
    }
}