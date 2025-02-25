const button = document.querySelector('.roll-back');
const alert = document.querySelector('.alert');

button.addEventListener('click', (event) => {
  event.preventDefault();
  alert.style.display = 'none';
  handleButtonClick(event);
});

function randomPosition() {
  // Math.floor()를 사용하여 정수 값을 반환
  return Math.floor(12 * Math.random() * 100);
}

function handleButtonClick(event) {
  event.preventDefault(); // 폼 제출 방지

  for (let i = 0; i < 6; i++) {
    let img1 = document.createElement('img');
    img1.className = 'img01';
    img1.src = 'images/bird3.png';
    img1.style.position = 'absolute';
    // 각 이미지마다 랜덤 위치를 따로 계산
    img1.style.width = '60px';
    img1.style.height = '30px';
    img1.style.top = randomPosition() + 'px';
    img1.style.left = randomPosition() + 'px';

    // 생성한 이미지를 .field 요소에 추가
    document.querySelector('.field').appendChild(img1);
  }

  for (let i = 0; i < 6; i++) {
    let img2 = document.createElement('img');
    img2.className = 'img01';
    2;
    img2.src = 'images/balloon.png';
    img2.style.position = 'absolute';
    // 각 이미지마다 랜덤 위치를 따로 계산
    img2.style.width = '40px';
    img2.style.height = '50px';
    img2.style.top = randomPosition() + 'px';
    img2.style.left = randomPosition() + 'px';

    document.querySelector('.field').appendChild(img2);
  }
}
