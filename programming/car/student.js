function myFirstFunction(bike) {
    forward(bike);
}
function twiceForward(bike) {
    forward(bike);
    forward(bike);
}
function thriceForward(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
}
function forward4(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}
function forward5(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}
function forward10(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}
function right(bike) {
    turnRight(bike);
    forward(bike);
}
function ellShape(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}
function uTurn(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike)
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
}
function crookedUTurn(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}
function forwardUntilWall(bike) {
    while (!sensor(bike)) {
        forward(bike);
    }
}
function smartEllShape(bike) {
    while (!sensor(bike)) {
        forward(bike);
    }
    turnRight(bike);
    while (!sensor(bike)) {
        forward(bike);
    }
}
function spiral(car) {
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
}


function turnLeft(car) {
    turnRight(car);
    turnRight(car);
    turnRight(car);
}

function left(car) {
    turnLeft(car);
    forward(car);
}
function slalom(car) {
    while (!sensor(car)) {
        forward(car);
    }
    turnLeft(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnLeft(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnLeft(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
}

function leftOrRight(car) {
    turnLeft(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnLeft(car);
    while (!sensor(car)) {
        forward(car);
    }
}

function incompleteU(car) {
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
    turnRight(car);
    while (!sensor(car)) {
        forward(car);
    }
}

function whichDirection(car) {
    while (sensor(car)) {
        turnRight(car);
    }

    forwardUntilWall(car);
}

function sensorRight(car) {
    turnRight(car);
    let result = sensor(car);
    turnLeft(car);

    return result;
}

function firstRight(car) {
    while (sensorRight(car)) {
        forward(car);
    }
    turnRight(car);
    forwardUntilWall(car);
}

function sensorLeft(car) {
    turnLeft(car);
    let result = sensor(car);
    turnRight(car);

    return result;
}

function firstLeft(car) {
    while (sensorLeft(car)) {
        forward(car);
    }
    turnLeft(car);
    forwardUntilWall(car);
}

function zigZag(car) {
    firstRight(car);
    turnLeft(car);
    forward(car);
    firstLeft(car);
}