# Используем официальный образ Node.js
FROM node:18-alpine

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Собираем приложение (если нужно)
# RUN npm run build

# Открываем порт
EXPOSE 5000

# Запускаем приложение
CMD ["npm", "start"]