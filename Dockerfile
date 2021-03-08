FROM node:14

RUN mkdir -p /usr/local/share/loquesea
WORKDIR /usr/local/share/loquesea

COPY package*.json /usr/local/share/loquesea

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ]
