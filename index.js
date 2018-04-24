const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`>>help for help`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '>>';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}help`) {
    message.channel.send("`BOT`allow use comingsoon");
  }

  if (message.content === `${prefix}avatar`){
    message.reply(message.author.avatarURL);
  }

  if (command === `${prefix}kick`) {
    let modRole = message.guild.roles.find("name", "Mods");
    if(!message.member.roles.has(modRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
    }
});

bot.login(process.env.token);
