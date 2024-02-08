

const gridElement = document.getElementById("grid");
const endGame = document.getElementById("result");

//bottone per giocare
const buttonPlay = document.getElementById("button-play");

let cellNum;
let isBomb;



buttonPlay.addEventListener("click",function(){
    let selectDiff = document.getElementById("select").value;
    gridElement.innerText = ""
    document.getElementById("points").innerText = "0"
    gridElement.classList.remove("disabled");

        
    
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
    const randomNumbersArray = getRandomNumbersArray(cellNum)  //creazione 16 numeri casuali
    console.log(randomNumbersArray)

    const arrayClicked = []
    
    for(let i = 0; i < cellNum; i++){        
        
        const newElement = document.createElement("div");
        newElement.classList.add("col-auto", "border-black", "border" ,"square");
        newElement.style.width = `calc(100%/${numberCol})`;
        
        gridElement.append(newElement);
        newElement.innerText = `${i+1}`           
        
        let numberClicked;
        
        // al click aggiungo classe active e numero in console
        newElement.addEventListener("click", function(){
            
            arrayClicked.push("click");
            numberClicked = i+1; 
            this.classList.add("active");
            document.getElementById("points").innerText = `${arrayClicked.length}`
                    
            isBomb = findNumberArray(randomNumbersArray,numberClicked)

                      
            if (isBomb){
                newElement.style.backgroundColor = "red"  
                console.log("primo",isBomb);
                gridElement.classList.add("disabled");
                endGame.innerHTML = `Hai perso! Hai fatto ${arrayClicked.length - 1} click prima di colpire una bomba!`
                for (j=0; j<randomNumbersArray.length; j++){
                    document.querySelector(`#grid div:nth-of-type(${randomNumbersArray[j]})`).classList.add("bomb")
                }
                document.getElementById("points").innerText = `${arrayClicked.length-1}`

                
            } else if (arrayClicked.length == (cellNum - 16)){
                console.log("lungh.",arrayClicked.length)
                gridElement.classList.add("disabled");
                endGame.innerHTML = "Hai vinto!"



            }

        })
                
    }            


    
}



// funzione per trovare bomba
function findNumberArray(array, target) {
    return array.includes(target); // Returns true if the target is found, false otherwise
}


//funzione per array random    
function getRandomNumbersArray(maxNumArray) {

    const numbersArray = [];

    while (numbersArray.length < 16) {

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
    
