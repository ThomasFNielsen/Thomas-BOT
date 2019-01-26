const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = "tb!";
client.on ("message", (message) => {

  msg = message.content.toLowerCase();
  
  if (message.author.bot) return;
  
  mention = message.mentions.users.first();
  
  if (msg.startWith (prefix + "send")) {
    if (mention == null) { return; }
    message.delete();
    mentionMessage = message.content.slice (8);
    mention.sendMessage (mentionMessage);
    message.channel.send ("Beskeden er sendt!");
}    
  
client.on('guildMemberAdd', msg => { // Commands Go Inside The client.on('message', 
msg => )
msg.guild.channels.get('484648408372740099').send({embed: {
color: 3447003,
author: {
  name: client.user.username,
  icon_url: client.user.avatarURL
},
title: "Welcome To ()!",
url: "https://districtservices.net",
description: "@MEMBER",
fields: [{
    name: "Fields",
    value: "They can have different fields with small headlines."
  },
  {
    name: "Masked links",
    value: "You can put [masked links](http://google.com) inside of rich embeds."
  },
  {
    name: "Markdown",
    value: "You can put all the *usual* **__Markdown__** inside of them."
  }
],
timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "© Example"
}

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

// Initialize the invite cache
const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
    // "ready" isn't really ready. We need to wait a spell.
    wait(1000);

    // Load all invites for all guilds and save them to the cache.
    client.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
            invites[g.id] = guildInvites;
        });
    });
});

client.on('guildMemberAdd', member => {
    // To compare, we need to load the current invite list.
    member.guild.fetchInvites().then(guildInvites => {
        // This is the *existing* invites for the guild.
        const ei = invites[member.guild.id];

        // Update the cached invites
        invites[member.guild.id] = guildInvites;

        // Look through the invites, find the one for which the uses went up.
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

        console.log(invite.code)

        if (invite.code === "PBE7Qnc") {
            return member.addRole(member.guild.roles.find(role => role.name === "MEDLEM"));
        }
    });
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
