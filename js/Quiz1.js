import Candidat from "./classes/Candidat.js";

window.addEventListener('DOMContentLoaded', () => {
    // let candidat = new Candidat();
    Candidat.getQuise();


    document.getElementById("button2").addEventListener('click',  (e) => {
        console.log("pass")

            e.preventDefault();
                Candidat.sendQuise();
        
        })
        
});




