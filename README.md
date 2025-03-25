# Web-texnology

## Base URL
`http://localhost:3000/`

## Authentication
JWT Token в заголовке `Authorization: Bearer <token>`

### Endpoints:

| Метод | Путь | Описание |
|-------|------|----------|
| POST  | `/auth/register` | Регистрация пользователя |
| POST  | `/auth/login`    | Авторизация |
| GET   | `/videos/live`   | Получить RTMP-ключ трансляции |
| POST  | `/chat/message`  | Отправить сообщение в чат |
| PUT   | `/chat/like/:id` | Поставить лайк сообщению |

## Примеры запросов:

**Регистрация:**
```bash
curl -X POST https://api.videostream.example.com/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com", "password":"Qwerty123!"}'


---

#### 2. **Project Report** (`/docs/report.md`)

```markdown
# VideoStream Platform: Отчёт о разработке

## 📌 Использованные технологии
- **Frontend**: React 18, WebRTC, HLS.js
- **Backend**: Node.js (Express), NGINX + RTMP модуль
- **База данных**: PostgreSQL
- **Стриминг**: OBS → RTMP → HLS

## 🚀 Ключевые функции
1. Прямая трансляция с камеры/экрана
2. Двойная система чатов (общий/QA)
3. JWT-аутентификация
4. Система лайков сообщений

## 🔧 Проблемы и решения

### 1. Задержка трансляции
**Проблема**: 15-20 сек при использовании HLS  
**Решение**:  
- Переход на WebRTC для P2P-трансляций
- Оптимизация буферизации на клиенте

```javascript
// Пример оптимизации HLS
hls.js.configure({ maxBufferLength: 2 });

### 2. Синхронизация чатов
**Проблема**: Расхождения между вкладками
**Решение**:
- WebSocket-сервера
- подтверждения доставки

### 3. Безопасность RTMP
**Проблема**: Неавторизованный доступ к стриму
**Решение**:
- Генерация временных ключей
- IP-фильтрация на NGINX

## Структура проекта 
video-stream-app/
├── frontend/
│ ├── public/
│ │ ├── index.html 
│ │ ├── favicon.ico 
│ │ ├── manifest.json 
│ │ └── robots.txt 
│ ├── src/
│ │ ├── index.js 
│ │ ├── App.js 
│ │ ├── App.css 
│ │ ├── components/ 
│ │ │ └── ChatMessage.js 
│ │ ├── pages/ 
│ │ │ ├── HomePage.js 
│ │ │ ├── HomePage.css 
│ │ │ ├── RegisterPage.js 
│ │ │ └── RegisterPage.css 
│ │ └── assets/ 
│ │ └── styles/ 
│ │ └── global.css 
│ ├── Dockerfile 
│ ├── nginx.conf 
│ └── package.json 
│
├── backend/
│ ├── src/
│ │ ├── main.py 
│ │ ├── config/
│ │ │ └── settings.py 
│ │ ├── api/
│ │ │ ├── init.py
│ │ │ ├── auth.py 
│ │ │ ├── videos.py 
│ │ │ └── chat.py 
│ │ ├── models/
│ │ │ ├── user.py 
│ │ │ ├── video.py 
│ │ │ └── message.py 
│ │ ├── services/
│ │ │ ├── auth_service.py 
│ │ │ └── stream_service.py 
│ │ ├── static/ 
│ │ ├── templates/ 
│ │ └── requirements.txt 
│ ├── Dockerfile 
│ ├── .env 
│ └── nginx/
│ └── nginx.conf
│
├── docker-compose.yml
├── README.md
└── docs/
├── API.md 
└── DEPLOYMENT.md 