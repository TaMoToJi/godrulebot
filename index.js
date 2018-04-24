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
    message.channel.send("`BOT` **Commands** : \n ```avatar - Gets a user's avatar \nsay - {TEXT} u want type\nping - check your ping```");
  }

  if (message.content === `${prefix}avatar`){
    message.reply(message.author.avatarURL);
    message.delete();
    message.channel.send(text);
  }

  if(cmd === `${prefix}say`){
   if(!message.member.roles.some(r=>["OWNER", "ADMIN"].includes(r.name)) )
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
 message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");

}

 if(cmd === `${prefix}kick`){
    if(!message.member.roles.some(r=>["OWNER", "ADMIN"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "𝐍𝐨 𝐑𝐞𝐚𝐬𝐨𝐧";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${message.author.tag} 𝐇𝐚𝐬 𝐁𝐞𝐞𝐧 𝐊𝐢𝐜𝐤 ${member.user.tag} 𝐅𝐫𝐨𝐦 𝐒𝐞𝐫𝐯𝐞𝐫 𝐑𝐞𝐚𝐬𝐨𝐧:${reason}`);

  }

 if(cmd === `${prefix}clear`){
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

 if(cmd === `${prefix}serverinfo`){
   message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "ServerRules",
    url: "http://google.com",
    description: "Please Read a ServerRules",
    fields: [{
        name: "ServerRulesList",
        value: "1. No Spamming :speak_no_evil:\n2. No Bullying :sweat:\n3. No Asking From Staff :pray:\n4. Use The Right Channels :pencil:\n5. No Abusing :busts_in_silhouette:\n6. No Swearing :speaking_head:"
      },
      {
        name: "ServerLink",
        value: "Click Here To Copy Link [GodRuleServer](http://discord.gg/7mS9GEY)."
      },
      {
        name: "Server-Create",
        value: "Owner:__**ᴛᴀᴍᴏᴛᴏᴊɪ✓ᵛᵉʳᶦᶠᶦᵉᵈ#5881**__"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Thank For Support Server Alway"
}
});

bot.login(process.env.token);
