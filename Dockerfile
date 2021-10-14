FROM --platform=linux/x86-64 node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm","start"]