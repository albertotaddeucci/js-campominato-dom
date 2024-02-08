

const gridElement = document.getElementById("grid")

//bottone per giocare
const buttonPlay = document.getElementById("button-play");

let cellNum;

buttonPlay.addEventListener("click",function(){
    let selectDiff = document.getElementById("select").value;
    gridElement.innerText = ""
        
    
    if (selectDiff == 1){
        cellNum = 100    
        createGrid(cellNum,10);

        
    } else if (selectDiff == 2){
        cellNum = 81
        createGrid(cellNum,9);
        
        
    } else if (selectDiff == 3){
        cellNum = 49
        createGrid(cellNum,7);
    }
    
    
})






/* -------------------------------- funzioni -------------------------------- */


//funzione crea griglia
function createGrid(cellNum,numberCol){    
    // const randomNumbersArray = getRandomNumbersArray(cellNum)  
    
    for(let i = 0; i < cellNum; i++){        

        const newElement = document.createElement("div");
        newElement.classList.add("col-auto", "border-black", "border" ,"square");
        newElement.style.width = `calc(100%/${numberCol})`;
        
        gridElement.append(newElement);
        
        // al click aggiungo classe active e numero in console
        newElement.addEventListener("click", function() {
            
            this.classList.toggle("active");
            console.log(i+1);    
            
        });
    
    }            
    
}


//funzione per array random    
function getRandomNumbersArray(maxNumArray) {

    const numbersArray = [];

    while (numbersArray.length < maxNumArray) {

        // Inserisco il numero solo se non è già presente
        const newNumber = generateRandomNumber(maxNumArray);

        if( ! numbersArray.includes(newNumber) ) {

            numbersArray.push(newNumber);

        }
    }

    return numbersArray;

}
    
    
// funzione che genera un numero random
function generateRandomNumber(maxNumber) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    return randomNumber;
}
    
