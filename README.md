# AI Meetup

共編者下載 repo 後，用 Codex 建立、修改與預覽 Meetup 網頁簡報。
首頁串接整場流程；一個資料夾就是一份簡報，每張投影片只講一個主題。

## 資料夾結構

```text
index.html                         # Meetup 首頁
agenda/agenda.json                 # 活動順序、講者、時間與簡報連結
presentations/
  opening/                        # 現有三頁互動開場
    index.html
    slides.js
    style.css
website/
  css/main.css                    # 共用視覺
  js/app.js                       # 首頁入口
  js/agenda.js                    # 從 JSON 載入議程
  js/deck.js                      # 共用簡報播放器
assets/                           # 活動共用素材
skills/create-presentation/
  SKILL.md                        # 建立、修改、預覽簡報的流程
  agents/openai.yaml              # Skill 顯示資訊
  references/presentation-format.md
  assets/template/                # 可以複製的簡報範本
AGENTS.md                         # 共編約定與 Skill 讀取入口
```

本環境禁止寫入 .agents，Skill 因此存放在 skills/，由 AGENTS.md 指示 Codex 讀取。這個位置不保證出現在自動探索的 Skill 選單，但可以直接要求 Codex 讀取該檔案使用。

## 給共編者

在 Codex 開啟下載的 repo，可以直接說：

> 幫我新增一份 Meetup 網頁簡報。標題「用 AI 做 Prototype」，講者小明，20 分鐘，內容包含需求釐清、實作 Demo、心得，科技感、橘色主色。請依專案 Skill 建立並預覽。

也可以明確指定：

> 請讀取 skills/create-presentation/SKILL.md，幫我新增簡報並開啟預覽。

可提供標題、講者、分享時間、主要內容、風格、主色與參考素材，不必自行改程式。
Codex 會建立 presentations/<slug>/、串接議程並提供預覽；再說「第二頁太擠，請拆成兩頁」即可修改。

每份簡報可有自己的 style.css；有圖片時再建立其 assets/。共用活動圖片放在根目錄 assets/。
多人共編時主要修改各自的簡報資料夾；合併 agenda.json 時確認活動順序與連結。

## 本機預覽

不需要安裝套件或 build。從 repo 根目錄執行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

- 首頁：<http://localhost:4173/>
- 開場：<http://localhost:4173/presentations/opening/>

請用 HTTP server；直接雙擊 HTML 的 file:// 模式無法可靠載入 ES modules 與議程 JSON。

## 維護規則

agenda/agenda.json 是首頁議程的唯一資料來源，依陣列順序排列。
尚未建立簡報的環節使用 path: null，首頁不顯示簡報按鈕。
新增講者不必修改共用播放器，也不用先建立主題引擎。
現有開場選項與靈感互動已保留；選項只有本機狀態，沒有後端票數統計。
原本 assets/css、assets/js、modules 的程式已遷移至 website/ 與 presentations/。

## 發布

既有 .github/workflows/deploy-pages.yml 會在 push 至 main 或手動觸發時部署 GitHub Pages。
此次整理不會自行 commit、push 或部署。
