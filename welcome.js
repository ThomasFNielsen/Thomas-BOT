const Discord = require("discord.js");
const client = new Discord.Client();

const newUsers = [];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find(channel => channel.name === "nye-medlemmer").send("test\n" + userlist);
    newUsers[guild.id].clear();
  }
});

client.login("NTMxMDk4MzgxNjQ1NTEyNzEz.DxyPBA._EDhmZZ2iKnASuKJuJDotBNRouA");
