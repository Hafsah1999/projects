const btnE1 = document.getElementById("btn")
const quoteE1 = document.getElementById("quote")
const authorE1 = document.getElementById("author")

const apiURL = "https://api.quotable.io/random"


async function getQuote(){
    
 try {    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteE1.innerText = quoteContent;
    authorE1.innerText = "~" + quoteAuthor;
    console.log(data);
}

    
  catch (error) {
    console.log(error);
    quoteE1.innerText = "An error happened, try again later";
    authorE1.innerText = "An error happened";
    
    
 }
}


btnE1.addEventListener("click",getQuote)