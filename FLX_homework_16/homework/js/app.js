// Task 1

function assign(obj) {
    if (obj === null) {
        console.log('Cannot convert undefined or null to object');
        return;
    }

    let toObj = Object(obj);

    for (let i = 1; i < arguments.length; i++) {
        let prop = arguments[i];
        if (prop !== null) {
            for (let key in prop) {
                if (prop.hasOwnProperty(key)) {
                    toObj[key] = prop[key];
                }
            }
        }
    }
    return toObj;
}

// Task 2 

function Bot(obj) {
    this.name = obj.name;
    this.defaultSpeed = obj.speed;
    this.speed = obj.speed;
    this.x = obj.x;
    this.y = obj.y;
    this.nameOfClass = 'Bot';
}

Bot.prototype.getSpeed = function () {
    return this.speed;
}

Bot.prototype.setSpeed = function (newSpeed) {
    this.speed = newSpeed;
}

Bot.prototype.getDefaultSpeed = function () {
    return this.defaultSpeed;
}

Bot.prototype.getCoordinates = function () {
    return { x: this.x, y: this.y };
}

Bot.prototype.setCoordinates = function (coordintes) {
    this.x = coordintes.x;
    this.y = coordintes.y;
}

Bot.prototype.move = function (direction) {
    switch (direction) {
        case 'left':
            this.x -= this.speed;
            break;
        case 'right':
            this.x += this.speed;
            break;
        case 'down':
            this.y -= this.speed;
            break;
        case 'up':
            this.y += this.speed;
            break;
        default:
            console.log('Incorrect direction!');
    }
}

Bot.prototype.showPosition = function () {
    console.log(`I am ${this.nameOfClass} '${this.name}'. I am located at ${this.x}:${this.y}`);
}

let Racebot = function (obj) {
    Bot.call(this, obj);
    this.nameOfClass = 'Racebot';
    this.previousDirecton = null;
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function (direction) {
    this.speed = this.previousDirecton === direction ? this.speed + 1 : this.defaultSpeed;
    this.previousDirecton = direction;

    Bot.prototype.move.call(this, direction);
}

let Speedbot = function (obj) {
    Bot.call(this, obj);
    this.nameOfClass = 'SpeedBot';
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function () {
    this.speed += 2;
}

Speedbot.prototype.move = function (direction) {
    Bot.prototype.move.call(this, direction);

    if (this.speed > this.defaultSpeed) {
        this.speed--;
    }
}

