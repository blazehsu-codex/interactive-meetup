---
name: create-presentation
description: Create or edit an independent HTML Meetup presentation in this repository, connect it to the agenda, and preview it for nontechnical collaborators using Codex.
---

# 建立 Meetup 簡報

讓共編者使用自然語言建立 HTML 簡報；在目前 repo 工作。

1. 讀取 AGENTS.md、agenda/agenda.json；新增時讀取 [簡報格式](references/presentation-format.md) 與 assets/template/。
2. 從使用者訊息取得標題、講者、分享時間、主要內容、风格、主色與參考素材。只追問影響內容的重要缺項；可合理推定的視覺選擇直接採用並說明，不虛構講者或數據。
3. 選擇未占用的小寫英文 slug，將 assets/template/ 複製並改寫至 presentations/<slug>/。保留 index.html、slides.js、style.css；有圖片才新增 assets/。
4. 一張投影片一個主題，依分享時間調整內容密度與頁數。將標題與講者寫入 index.html，內容寫入 slides.js，主色及風格寫入當地 style.css。外來文字放入 HTML 時妥善轉義。
5. 在 agenda/agenda.json 接上簡報路徑；已有對應議程就更新，避免重複。未知時間留空，不改其他講者順序。使用者只要草稿時不必加入議程。
6. 修改既有簡報優先限制在指定資料夾，僅共用問題才修改 website/。

## 預覽與回饋

從 repo 根目錄啟動本機 HTTP server，例如 python3 -m http.server 4173 --bind 127.0.0.1。
若服務已存在，確認服務的是本 repo；埠衝突時改用其他埠。
用可用瀏覽器工具開啟 http://localhost:4173/presentations/<slug>/，逐頁檢查文字、圖片、溢出、按鈕與鍵盤切頁、返回議程，以及首頁連結。也檢查窄視窗的閱讀與操作。
修正問題後重新檢查受影響頁面，提供可點的預覽網址；有預覽面板時直接開啟。
若環境阻擋預覽，說明未完成的檢查與啟動指令，不宣稱已驗證。
使用者回饋例如「第二頁太擠」時，修改該份簡報並重新預覽。
交付修改位置與驗證結果，不自動 commit、push 或部署。
