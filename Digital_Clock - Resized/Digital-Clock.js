
function updateClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (second < 10){
        second = '0' + second
    }
    if (minute < 10){
        minute = '0' + minute
    }
    if (hour < 10){
        hour = '0' + hour
    }
    
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;
}

setInterval(updateClock,1000);
updateClock();  