var SecondHand = document.querySelector('.sec-hand');
var MinsHand = document.querySelector('.min-hand');
var HrsHand = document.querySelector('.hour-hand');



function setDate () {
    const now  = new Date();
    const seconds = now.getSeconds();
    
    const seconddegrees = ((seconds / 60) * 360) + 90;
    SecondHand.style.transform = `rotate(${seconddegrees}deg)`;
    console.log(SecondHand)

    const mins = now.getMinutes();
    const minsdegrees = ((mins / 60) * 360) + 90;
    MinsHand.style.transform = `rotate(${minsdegrees}deg)`;
    console.log(MinsHand)

    let hour = now.getHours();
    // if (hour > 12 ) {
    //         hour = hour - 12;
    //        console.log(hour)
    //     }
    //     const hoursdegrees = (hour * 30) + 90; 
        
    const hoursdegrees = ((hour / 12) * 360) + 90;
    
    HrsHand.style.transform = `rotate(${hoursdegrees }deg)`;
    console.log(now.getHours())
    

}

setInterval (setDate, 1000);