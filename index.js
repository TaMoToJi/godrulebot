const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Use >>help for help`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '>>';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}help`){
    message.channel.send("`BOT` **Commands** : \n ```fix Avatar - Gets a user's avatar```");
  }

  if (message.content === `${prefix}Avatar`){
    message.reply(message.author.avatarURL);
  }

  if (cmd === `${prefix}kick`){
  let member = message.mentions.members.first();
  member.kick();
}
});

bot.login(process.env.token);
