const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hey') {
    	message.reply('Heeey :ThomasFNielsenLove:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTMxMDk4MzgxNjQ1NTEyNzEz.Dxsk-g.A99KHE5pMtnxIS4qucwaxJz0kSQ);
