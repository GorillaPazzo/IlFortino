import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://databasefortino-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const newsListInDB = ref(database, "notizie");
const inputFieldEL = document.getElementById("inputBox");
const addButtonEL = document.getElementById("logButton");
const newsListEL = document.getElementById("news-list");

addButtonEL.addEventListener("click", function() {
    let inputValue = inputFieldEL.value;
    push(newsListInDB, inputValue);
    clearInputFieldEl();
    console.log(`${inputValue} added to database`);
});

onValue(newsListInDB, function(snapshot) {
    
    let newsArray = Object.values(snapshot.val());
   
    clearNewsList()
     
    for(let i = 0; i < newsArray.length; i++) {
        let currentNews = newsArray[i];
        appendItemToNewsList(currentNews); 
    }
});

   
function clearNewsList(){
    newsListEL.innerHTML = null;
}

function clearInputFieldEl(){
    inputFieldEL.value = null;
}

function appendItemToNewsList(itemValue){
    newsListEL.innerHTML += `<li>${itemValue}</li>`;
}
