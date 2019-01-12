const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
});

bot.on("guildMemberAdd", (member) => {

    if (member.id == bot.user.id) {
        return;
    }
    let guild = member.guild
    guild.fetchInvites().then(invdat => {
        invdat.forEach((invite, key, map) => {
            console.log(invite.code)
            if (invite.code === "PBE7Qnc") {
                return member.addRole(member.guild.roles.find(role => role.name === "MEDLEM"));
            }
        })
    })
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
