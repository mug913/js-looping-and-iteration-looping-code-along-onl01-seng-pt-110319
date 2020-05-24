let cards = [];

function writeCards(list, event) {
    for (let i = 0; i < list.length; i++) {
        cards.push(`Thank you, ${list[i]}, for the wonderful ${event} gift!`);
    }
    return cards

}




function countDown(number) {
    let i = number;
    while (i > -1){
        console.log(i--);
    }
}