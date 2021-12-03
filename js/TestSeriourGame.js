import Candidat from "./classes/Candidat.js";


window.addEventListener('DOMContentLoaded', () => {

    Candidat.getQuestionSeriousGame();

 

    document.getElementById("button2").addEventListener('click',  (e) => {

        e.preventDefault();
        let questionSeriousGame=document.getElementById("question-serious-game").innerHTML;
        let reponseSeroiusGame=document.getElementById("reponse-seroius-game").value;

        console.log(questionSeriousGame,reponseSeroiusGame);

       Candidat.sendTestSeriousGame(questionSeriousGame,reponseSeroiusGame);
    
        window.location.replace('/TestAdministration.html');

        
        })
        
});