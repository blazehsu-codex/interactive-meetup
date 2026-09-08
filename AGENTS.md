# Meetup 共編約定

這是零建置的靜態 Meetup 網站，首頁串場，每份簡報是一個獨立頁面。

- 新增或修改 Meetup 簡報時，先讀取 `skills/create-presentation/SKILL.md`，依其中流程建立、修改與預覽。
- 一份簡報放在 `presentations/<slug>/`，每張投影片只講一個主題；講者可擁有自己的 style.css。
- `agenda/agenda.json` 是首頁議程的唯一資料來源。順序依陣列順序；沒有簡報的環節使用 `path: null`。
- `website/` 放共用樣式、首頁邏輯與播放器；個別講者的改動優先放在自己的簡報資料夾。
- 所有網站路徑使用相對路徑，支援 GitHub Pages 的 repository 子路徑。
- 本機從 repo 根目錄啟動 HTTP server；不要以 file:// 驗證 ES modules 或 fetch。
- 只在使用者要求時 commit、push 或部署。
