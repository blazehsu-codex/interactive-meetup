const cards = (items) => `<div class="cards">${items.map(([number, title, body]) => `<section class="card"><small>${number}</small><h4>${title}</h4><p>${body}</p></section>`).join('')}</div>`;

export const slides = [
  {
    id: 'start', kicker: 'BUILD / LEARN / REPEAT · 01 MIN',
    title: '用 AI 做<br /><em>Prototype</em>',
    description: '把模糊的想法，變成可以一起討論的東西。',
    response: '01:00 / 20:00 · 開場：今天一起完成一條可驗證的使用流程。',
    render: () => '<div class="cover-meta"><span>郁承 <i>／</i> AI MEETUP</span><span class="chip">20 MIN · HANDS-ON THINKING</span></div><div class="cover-code" aria-hidden="true"><span>idea</span><b>→</b><span>prototype</span><b>→</b><span>feedback</span></div>',
  },
  {
    id: 'goal', kicker: '01 / DEFINE · 02 MIN',
    title: '先決定，<em>要驗證什麼？</em>',
    description: 'Prototype 的第一個任務，是回答一個具體問題。',
    response: '03:00 / 20:00 · 請現場想一個最近遇到的模糊需求。',
    render: () => '<div class="contrast"><section><small>模糊的起點</small><p>「我想做一個<br />很厲害的活動平台。」</p></section><section><small>可驗證的問題</small><p>「參加者能不能<br /><em>順利完成一次報名？</em>」</p></section></div>',
  },
  {
    id: 'brief', kicker: '01 / DEFINE · 02 MIN',
    title: '把需求寫成<em>四個欄位。</em>',
    description: '這份分享用「Meetup 報名表」當作示範案例。',
    response: '05:00 / 20:00 · 先確認成功條件，再開始生成畫面。',
    render: () => '<dl class="brief"><div><dt>WHO / 誰</dt><dd>第一次參加 Meetup 的人</dd></div><div><dt>JOB / 任務</dt><dd>填寫暱稱、選擇場次、確認報名</dd></div><div><dt>FRICTION / 卡點</dt><dd>不知道是否送出成功，也不知道下一步</dd></div><div><dt>DONE / 完成</dt><dd>必填檢查通過後，看見正確場次的確認訊息</dd></div></dl>',
  },
  {
    id: 'scope', kicker: '01 / DEFINE · 02 MIN',
    title: '第一版，<em>只跑通一條路。</em>',
    description: '縮小範圍，才能看清楚真正要測的行為。',
    response: '07:00 / 20:00 · 這版先測使用流程；真實服務需要另做後端與資料處理。',
    render: () => '<div class="flow"><span>填暱稱</span><b>→</b><span>選場次</span><b>→</b><span>確認結果</span></div>'+cards([['NOW','這次做','必填驗證、成功訊息、返回修改。'],['LATER','之後再做','登入、付款、通知信、真實名額同步。']]),
  },
  {
    id: 'prompt', kicker: '02 / BUILD · 02 MIN',
    title: '讓 AI 收到<em>一份工作說明。</em>',
    description: '目標、限制、驗收條件，比形容詞更能引導實作。',
    response: '09:00 / 20:00 · 這是可帶走的範例 Prompt；依自己的案例替換條件。',
    render: () => '<div class="terminal"><div class="terminal-top"><span>● ● ●</span> prototype-brief.txt</div><p>請做一個 Meetup 報名 Prototype。</p><p><b>任務</b>：填暱稱、選場次、送出後顯示確認。</p><p><b>限制</b>：使用假資料，不連後端；黑底、橘色、手機可用。</p><p><b>驗收</b>：空白不能送出；確認頁顯示暱稱與場次；可以返回修改。</p><p><b>交付</b>：可操作的網頁，附本機預覽與測試方式。</p></div>',
  },
  {
    id: 'demo', kicker: '02 / BUILD · 04 MIN',
    title: 'Demo：<em>親手走一次。</em>',
    description: '先空白送出，再填資料；觀察錯誤與成功狀態。',
    response: '13:00 / 20:00 · 預製示範，非現場 AI 生成。資料只在此頁使用，不送出或儲存。',
    render: () => '<div class="demo-layout"><aside><span class="chip">LIVE INTERACTION</span><h4>Meetup<br />報名 Prototype</h4><p>① 試一次空白送出<br />② 填暱稱、切換場次<br />③ 確認後返回修改</p></aside><div class="demo-panel"><form id="signup" novalidate><label for="nickname">你的暱稱</label><input id="nickname" name="nickname" autocomplete="off" maxlength="30" placeholder="例如：小橘" aria-describedby="demo-error" /><label for="session">選擇場次</label><select id="session" name="session"><option>AI Prototype 入門</option><option>AI 協作實驗室</option></select><p id="demo-error" role="alert"></p><button class="demo-button" type="submit">確認報名 →</button></form><section id="confirmation" hidden><span class="chip">✓ DEMO SUCCESS</span><h4>報名流程完成</h4><p id="demo-summary"></p><p>這是示範畫面，沒有建立真實報名。</p><button id="edit-signup" class="demo-button" type="button">返回修改 ↩</button></section></div></div>',
  },
  {
    id: 'test', kicker: '03 / VERIFY · 02 MIN',
    title: '能點，還要<em>符合預期。</em>',
    description: '把「看起來不錯」改成可以重複檢查的條件。',
    response: '15:00 / 20:00 · 對照剛才的 Demo，逐項確認；測試條件也能交給 AI。',
    render: () => '<div class="test-table"><div><b>情境</b><b>預期行為</b></div><div><span>暱稱為空白或只有空格</span><span>留在表單，顯示錯誤</span></div><div><span>切換成另一個場次</span><span>確認訊息顯示所選場次</span></div><div><span>返回修改</span><span>保留已輸入的內容</span></div><div><span>縮窄視窗、使用鍵盤</span><span>欄位可讀，焦點與按鈕可操作</span></div></div>',
  },
  {
    id: 'iterate', kicker: '03 / VERIFY · 02 MIN',
    title: '把回饋變成<em>下一個改動。</em>',
    description: '一次修一個觀察到的問題，然後重新走流程。',
    response: '17:00 / 20:00 · 範例迭代指令：描述現象、提出改動、補上驗收條件。',
    render: () => cards([['01 / OBSERVE','具體現象','「空白送出時，我不知道哪裡需要填。」'],['02 / CHANGE','明確改動','「在暱稱欄位下顯示錯誤，並把焦點移回欄位。」'],['03 / CHECK','重新驗收','「輸入有效暱稱後，可以完成確認；原本場次選擇仍保留。」']]),
  },
  {
    id: 'lessons', kicker: '04 / REFLECT · 02 MIN',
    title: '心得：<em>快，也要有方向。</em>',
    description: '從這次示範帶走的三個工作習慣。',
    response: '19:00 / 20:00 · 方法整理；可由郁承在此補充自己的實作經驗。',
    render: () => cards([['01','先問，再做','先釐清使用者與成功條件，避免一直修一個方向錯誤的畫面。'],['02','做小，再驗','先完成一條流程，再用具體情境檢查；保留每次可運作的版本。'],['03','人來判斷','AI 協助產出與修改；需求取捨、結果驗收與上線判斷仍由人負責。']]),
  },
  {
    id: 'next-step', kicker: 'SHIP A SMALL IDEA · 01 MIN',
    title: '下一步，<em>換你的一個問題。</em>',
    description: '找一個真實卡點，做一條最小流程，邀請一個人試用。',
    response: '20:00 / 20:00 · 謝謝參與。郁承 / AI Meetup',
    render: () => '<div class="closing-line"><span>一個問題</span><b>×</b><span>一條流程</span><b>×</b><span>一次回饋</span></div><p class="closing-question">你會先把哪個想法，變成可以點的東西？</p>',
  },
];

export const promptIdeas = [];

export function bindDemo(root) {
  root.addEventListener('submit', (event) => {
    if (event.target.id !== 'signup') return;
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector('#nickname');
    const nickname = input.value.trim();
    if (!nickname) {
      form.querySelector('#demo-error').textContent = '請先填寫你的暱稱。';
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }
    input.removeAttribute('aria-invalid');
    form.querySelector('#demo-error').textContent = '';
    root.querySelector('#demo-summary').textContent = `${nickname}，你選擇的是「${form.querySelector('#session').value}」。`;
    form.hidden = true;
    root.querySelector('#confirmation').hidden = false;
    root.querySelector('#edit-signup').focus();
  });
  root.addEventListener('click', (event) => {
    if (!event.target.closest('#edit-signup')) return;
    root.querySelector('#confirmation').hidden = true;
    root.querySelector('#signup').hidden = false;
    root.querySelector('#nickname').focus();
  });
}
