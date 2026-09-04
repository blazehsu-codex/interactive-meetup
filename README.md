# AI Meetup — Interactive Edition

一個可直接部署至 GitHub Pages 的互動 Meetup 網站原型。它以單頁體驗承載開場、議程、鍵盤操作簡報、現場投票式選項與會後資源。

## 本機預覽

這是零建置依賴的靜態網站。可直接開啟 `index.html`，或在專案目錄執行：

```bash
python3 -m http.server 4173
```

再前往 `http://localhost:4173`。

## GitHub Pages

將此目錄推送到 GitHub repository 後，在 repository 的 **Settings → Pages** 將來源選為 **Deploy from a branch**，並選擇 `main` 和 `/(root)` 即可發布。

## 客製下一場活動

- 在 `index.html` 更新活動名稱、議程、文案與資源連結。
- 在 `script.js` 調整互動簡報的題目、投票選項與 prompt 靈感。
- 之後可以將每一場活動移至 `meetups/<slug>/`，共用這個版型與互動模組。
