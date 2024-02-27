function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    missionAbort.addEventListener('mouseenter', event => {
        missionAbort.style.backgroundColor = 'red';
    });

    missionAbort.addEventListener('mouseleave', event => {
        missionAbort.style.backgroundColor = '';
    });

    missionAbort.addEventListener('click', event => {
        window.confirm("Are you sure you want to abort the mission?");
        paragraph.innerHTML = 'Mission aborted! Space shuttle returning home.';
    });

}

window.addEventListener("load", init);
