const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`with HeaLOng`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '>>';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if (cmd === `${prefix}help`){
    message.channel.send("`BOT` **Commands** : \n ```avatar - Gets a user's avatar \nsay - {TEXT} u want type```");
  }

  if (message.content === `${prefix}avatar`){
    message.reply(message.author.avatarURL);
    message.delete();
    message.channel.send(text);
  }

  if(cmd === `${prefix}say`){
   if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.OWNER)) )
      return message.reply("Sorry, you don't have permissions to use this!");
   let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);
}

 if(cmd === `${prefix}ping`){
 const m = await message.channel.send("Ping?");
 m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}
});

bot.login(process.env.token);
