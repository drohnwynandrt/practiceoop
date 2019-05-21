function testOOP(){

let protoAni = {
    speak(sound){
        document.getElementById("output").innerHTML = (`The ${this.animal} says '${sound}'`);
    }

}

let shepherdDog = Object.create(protoAni);
shepherdDog.animal = "White Shepherd";
shepherdDog.speak("WOOF WOOF!");

console.log (protoDog);
}