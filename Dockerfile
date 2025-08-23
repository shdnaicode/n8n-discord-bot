FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN curl -fsS https://dotenvx.sh | sh
RUN dotenvx ext prebuild

CMD ["dotenvx", "run", "--", "node", "discord_bot/index.js"]
