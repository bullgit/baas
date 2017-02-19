FROM mhart/alpine-node:7
MAINTAINER Kevin Gimbel <docker@kevingimbel.com>

WORKDIR /src
ADD . .

EXPOSE 8000

CMD ["node", "index.js"]
