# Базовый образ с Node.js
FROM node:18-alpine as build

# Рабочая директория
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install 
RUN npm install react-icons
RUN npm install axios react-webcam

# Копируем все файлы проекта
COPY . .

# Собираем приложение
RUN npm run build 

# Финальный образ с nginx
FROM nginx:alpine

# Копируем собранное приложение в nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфиг nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]