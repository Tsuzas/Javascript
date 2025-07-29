function updateClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay() + 1;
    let dayOfWeak = date.getDay();


    // Day of the weak via switch case
    //not sure it will work after day 6
    switch (dayOfWeak){
        case (0):
            dayOfWeak = '"sunday"';
        break;
        case (1):
            dayOfWeak = '"monday"';
        break;
        case (2):
            dayOfWeak = '"tuesday"';
        break;
        case (3):
            dayOfWeak = '"wendsday"';
        break;
        case (3):
            dayOfWeak = '"thursday"';
        break;
        case (5):
            dayOfWeak = '"friday"';
        break;
        case (6):
            dayOfWeak = '"saturday"';
        break;
        default:
    }
    
    // math for percentage 
    // IT BUGS SOMETIMES UNLESS ROUND IS BELOW TOFIXED 
    // SOMEWHAT BUGGED I THINK?
    percentage = (hour * 3600) + (minute * 60) + second;
    percentage = (86400 - percentage) / percentage * 100
    percentage = percentage.toFixed(2);
    Math.round(percentage)
    percentage = 100 - percentage + "%"
    

    // in case hours are 1 through 9 it will 01-09s
    if (second < 10){
        second = '0' + second
    }
    if (minute < 10){
        minute = '0' + minute
    }
    if (hour < 10){
        hour = '0' + hour
    }
        

    //changes HTML and website
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    document.getElementById("year").innerHTML = year;
    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = day;
    document.getElementById('dayOfWeek').innerHTML = dayOfWeak;
    document.getElementById('dayProgress').innerHTML = percentage;


}


//updates every second
setInterval(updateClock,1000);