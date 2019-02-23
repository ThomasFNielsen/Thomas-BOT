const Discord = require('discord.js');
const client = new Discord.Client();

const Welcome = require("discord-welcome");

client.on("ready", () => {
  console.log("Jeg er klar!");
});
 
Welcome(bot, {
    privatemsg : "Default message, welcome anyway",
    publicmsg : "Default Public Message where you can flag use @MEMBER to mention the newcomer",
    publicchannel : "531141784600838144"
    })
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});

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
