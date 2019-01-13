const newUsers = [];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find(channel => channel.name === "chat").send("test\n" + userlist);
    newUsers[guild.id].clear();
  }
});

client.login("diLyW2IZ3RNBzEjn-mRg_B3Y0hQSNTKP");
