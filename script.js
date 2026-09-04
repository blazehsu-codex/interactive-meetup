const slides = [...document.querySelectorAll('.slide')];
const label = document.querySelector('#slide-label');
const progress = document.querySelector('#progress-bar');
const response = document.querySelector('#response');
let current = 0;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
  label.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  progress.style.width = `${((current + 1) / slides.length) * 100}%`;
  response.textContent = current === 0 ? '選一個選項，讓現場的 AI 地圖開始長出來。' : current === 1 ? '從「請 AI 做」到「和 AI 一起想」，差別是什麼？' : '把這個句子帶走，並從一個小問題開始。';
}
document.querySelector('#next').addEventListener('click', () => showSlide(current + 1));
document.querySelector('#prev').addEventListener('click', () => showSlide(current - 1));
document.addEventListener('keydown', (event) => { if (event.key === 'ArrowRight') showSlide(current + 1); if (event.key === 'ArrowLeft') showSlide(current - 1); });
document.querySelectorAll('.choice').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.choice').forEach((item) => item.classList.remove('selected'));
  button.classList.add('selected');
  response.textContent = `已收到：${button.dataset.choice}。這就是今天共同建立的 AI 地圖。`;
}));
const prompts = ['「請幫我把零散的會議筆記，整理成一份可執行的行動清單。」','「請和我一起把一個模糊的想法，拆成今天能開始的三個步驟。」','「請扮演我的思考夥伴，先問我三個問題，幫我釐清真正要解決的事。」'];
document.querySelector('#remix').addEventListener('click', () => { const output = document.querySelector('#prompt-output'); output.textContent = prompts[Math.floor(Math.random() * prompts.length)]; });
document.querySelectorAll('.agenda-plus').forEach((button) => button.addEventListener('click', () => { button.textContent = button.textContent === '+' ? '−' : '+'; }));
