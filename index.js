const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: false});

"ownerID": "356510829920780289"

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
    message.channel.send("`BOT` **Commands** : \n ```Avatar - Gets a user's avatar```");
  }

  if (message.content === `${prefix}Avatar`){
    message.reply(message.author.avatarURL);
  }

  if(cmd === `${prefix}say`){
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);
}
});

bot.login(process.env.token);
