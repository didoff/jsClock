function clock() {
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let day = date.getUTCDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (hours < 10) {
        hours = '0' + hours;
    }
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let currentTime = `${hours} : ${minutes} : ${seconds}`;
    let showDate = `${day} - ${month} - ${year}`;
    
    console.log("The time now is: \n============ \n" + currentTime + "\n" + showDate + "\n============");
    setTimeout(() => console.clear(), 1000);

}

setInterval(() => {
    clock();
}, 1000);
