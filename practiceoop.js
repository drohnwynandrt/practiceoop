function testOOP(){

let protoAni = {
    actiAni(){
        document.getElementById("output").innerHTML += (`The ${this.animal} says ${this.sound} <br />`);
    },
    eatAni(){
        document.getElementById("output2").innerHTML += (`The ${this.animal} eats ${this.prey} <br />`);
    }
}

let shepherdDog = Object.create(protoAni);
shepherdDog.animal = "Shepherd Dog";
shepherdDog.sound = "WOOF WOOF!";
shepherdDog.prey="Tiny Bunny";
shepherdDog.actiAni();
shepherdDog.eatAni();

let tinyBunny = Object.create(protoAni);
tinyBunny.animal = "Tiny bunny";
tinyBunny.sound="gimme carrots!";
tinyBunny.actiAni();

}