const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
  //클래스 존재하면 제거하고 false반환,
  //존재하지 않으면 클래스 추가하고 true 반환
}

h1.addEventListener("click", handleTitleClick);
