export function mountDeck(root, slides, promptIdeas = []) {
  if (!root || !slides.length) return;
  let current = 0;
  const savedChoices = new Map();
  const response = document.querySelector('#response');
  root.innerHTML = '<div class="deck-top"><span id="slide-label"></span><div class="deck-progress"><i id="progress-bar"></i></div><span>USE ← → KEYS</span></div><div id="slide-stage"></div><div class="deck-controls"><button id="prev" aria-label="上一個主題">←</button><button id="next">NEXT <span>→</span></button></div>';
  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    const slide = slides[current];
    root.querySelector('#slide-stage').innerHTML = `<article class="slide active" data-slide="${slide.id}"><p class="slide-kicker">${slide.kicker}</p><h3>${slide.title}</h3><p>${slide.description}</p>${slide.render()}</article>`;
    root.querySelector('#slide-label').textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    root.querySelector('#progress-bar').style.width = `${((current + 1) / slides.length) * 100}%`;
    response.textContent = slide.response;
    root.dataset.topic = slide.id;
    root.querySelectorAll('.choice').forEach((button) => {
      const selected = savedChoices.get(slide.id) === button.dataset.choice;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  };
  root.addEventListener('click', (event) => {
    const choice = event.target.closest('[data-choice]');
    if (choice) { savedChoices.set(slides[current].id, choice.dataset.choice); root.querySelectorAll('.choice').forEach((item) => (item.classList.toggle('selected', item === choice), item.setAttribute('aria-pressed', String(item === choice)))); response.textContent = `已收到：${choice.dataset.choice}。這就是今天共同建立的 AI 地圖。`; }
    if (event.target.closest('#remix') && promptIdeas.length) root.querySelector('#prompt-output').textContent = promptIdeas[Math.floor(Math.random() * promptIdeas.length)];
    if (event.target.closest('#next')) showSlide(current + 1);
    if (event.target.closest('#prev')) showSlide(current - 1);
  });
  document.addEventListener('keydown', (event) => {
    if (event.target.closest('input, textarea, select, [contenteditable="true"]') || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      showSlide(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  showSlide(0);
}
