import Candidat from "./classes/Candidat.js";


window.addEventListener('DOMContentLoaded', () => {
    
    Candidat.getQuestionTestAdministration();

    document.getElementById("button2").addEventListener('click',  (e) => {
      e.preventDefault();

      Candidat.sendTestAdministration();
        window.location.replace('/TestDeMotivation.html');

        
        })
  
});