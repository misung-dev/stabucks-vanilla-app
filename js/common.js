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

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
