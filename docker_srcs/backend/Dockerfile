FROM debian

RUN apt update -y && apt upgrade -y
RUN apt install nodejs npm -y

WORKDIR /app

# COPY ../../backend /app
RUN npm install --prefix /app

CMD [ "node", "index.js" ]
