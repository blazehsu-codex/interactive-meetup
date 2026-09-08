export const slides = [
  { id: 'question', kicker: 'THE QUESTION', title: '如果 AI 是你的<br /><em>新同事，</em>', description: '你希望它替你省下什麼？', response: '選一個選項，讓現場的 AI 地圖開始長出來。', render: () => `<div class="choice-grid">${['寫作與整理', '重複性工作', '創意與發想', '分析與決策'].map((choice, index) => `<button class="choice" data-choice="${choice}"><b>${String.fromCharCode(65 + index)}</b> ${choice}</button>`).join('')}</div>` },
  { id: 'shift', kicker: 'THE SHIFT', title: '不要把工作<br />交給 <em>工具。</em>', description: '試著把「問題」交給一個能與你協作的夥伴。', response: '從「請 AI 做」到「和 AI 一起想」，差別是什麼？', render: () => '<div class="shift-visual"><span>想法</span><i>→</i><span>對話</span><i>→</i><span class="accent">共創</span></div>' },
  { id: 'action', kicker: 'YOUR TURN', title: '現在，讓一個<br /><em>想法發生。</em>', description: '選一個本週最想解決的小問題，寫下第一個 prompt。', response: '把這個句子帶走，並從一個小問題開始。', render: () => '<div class="prompt-box"><span>✦</span><p id="prompt-output">「請幫我把＿＿＿＿＿變成一個可以開始的計畫。」</p><button id="remix">給我一個靈感 ↻</button></div>' },
];

export const promptIdeas = ['「請幫我把零散的會議筆記，整理成一份可執行的行動清單。」', '「請和我一起把一個模糊的想法，拆成今天能開始的三個步驟。」', '「請扮演我的思考夥伴，先問我三個問題，幫我釐清真正要解決的事。」'];
