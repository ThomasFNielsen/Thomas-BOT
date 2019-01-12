const Discord = require('discord.js');
const client = new Discord.Client();

bot.on("guildMemberAdd", function(member)
{   
    letmemberRole = member.guild.roles.find("name", "Medlem");
    {
        member.addRole(memberRole);
        member.send("Velkommen til ThomasFNielsen's discord!");
    }
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hey') {
    	message.channel.send(message.author + ' - Heeey, min ven!');
  	    }
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.channel.send(message.author + ' - Heeey, min ven!');
  	    }
});

client.on('message', message => {
    if (message.content === 'Goddag') {
    	message.channel.send(message.author + ' - Goddag, min ven!');
  	    }
});

client.on('message', message => {
    if (message.content === 'goddag') {
    	message.channel.send(message.author + ' - Goddag, min ven!');
  	    }
});

client.on('message', message => {
    if (message.content === 'Godmorgen') {
    	message.channel.send(message.author + ' - Godmorgen, har du sovet godt?');
  	    }
});

client.on('message', message => {
    if (message.content === 'godmorgen') {
    	message.channel.send(message.author + ' - Godmorgen, har du sovet godt?');
  	    }
});

client.on('message', message => {
    if (message.content === 'Godaften') {
    	message.channel.send(message.author + ' - Godaften, har du haft en god dag?');
  	    }
});

client.on('message', message => {
    if (message.content === 'godaften') {
    	message.channel.send(message.author + ' - Godaften, har du haft en god dag?');
  	    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
