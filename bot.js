const Discord = require('discord.js');
const client = new Discord.Client();
const invites = {};

client.on("ready", () => {
  console.log("Jeg er klar!");
});

client.on("guildMemberAdd", (MEMBER) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find(channel => channel.name === "new-member").send("Welcome to the server!\n" + userlist! - Please read the #rules");
    newUsers[guild.id].clear();
  }
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
