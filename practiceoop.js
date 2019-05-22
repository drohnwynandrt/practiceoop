var allAni=[];
class dog {
    constructor(type){
        this.type=type;
        this.color="various";

    }
}



function makeAniArr(){
let i;

for (let i=0; i<50; i++){
    let whiteShepherdDog = new dog("white shepherd");
    allAni.push(whiteShepherdDog);
    whiteShepherdDog.breed="shepherd"
    whiteShepherdDog.color="white";
}
for (let i=0; i<50; i++){
    let whiteShepherdDog = new dog("white shepherd");
    allAni.push(whiteShepherdDog);
    whiteShepherdDog.breed="shepherd"
}
console.log(allAni);

}

/*

window.onload=aniSum();
function aniSum(){

 protoAni = {
    actiAni(){
        document.getElementById(this.id).innerHTML += (`This is the ${this.animal}. `);
    },
    foodAni(){
        document.getElementById(this.id).innerHTML += (`The ${this.animal} eats ${this.food}. `);
    },
    forestAni(){
        document.getElementById(this.id).innerHTML += (`The ${this.animal} lives in the forest. `);
    },
    huntAni(){
        document.getElementById(this.id).innerHTML += (`The ${this.animal} hunts for his food. `);
    }
}

let shepherdDog = Object.create(protoAni);
shepherdDog.id="shepherdDog";
shepherdDog.animal = "Shepherd Dog";
shepherdDog.food="small prey animals such as tiny bunnies";
shepherdDog.actiAni();
shepherdDog.foodAni();
shepherdDog.forestAni();
shepherdDog.huntAni();

let tinyBunny = Object.create(protoAni);
tinyBunny.id="tinyBunny";
tinyBunny.animal = "Tiny bunny";
tinyBunny.food="carrots";
tinyBunny.actiAni();
tinyBunny.foodAni();
tinyBunny.forestAni();

}

*/