const Discord = require('discord.js');
const client = new Discord.Client();
const invites = {};

client.on("ready", () => {
  console.log("Jeg er klar!");
});

client.on('message', (message) => {
    if (message.content === '!move') {
    	message.channel.send(+ message.author + ' would like to be moved to one of your rooms.');
    }
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
