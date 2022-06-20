const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "07/01/",
    birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
    birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

        const now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
            document.getElementById("headline").innerText = "Happy birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            document.getElementById("content2").style.display = "block";
            clearInterval(x);
        }
        //seconds
    }, 0)

let musics = [
    "想着你.mp3", "勇气.mp3", "红.mp3", "Light.mp3", "指纹.mp3", "耿.mp3", "这世界那么多人.mp3", "小雨天气.mp3", "迷宫.mp3", "乌云中.mp3", "这世界喧闹，你我相遇正好.mp3", "If I.mp3", "星球坠落.mp3"
];
let index = 0;
let player;
window.onload = function () {
    player = document.getElementById("player");
    player.src = musics[index];
    player.onended = function () {
        player.src = musics[++index % musics.length];
        player.play();
    }
}