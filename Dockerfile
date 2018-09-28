FROM node:8-stretch

RUN apt-get update && apt-get install -y \
    libasound2 \
    libgconf-2-4 \
    libgtk-3-0 \
    libgtk2.0-0 \
    libnss3 \
    libxss1 \
    libxtst6 \
    xvfb

COPY . /root

WORKDIR /root

RUN npm install

CMD ["/root/xvfb.sh", "npm", "run", "fails-linux-only"]
