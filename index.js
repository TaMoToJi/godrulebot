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
    message.channel.send("huy!");
  }

  if (cmd === `${prefix}avatar`){
    request.get(message.content.substr(11)).pipe(fs.createWriteStream('./setavatar.png'));
    client.user.setAvatar(fs.readFileSync('./setavatar.png')).then(user => { message.channel.send('✔ Operation successful'); console.log('New Avatar set!'); })
        .catch((error) => { message.channel.send('× Operation failed'); console.log('Error on setavatar command:', error); });
    
    return;
}
});

bot.login(process.env.token);
