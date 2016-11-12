FROM node:4.5.0

RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app
WORKDIR $HOME
RUN git clone https://github.com/akoskm/nicepls.git nicepls
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/nicepls
RUN npm install
RUN npm run build

EXPOSE 3030
CMD [ "npm", "start" ]