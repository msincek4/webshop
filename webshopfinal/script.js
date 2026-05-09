let ukupno = 0;

function dodajUKosaricu(naziv, cijena){
    const kosarica = document.getElementById("kosarica");

    const li = document.createElement("li");
    li.textContent = `${naziv} - ${cijena} €`;

    kosarica.appendChild(li);

    ukupno += cijena;
    document.getElementById("ukupno").textContent = ukupno;
}

function ocistiKosaricu(){
    document.getElementById("kosarica").innerHTML = "";
    ukupno = 0;
    document.getElementById("ukupno").textContent = 0;
}

function filtriraj(kategorija){
    const proizvodi = document.querySelectorAll(".proizvod");
    const buttons = document.querySelectorAll(".filteri button");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    proizvodi.forEach(p => {
        if(kategorija === "sve"){
            p.style.display = "block";
        } 
        else if(p.classList.contains(kategorija)){
            p.style.display = "block";
        } 
        else{
            p.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function(){

    const openBtn = document.getElementById("otvoriKosaricu");
    const closeBtn = document.getElementById("zatvoriKosaricu");

    if(openBtn){
        openBtn.addEventListener("click", function(e){
            e.preventDefault();
            document.getElementById("cartSidebar").classList.add("active");
        });
    }

    if(closeBtn){
        closeBtn.addEventListener("click", function(){
            document.getElementById("cartSidebar").classList.remove("active");
        });
    }
});