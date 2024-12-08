function changeLights() {
    
    document.getElementById('car-light-green').classList.remove('green');
    document.getElementById('car-light-green').classList.add('off');

    document.getElementById('car-light-yellow').classList.remove('off');
    document.getElementById('car-light-yellow').classList.add('yellow');

    setTimeout(function() {
        document.getElementById('car-light-yellow').classList.remove('yellow');
        document.getElementById('car-light-yellow').classList.add('off');

        document.getElementById('car-light-red').classList.remove('off');
        document.getElementById('car-light-red').classList.add('red');
    }, 1000);

    document.getElementById('pedestrian-light-red').classList.remove('red');
    document.getElementById('pedestrian-light-red').classList.add('off');

    document.getElementById('pedestrian-light-green').classList.remove('off');
    document.getElementById('pedestrian-light-green').classList.add('green');

    setTimeout(function() {
        revertLights();
    }, 5000);
}

function revertLights() {
    document.getElementById('car-light-green').classList.remove('off');
    document.getElementById('car-light-green').classList.add('green');

    document.getElementById('car-light-red').classList.remove('red');
    document.getElementById('car-light-red').classList.add('off');

    document.getElementById('pedestrian-light-green').classList.remove('green');
    document.getElementById('pedestrian-light-green').classList.add('off');

    document.getElementById('pedestrian-light-red').classList.remove('off');
    document.getElementById('pedestrian-light-red').classList.add('red');
}

window.onload = function() {
    document.getElementById('car-light-green').classList.add('green');
    document.getElementById('pedestrian-light-red').classList.add('red');
};
