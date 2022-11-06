function clock() {
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let currentTime = `${hours} : ${minutes} : ${seconds}\n `;

    document.getElementById("MyClock").innerText = currentTime;
    document.getElementById("MyClock").textContent = currentTime;

    setTimeout(clock, 1000);
}

clock();
