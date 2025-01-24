var i = 0;
var txt = "HCM FOOD – Kết nối ẩm thực, giữ gìn văn hóa!";
var speed = 50;
function typeWriter() {
	if (i < txt.length) {
		document.getElementById("typing-effect").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
typeWriter();

document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header");

	header.style.background = "transparent";

	window.addEventListener("scroll", () => {
		const headerHeight = header.offsetHeight;

		if (window.scrollY > headerHeight) {
			header.style.background = "#000";
		} else {
			header.style.background = "transparent";
		}
	});
});

const clickSound = new Audio("./assets/audio/click-sound.wav");

document.querySelectorAll("a").forEach((anchor) => {
	anchor.addEventListener("click", () => {
		clickSound.currentTime = 0;
		clickSound.play();
	});
});
