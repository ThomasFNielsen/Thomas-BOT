const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Jeg er klar!");
});

client.on (guildMemberAdd", member => {
    var role = member.guild.roles.find ("name", "MEDLEM");
    member.addrole (role);

})

client.on('message', message => {
    if (message.content === 'Hey') {
    	message.channel.send('Heeey <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.channel.send('Heeey <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'Heeey') {
    	message.channel.send('Heeey <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'heeey') {
    	message.channel.send('Heeey <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'heey') {
    	message.channel.send('Heeey <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'Heey') {
    	message.channel.send('Heeey <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'Goddag') {
    	message.channel.send('Goddag <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'goddag') {
    	message.channel.send('Goddag <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'Godmorgen') {
    	message.channel.send('Godmorgen <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'godmorgen') {
    	message.channel.send('Godmorgen <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'Godaften') {
    	message.channel.send('Godaften <:Love:537271965023731742> - ' + message.author);
    }
});

client.on('message', message => {
    if (message.content === 'godaften') {
    	message.channel.send('Godaften <:Love:537271965023731742> - ' + message.author);
    }
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
