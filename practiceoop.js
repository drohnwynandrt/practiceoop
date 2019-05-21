function testOOP(){

let protoAni = {
    actiAni(){
        document.getElementById("output").innerHTML += (`The ${this.animal} says ${this.sound} <br />`);
    }
}

let shepherdDog = Object.create(protoAni);
shepherdDog.animal = "Shepherd Dog";
shepherdDog.sound = "WOOF WOOF!";
shepherdDog.actiAni();

let tinyBunny = Object.create(protoAni);
tinyBunny.animal = "Tiny bunny";
tinyBunny.sound="gimme carrots!";
tinyBunny.actiAni();

}