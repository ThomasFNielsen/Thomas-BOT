const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Jeg er klar!");
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('531141784600838144').send(message.author + ' - test'); 
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
