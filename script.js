let firstcard=getrandomcard();
let secondcard=getrandomcard();
let sum=0;
let hasblackjack=false;
let isalive=false;
let message="";
let cards=[]
let messageEl =document.getElementById("message-el");
let sumEl =document.getElementById("sum-el");
let cardEl =document.getElementById("card-el");
//object
let player = {
    name: "Per",chips:145
}
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $" +player.chips;
function getrandomcard()
{

    //i want number from 1 to 13 so i use random13 (will make 0 to 12.9999)then i floor(to get 0 to 12)and then+1(get 1 to 13)
    let val= Math.floor(Math.random()*13)+1;
    if(val===1)
    return 11;
//if i used val >=11 its not working well!!!!!!
//solved
    else if (val >= 11)
    return 10;
    else
        return val;
}
function startgame()
{
    //when we start we dont have blackjack and we are alive cause we started
    hasblackjack=false;
    isalive=true;
    firstcard=getrandomcard();
    secondcard=getrandomcard();
    cards=[];
    cards.push(firstcard);
    cards.push(secondcard);
    sum=firstcard+secondcard;
    rendergame();
}
function rendergame()
{
    sumEl.textContent="Sum: "+sum;
    cardEl.textContent="Cards: ";
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent +=cards[i]+" ";
    }
    if(sum<=20)
        message="do u want to draw a new card ?";
    else if(sum ===21)
    {
        message="wohoo! you 've got the Blackjack";
        hasblackjack=true;
    }
    else{
        message="you are out:< sorry man";
        isalive=false;
    }
    messageEl.textContent=message;
}
function newcard(){
    if(isalive&&!hasblackjack)
    {
    let card =getrandomcard();
    cards.push(card);
    sum+=card;
    rendergame();
    }
    else
     message="you are out:< sorry man";
   
}