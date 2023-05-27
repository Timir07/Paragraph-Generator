const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWord = (n)=>{  //number of words
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = "";

    let i = 0;
    do{
        const random = (Math.random()*(letters.length-1)).toFixed(0); //gen one word from 26 letters string
        text += letters[random]; //concanate
        i++;
    }
    while(i < n);
    return text.toLowerCase();
}


let numOfWords;
const generatePara= () => {
    numOfWords =  Number(input.value);
    const para = document.createElement("p");
    let data = "";
    for (let i = 0; i < numOfWords; i++) {
        const random = (Math.random()*15).toFixed();   //each word length depends on this and no. of words of gen word func
        data += generateWord(random);
        data += " ";  
    }
    console.log(data);

    para.innerText = data;
    para.setAttribute("class", "paras");
    container.append(para);
};