export async function mountAgenda(root) {
  try {
    const result = await fetch(new URL('../../agenda/agenda.json', import.meta.url));
    if (!result.ok) throw new Error('議程載入失敗');
    const entries = await result.json();
    root.replaceChildren();
    entries.forEach((entry, index) => {
      const item = document.createElement('li');
      item.className = 'agenda-entry';
      const number = document.createElement('span');
      number.className = 'agenda-number';
      number.textContent = String(index + 1).padStart(2, '0');
      const content = document.createElement('div');
      const time = document.createElement('p');
      time.className = 'agenda-time';
      time.textContent = entry.time || '';
      const title = document.createElement('h3');
      title.textContent = entry.title;
      const description = document.createElement('p');
      description.textContent = [entry.speaker, entry.description].filter(Boolean).join(' · ');
      content.append(time, title, description);
      if (entry.path) {
        const link = document.createElement('a');
        link.className = 'text-link';
        link.href = new URL('../../' + entry.path, import.meta.url).href;
        link.textContent = '進入簡報 ↗';
        content.append(link);
      }
      item.append(number, content);
      root.append(item);
    });
  } catch (error) {
    root.textContent = '議程暫時無法載入，請重新整理。';
    console.error(error);
  }
}
