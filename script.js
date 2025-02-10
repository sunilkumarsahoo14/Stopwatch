let [ms, s, m, h] = [0, 0, 0, 0];
let timeRef = document.querySelector('.timer-display');
let int = null;

document.getElementById("start-button").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-button").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-button").addEventListener("click", () => {
    clearInterval(int);
    [ms, s, m, h] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() {
    ms += 10;
    if (ms == 1000) {
        ms = 0;
        s++;
        if (s == 60) {
            s = 0;
            m++;
            if (m == 60) {
                m = 0;
                h++;
            }
        }
    }

    let ht = h < 10 ? "0" + h : h;
    let mt = m < 10 ? "0" + m : m;
    let st = s < 10 ? "0" + s : s;
    let mst = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    timeRef.innerHTML = `${ht} : ${mt} : ${st} : ${mst}`;
}
