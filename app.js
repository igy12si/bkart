let arrayNumber=[];



window.onload=function(){
    for(let i=0;i<5;i++){
        arrayNumber.push(randomNumber(1,1000));
    }
    let currentList=document.getElementById("currentNumbers");
    for(let i=0;i<5;i++){
        let listItem=document.createElement("li");
        listItem.innerHTML=arrayNumber[i];
        currentList.appendChild(listItem);
    }
}


var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function addRandomNumber(){    
    //let arrayNumber=[];
    let rand = randomNumber(1, 1000);
    arrayNumber.push(rand)
    let currentList=document.getElementById("currentNumbers");
    let listItem=document.createElement("li");
    listItem.innerHTML=rand;
    currentList.appendChild(listItem);
    
}

function addCustomNumber(){
    let customInput=document.getElementById("customNumber").value;
    if(customInput<0 || customInput%1!=0){
        alert("Vnesite pozitivno celo število");
        return;
    }
    if(customInput){
        arrayNumber.push(customInput);
        let currentList=document.getElementById("currentNumbers");
        let listItem=document.createElement("li");
        listItem.innerHTML=customInput;
        currentList.appendChild(listItem);
    }
}

function deleteRandomNumber(){
    let index = Math.floor(Math.random() * arrayNumber.length);
    if(arrayNumber.length>0){
        arrayNumber.splice(index, 1);
        let currentList=document.getElementById("currentNumbers");
        currentList.removeChild(currentList.childNodes[index]);
    }    
}

function deleteAllNumbers(){
    var youSure=confirm("Ali ste prepričani, da želite izbrisati vsa števila na seznamu?")
    if(youSure){
        arrayNumber = [];
        let currentList=document.getElementById("currentNumbers");
        while (currentList.firstChild) {
            currentList.removeChild(currentList.firstChild);
        }
    }
}

async function calculateMedian(){
    let medianResult = document.getElementById("median-result");
    medianResult.innerHTML="Calculating";

    let response = await axios.post("api/mediana/calculate", {numbers: arrayNumber});
    medianResult.innerHTML='Median: $(response.data.median}';
}