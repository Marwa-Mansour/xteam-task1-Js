function showMyBio(){
    var x = document.getElementById("myBio");
    if (x.style.display === "none") {
        x.style.display = "block";
       
    
    } else {
        x.style.display = "none";
    }
    
}


function myPet(){
    var p = document.getElementById("pet");
    var nam = document.getElementById("namera");
    

    if (p.innerHTML === "Pets"){
        p.innerHTML = "I love all animals without discrimination. However, my favourite is CATS. Meet My Nameera";
        nam.style.display = "inline-block";
    } else {
        p.innerHTML = "Pets";
        nam.style.display = "none";
    }
}

function myLang() {
    var L = document.getElementById("language");
    
    if (L.innerHTML === "Languages"){
        L.innerHTML = "I have a passion for learnign languages. I speak English fluently, a little bit of French, and a basic conversational level of Turkish."
    } else {
        L.innerHTML = "Languages"
    }
}


function myBook() {
    var B = document.getElementById("book");
    
    if (B.innerHTML === "Books"){
        B.innerHTML = "I love reading. Books allowed me to see different lives and live vaired experiences while sitting on my chair. My favourite book is (The Unbearable Lightness of Being) by Milan Kundera."
    } else {
        B.innerHTML = "Books"
    }
}


function myMovie() {
    var M = document.getElementById("movie");
    
    if (M.innerHTML === "Movies"){
        M.innerHTML = "I like to spend my family nights watching movies with my husband. We have nice discussions about the movies, share a laughter, or shed a tear (only me :D). My favourite movie of all times is (Pay It Forward)."
    } else {
        M.innerHTML = "Movies"
    }
}


function addFunc(){
    var a = document.getElementById("addNum1").value;
    var b = document.getElementById("addNum2").value;
    total = (+a) + (+b);
    document.getElementById("AddRes1").innerHTML = total;
}


function subFunc(){
    var a = document.getElementById("subNum1").value;
    var b = document.getElementById("subNum2").value;
    total = (+a) - (+b);
    document.getElementById("SubRes1").innerHTML = total;
}

function multFunc(){
    var a = document.getElementById("multNum1").value;
    var b = document.getElementById("multNum2").value;
    total = (+a) * (+b);
    document.getElementById("MultRes1").innerHTML = total;
}

function divFunc(){
    var a = document.getElementById("divNum1").value;
    var b = document.getElementById("divNum2").value;
    total = (+a) / (+b);
    document.getElementById("DivRes1").innerHTML = total;
}


function avrFunc(){
    var a = document.getElementById("avrNum1").value;
    var b = document.getElementById("avrNum2").value;
    var c = document.getElementById("avrNum3").value;
    var d = document.getElementById("avrNum4").value;
    var e = document.getElementById("avrNum5").value;
    var f = document.getElementById("avrNum6").value;
    var g = document.getElementById("avrNum7").value;
    total1 = (+a) + (+b) + (+c) + (+d) + (+e) + (+f) + (+g);
    total2 = total1 / 7;
    document.getElementById("AvrRes1").innerHTML = total2;
}


function darkFunc(){
    var elem = document.body;

    elem.classList.toggle("dark-mode");
    elem.style.transition = "all 2s ease"

   document.getElementById("nighty").style.display = "none";
   document.getElementById("lighty").style.display = "block"


}


function lightFunc(){
    var elem = document.body;

    elem.classList.toggle("light-mode");

   document.getElementById("nighty").style.display = "block";
   document.getElementById("lighty").style.display = "none"


}

