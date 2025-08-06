# Fish Audio Interface

這是一個用於 Fish Audio API 的 Next.js 介面，支援語音訓練和語音合成功能。

## 環境設定

1. 複製環境變數範例文件：
```bash
cp .env.example .env.local
```

2. 在 `.env.local` 文件中設定您的 Fish Audio API Token：
```
NEXT_PUBLIC_FISH_AUDIO_TOKEN=your_actual_token_here
```

## 功能介紹

- **語音訓練** (`/training_audio_on_fish`): 上傳音頻文件並訓練新的語音模型
- **語音合成** (`/testing_audio_on_fish`): 使用已訓練的模型進行文字轉語音

## 開始使用

首先，安裝依賴：

```bash
npm install
```

然後啟動開發伺服器：

```bash
npm run dev
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

## API Token 取得方式

1. 前往 [Fish Audio](https://fish.audio) 
2. 登入您的帳戶
3. 在設定或 API 頁面中取得您的 API Token
4. 將 Token 設定到 `.env.local` 文件中

## 學習更多

要了解更多關於 Next.js 的資訊，請查看以下資源：

- [Next.js Documentation](https://nextjs.org/docs) - 學習 Next.js 功能和 API
- [Learn Next.js](https://nextjs.org/learn) - 互動式 Next.js 教學

## 部署

最簡單的部署方式是使用 Next.js 創建者提供的 [Vercel Platform](https://vercel.com)。

查看 [Next.js 部署文件](https://nextjs.org/docs/deployment) 了解更多詳情。
