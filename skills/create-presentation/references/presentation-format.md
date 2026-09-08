# 簡報格式

一份簡報放在 presentations/<slug>/，包含 index.html、slides.js、style.css；有素材才建立 assets/。
範本的相對路徑是以複製到此處為準，不直接在 Skill 的 template 目錄預覽。

slides.js 匯出 slides 陣列與 promptIdeas 陣列。
每張投影片有 id（唯一英文代號）、kicker（短標籤）、title（標題）、description（短說明）、response（下方提示）、render（回傳自訂 HTML 的函式，沒有區塊可回傳空字串）。
title、description、render 接受可信 HTML，外來文字必須轉義。

website/js/deck.js 的 mountDeck(root, slides, promptIdeas) 每次渲染一張投影片，左右键與按鈕循環切換。
可選互動：button.choice[data-choice] 為本機選項；#remix 從 promptIdeas 選取文字更新 #prompt-output。
這是本機互動，沒有跨觀眾彙整或後端儲存，不描述為即時投票服務。

agenda/agenda.json 是有順序的陣列：
```json
{
  "type": "presentation",
  "title": "用 AI 把想法做出來",
  "speaker": "講者姓名",
  "time": "18:45 — 19:05",
  "description": "從一個需求開始",
  "path": "presentations/ai-prototype/"
}
```
type 可用 opening、presentation、interaction、closing。
path 是 repo 根目錄相對路徑，不加開頭斜線，不用外部 URL 或 ../；未建立的簡報使用 null。
不要為所有環節建立空白簡報。每份簡報的 style.css 可自行覆寫共用樣式。
