interface BirthYear {
    month: Number
}

interface User {
    firstName: String,
    lastName: String,
    birth: BirthYear,
    phone?: Number
}

function createUser(user: User): User {
    return Object.assign({}, user);
}

const userObject: User = {
    firstName: 'Johan',
    lastName: 'Lindgr3n',
    birth: {
        month: 7
    }
}
const userJohan = createUser(userObject)

class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);