const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
	searchInputEl.focus();
});

// 요소가 focus가 되면 클래스를 넣어줬다가 빼줌
searchInputEl.addEventListener("focus", function () {
	searchEl.classList.add("focused");
	searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
	searchEl.classList.remove("focused");
	searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

// _.throttle(함수, 시간)
window.addEventListener(
	"scroll",
	_.throttle(function () {
		console.log(window.scrollY);
		if (window.scrollY > 500) {
			// 배지 숨기기
			// badgeEl.style.display = "none";
			// gsap.to(요소, 지속시간, 옵션)
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: "none",
			});
		} else {
			// 배지 보이기
			// badgeEl.style.display = "block";
			gsap.to(badgeEl, 0.6, {
				opacity: 1,
				display: "block",
			});
		}
	}, 300)
);
