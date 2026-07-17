# VALESO B2B Site

Адаптивный B2B-сайт сотрудничества VALESO, подготовленный для Vercel.

## Что внутри

- Украинская и русская версии: `/?lang=uk` и `/?lang=ru`
- Лендинг для партнеров, дилеров, магазинов, оптовиков и профессиональных клиентов
- Форма с целями: стать партнером, получить прайс, отправить оптовый запрос
- Готовый API-роут для будущей отправки заявок в Telegram: `/api/lead`

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`

## Деплой на Vercel через GitHub

1. Распакуйте архив.
2. Загрузите папку проекта в новый GitHub-репозиторий.
3. В Vercel выберите `Add New...` -> `Project`.
4. Импортируйте GitHub-репозиторий.
5. Framework Preset: `Next.js`.
6. Build Command: можно оставить автоматически, Vercel возьмет `npm run build`.
7. Output Directory: оставить пустым/default.
8. Нажать `Deploy`.

## Деплой через Vercel CLI

```bash
npm install
npm i -g vercel
vercel
vercel --prod
```

## Telegram-заявки

Без Telegram-переменных форма работает в демо-режиме.

Для реальной отправки заявок добавьте в Vercel Environment Variables:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

После добавления переменных нужно сделать redeploy проекта.
