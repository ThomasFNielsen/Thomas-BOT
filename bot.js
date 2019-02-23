const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Jeg er klar!");
});

client.on('guildMemberAdd', member => {
client.on('message', 

var role = member.guild.roles.find('name', 'Medlem'); // Variable to get channel ID
member.addRole(role); // Adds the default role to members

member.guild.channels.get('531141784600838144').send({embed: {
color: 3447003,
title: "**SERVER NAME** Welcome Bot!",
url: "WEBSITE URL",
description: "Welcome *" + member + "* to the **Server name** discord server!",
fields: [{
    name: "Information",
    value: "Some info on the server"
  }
],
timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "© NAME OF SERVER 2018 - 2019"
}
}}); });

client.on('message', (message) => {
    if (message.content === 'Hey') {
    	message.channel.send(message.author + ' - Heeey <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.channel.send(message.author + ' - Heeey <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'Heeey') {
    	message.channel.send(message.author + ' - Heeey <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'heeey') {
    	message.channel.send(message.author + ' - Heeey <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'heey') {
    	message.channel.send(message.author + ' - Heeey <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'Heey') {
    	message.channel.send(message.author + ' - Heeey <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'Goddag') {
    	message.channel.send(message.author + ' - Goddag <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'goddag') {
    	message.channel.send(message.author + ' - Goddag <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'Godmorgen') {
    	message.channel.send(message.author + ' - Godmorgen <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'godmorgen') {
    	message.channel.send(message.author + ' - Godmorgen <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'Godaften') {
    	message.channel.send(message.author + ' - Godaften <:Love:537271965023731742>');
    }
});

client.on('message', message => {
    if (message.content === 'godaften') {
    	message.channel.send(message.author + ' - Godaften <:Love:537271965023731742>');
    }
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
