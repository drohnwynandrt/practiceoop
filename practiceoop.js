function testOOP(){

let protoAni = {
    actiAni(){
        document.getElementById(this.id).innerHTML += (`The ${this.animal} says ${this.sound} <br />`);
    },
    eatAni(){
        document.getElementById(this.id).innerHTML += (`The ${this.animal} eats ${this.prey} <br />`);
    }
}

let shepherdDog = Object.create(protoAni);
shepherdDog.id="shepherdDog";
shepherdDog.animal = "Shepherd Dog";
shepherdDog.sound = "WOOF WOOF!";
shepherdDog.prey="Tiny Bunny";
shepherdDog.actiAni();
shepherdDog.eatAni();

let tinyBunny = Object.create(protoAni);
tinyBunny.id="tinyBunny";
tinyBunny.animal = "Tiny bunny";
tinyBunny.sound="gimme carrots!";
tinyBunny.actiAni();

}