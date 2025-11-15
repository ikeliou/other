# 劇本殺揪團 — Next.js Starter

這是一個 Next.js + TypeScript + TailwindCSS 的 Starter，為「劇本殺揪團網站」前端骨架（MVP 範圍）。
包含：
- Next.js + TypeScript 基本結構
- TailwindCSS 設定與 design tokens（colors / spacing / radius）
- 範例頁面：首頁 (活動列表)、活動詳情 stub
- 可重用元件：Header、EventCard、BookingSummary
- Mock data: ./data/mockEvents.ts

快速開始
1. 安裝依賴
   npm install
   或
   yarn

2. 開發伺服器
   npm run dev
   或
   yarn dev

3. 建置與啟動（production）
   npm run build
   npm start

建議下一步
- 新增 MSW( Mock Service Worker ) 實作 mock API
- 整合 Storybook（元件庫）
- 加入 CI/CD（GitHub Actions -> deploy to Vercel）
- 加入驗證/支付 mock flow

設計 tokens（可在 tailwind.config.js 調整）
- primary: #3B82F6
- accent: #F97316
- bg: #F8FAFC
- surface: #FFFFFF
- text-primary: #0F172A

