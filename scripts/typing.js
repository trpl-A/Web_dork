
var i = 0;
var txt = "special_commands = [music, history]"
var speed = 100;

function writeLine() {
    if (i < txt.length) {
        document.getElementById("guidance").innerHTML += txt.charAt(i);
        i += 1;
        setTimeout(writeLine, speed);

    }
}
