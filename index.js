const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("in guild 21", {type: "WATCHING"});
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '>>';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if (cmd === `${prefix}help`){
    message.channel.send("```BOT-Commands: Prefix >>\n\navatar - Gets a user's avatar \nsay - {TEXT} u want type\nping - check your ping\nclear - Clean a message\nkick - kick member from server\nban - ban member from server```");
    message.delete();
    message.channel.send(text);
  }

  if (message.content === `${prefix}avatar`){
    message.author.send(message.author.avatarURL);
    message.delete();
    message.channel.send(text);
  }

  if(cmd === `${prefix}say`){
   if(!message.member.roles.some(r=>["OWNER", "ADMIN"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);
}

 if(cmd === `${prefix}ping`){
 message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");

}

 if(cmd === `${prefix}qwe`){
    if(!message.member.roles.some(r=>["OWNER", "ADMIN"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please Mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "𝐍𝐨 𝐑𝐞𝐚𝐬𝐨𝐧";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`𝐇𝐚𝐬 𝐁𝐞𝐞𝐧 𝐊𝐢𝐜𝐤 ${member.user.tag} 𝐅𝐫𝐨𝐦 𝐒𝐞𝐫𝐯𝐞𝐫 𝐑𝐞𝐚𝐬𝐨𝐧:${reason}`);

  }

 if(cmd === `${prefix}clear`){
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    if(!message.member.roles.some(r=>["OWNER", "ADMIN"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

 if(cmd === `${prefix}ban`){
    if(!message.member.roles.some(r=>["ADMIN", "OWNER"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");   
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please Mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "𝐍𝐨 𝐑𝐞𝐚𝐬𝐨𝐧";  
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`𝐇𝐚𝐬 𝐁𝐞𝐞𝐧 𝐁𝐚𝐧 ${member.user.tag} 𝐅𝐫𝐨𝐦 𝐒𝐞𝐫𝐯𝐞𝐫 𝐑𝐞𝐚𝐬𝐨𝐧:${reason}`);
  }
 
 if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");
    
    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }  

});

bot.login(process.env.token);
