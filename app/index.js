const token = process.env["TOKEN"];
const { Client } = require("discord.js");
const http = require("http");
const client = new Client({
  intents: 32767,
  partials: [
    "MESSAGE",
    "CHANNEL",
    "REACTION",
    "GUILD_MEMBER",
    "USER",
    "GUILD_SCHEDULED_EVENT",
  ],
});

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  const responseMessage = "<h1>Hello World</h1>";
  res.end(responseMessage);
  console.log("wow");
});

const port = 8080;
server.listen(port);

client.on("ready", () => {
  console.log(`login ${client.user.tag}!`);
  setInterval(() => {
    client.user.setActivity({
      name: `${client.ws.ping}ms`,
      type: "PLAYING",
    });
  }, 5000);
});

client.login(token);
