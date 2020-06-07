const Discord = require('discord.js');
const client = new Discord.Client();
const invites = {};

client.on("ready", () => {
  console.log("Jeg er klar!");
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('531141784600838144').send("Welcome to the server! - Please read the #rules"); 
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
