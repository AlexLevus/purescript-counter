FROM node:16

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000 3000

CMD ["npm", "start"]