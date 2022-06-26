let musics = [
    "生日快乐 - Luvea.mp3","生日快乐 - 丢火车.mp3","生日快乐 - 金玟岐.mp3","happyBIRTHday.mp3"
];
let index = Math.floor(Math.random() * musics.length);;
let player2;
window.onload = function () {
    player2 = document.getElementById("player2");
    player2.src = musics[index];
    player2.onended = function () {
        index = Math.floor(Math.random() * musics.length);
        player2.src = musics[index];
        player2.play();
    }
}