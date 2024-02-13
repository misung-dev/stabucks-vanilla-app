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

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
	// gsap.to(요소, 지속시간, 옵션)
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * 0.7, // 요소를 하나씩 순차적으로 실행
		opacity: 1,
	});
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
	direction: "vertical",
	autoplay: true,
	// loop: true, // 반복 재생여부 (4번째 슬라이드 다음으로 1번째 슬라이드 나올 것인지))
});

new Swiper(".promotion .swiper-container", {
	slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
	spaceBetween: 10, // 슬라이드 사이 여백(px)
	centeredSlides: true, // 1번 슬라이드가 가운데 보이기
	loop: true,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
		clickable: true,
	},
	navigation: {
		prevEl: ".promotion .swiper-prev",
		nextEl: ".promotion .swiper-next",
	},
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		// 숨김처리
		promotionEl.classList.add("hide");
	} else {
		// 보임처리
		promotionEl.classList.remove("hide");
	}
});
