const BASE_URL = 'http://localhost:5001/';

const id = new URLSearchParams(window.location.search).get('id');
const dashboardSectionContainer = document.getElementById('dashboardSectionContainer');


const renderCandidatDetails = async () => {
    const uri = `${BASE_URL}users/${id}`;
    const res = await fetch(uri);
    const candidat = await res.json();

    const template =
        `
            <h1>${candidat.firstName}</h1>
            <p>${candidat.lastName}</p>
            <p>${candidat.email}</p>
        `

    dashboardSectionContainer.innerHTML = template;

    console.log(candidat.email);

}

window.addEventListener('DOMContentLoaded', () => renderCandidatDetails());