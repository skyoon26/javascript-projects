//TODO: Add Your Code Below
window.addEventListener('load', function() {
    const container = document.getElementById('container');
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
        response.json().then(function(astronauts) {
            astronauts.sort(function(a, b) {
                return b.hoursInSpace - a.hoursInSpace; 
            });

            for (let i=0; i < astronauts.length; i++) {
                container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronauts[i].firstName} ${astronauts[i].lastName} </h3>
                    <ul>
                    <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
                    <li>Active: ${astronauts[i].active}</li>
                    <li>Skills: ${astronauts[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronauts[i].picture}">
            </div>`;
            }
        });
    });
});