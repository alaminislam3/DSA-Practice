function blizzardFan(){
    const isFan =true;
    let phrase = 'warcraft';
    console.log('Before if: '+phrase);
    if(isFan){
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if:'+ phrase)
}
phrase = 'For the Alliance';
console.log('After if: '+ phrase)

}
// console.log(blizzardFan())
blizzardFan()