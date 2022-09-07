function superHero(name) {
    let powerLevel=Math.floor(Math.random()*100);
    return function (catchPhrase){
        console.log(`My name is ${name}. Power level is ${powerLevel}
        and ${catchPhrase}`)
    }
}

let toiletManCatchPhrase = superHero("Toilet Paper Man");

toiletManCatchPhrase(`I'm going to wipe you out`);
toiletManCatchPhrase(`You've been flushed away`);

// let batmanCatchPrase = superHero('Batman');
// batmanCatchPrase('I am the night');

superHero('Batman')('I am Vengeance');