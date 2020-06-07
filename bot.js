const Discord = require('discord.js');
const client = new Discord.Client();
const invites = {};

client.on("ready", () => {
  console.log("Jeg er klar!");
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(channel => channel. name === "new-members")
  if(!channel) return;
  
  channel.send (`Welcome to the server, ${member}, please read the #rules!`)
  });

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
