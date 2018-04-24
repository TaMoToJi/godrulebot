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
    message.channel.send("`BOT`allow use comingsoon");
  }

  if (message.content === `${prefix}avatar`){
    message.reply(message.author.avatarURL);
  }

  if (mSplit[1] === `${prefix}kick`){
                 bot.kickMember(cleanID(mSplit[2]), message.channel.server.id, function (error) {
                     console.log('error: ' + error);
                     if (error) {
                         bot.reply(message, error);
                         return;
                     }
                     bot.reply(message, "I've kicked: " + mSplit[2] + " from: " + message.channel.server.id);
                 });
}
});

bot.login(process.env.token);
