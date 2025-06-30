# Базовый образ
FROM node:22

# Указываем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные исходники
COPY . .

# Говорим Docker, какой порт открыт в приложении
EXPOSE 8080


CMD ["npm", "start"]
