

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
    getMedian();
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
    const customInputNumber=parseInt(customInput);
    if(customInput<0 || customInput%1!=0){
        alert("Vnesite pozitivno celo število");
        return;
    }
    if(customInput){
        arrayNumber.push(customInputNumber);
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
};

function deleteAllNumbers(){
    var youSure=confirm("Ali ste prepričani, da želite izbrisati vsa števila na seznamu?")
    if(youSure){
        arrayNumber = [];
        let currentList=document.getElementById("currentNumbers");
        while (currentList.firstChild) {
            currentList.removeChild(currentList.firstChild);
        }
    }
};



async function calculateMedian(){
    console.log(arrayNumber);
    let response = await axios.post("http://localhost:3000/api/mediana/calculate", {
        numbers: arrayNumber
    });
    console.log(response.data);

    getMedian();
};

async function getMedian(){
    let response = await axios.get("http://localhost:3000/api/mediana/get");
    console.log(response.data);
    var tabela = "";
    response.data.forEach(element => {
        tabela+="<tr><td>" + element.MEDIANA + "</td><td>"+ element.STEVILA + "</td></tr>\n" 
    });
    //console.log(tabela);
    document.getElementById("mediansTable").innerHTML=tabela;
}