var video = null;
var btN1 = null;
var btN2 = null;
var btN3 = null;
var score = null;
var score_num = 0;
var title = null;
var player = {
    currentTime: 0,
    videoPlaying: 1,
};


function initPlayer() {
    video = document.getElementsByTagName("Video");
    video = document.querySelector("Video");
    btN1 = document.getElementById("Btn1");
    btN2 = document.getElementById("Btn2");
    btN3 = document.getElementById("Btn3");

    btN1.style.display = 'none';
    btN2.style.display = 'none';
    btN3.style.display = 'none';

    video.ontimeupdate = function () {
        player.currentTime = video.currentTime;
        console.log(player.currentTime);
        if (player.currentTime > 44 && player.videoPlaying == 1) {
            console.log("1");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 2.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 2;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 3.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 3;
            }

        }//Cierro 1

        if (player.currentTime > 33 && player.videoPlaying == 2) {
            console.log("2");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 2.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 2;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 3.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 3;
            }

        }//Cierro 2

        if (player.currentTime > 33 && player.videoPlaying == 3) {
            console.log("3");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 4.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 4;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 5.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 5;
            }

        }//Cierro 3


        if (player.currentTime > 28 && player.videoPlaying == 4) {
            console.log("4");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 4.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 4;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 5.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 5;
            }


        }//Cierro 4
        if (player.currentTime > 31 && player.videoPlaying == 5) {
            console.log("5");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 6.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 6;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 7.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 7;
            }


        }//Cierro 5

        if (player.currentTime > 28 && player.videoPlaying == 6) {
            console.log("6");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 6.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 6;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 7.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 7;
            }


        }//Cierro 6
        if (player.currentTime > 28 && player.videoPlaying == 7) {
            console.log("7");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 8.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 8;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 9.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 9;
            }


        }//Cierro 7

        if (player.currentTime > 13 && player.videoPlaying == 8) {
            console.log("8");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 8.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 8;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 9.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 9;
            }


        }//Cierro 8
        if (player.currentTime > 28 && player.videoPlaying == 9) {
            console.log("9");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 10.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 10;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 11.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 11;
            }


        }//Cierro 9
        if (player.currentTime > 28 && player.videoPlaying == 10) {
            console.log("10");
            btN1.style.display = 'block';
            btN2.style.display = 'block';

            btN2.onclick = function () {
                video.src = "Videos/Video 10.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 10;
            }

            btN1.onclick = function () {
                video.src = "Videos/Video 11.mp4";
                btN1.style.display = 'none';
                btN2.style.display = 'none';
                video.play();
                player.videoPlaying = 11;
            }

        }//Cierro 10
        if (player.currentTime > 64 && player.videoPlaying == 11) {
            console.log("11");
            btN3.style.display = 'block';


            btN3.onclick = function () {
                video.src = "Videos/Video 1.mp4";
                btN3.style.display = 'none';
                video.play();
                player.videoPlaying = 1;
            }
        }//Cierro 11
    }
}