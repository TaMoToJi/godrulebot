const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: false});


client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity(`Type #help for help`, {type: 2});
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find("name", "Playing Minecraft");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Minecraft") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '#';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(cmd === `{prefix}ball`){
    
    if(!args[1]) return message.reply("Not full Question");
    let result = ["Yes","No","Maybe", "I Don't Know"];

    let thatittxt = `That Was.... Cool ${message.author}`

    let = Math.floor((Math.random() * sayings.length) + 0);
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setDescription("8Ball")
    .setAuthor(message.author.tag)
    .setColor('RANDOM')
    .addField("Question", question)
    .addField(`${client.user.username} Says...`, replies[result])
    .addField("Cool..", thatittxt);

    return message.channel.send(ballembed);
    console.log();

  }

  if(cmd === `${prefix}8ball`){
if(!args[0]) {
  const errEmbed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setAuthor('ERROR')
  .setTitle(':exclamation: Usage: **ks!8ball (question)**');
  message.channel.send({embed: errEmbed})
  return;
}
var sayings = ["It is certain",
										"It is decidedly so",
										"Without a doubt",
										"Yes, definitely",
										"You may rely on it",
										"As I see it, yes",
										"Most likely",
										"Outlook good",
										"Yes",
										"Signs point to yes",
										"Reply hazy try again",
										"Ask again later",
										"Better not tell you now",
										"Cannot predict now",
										"Concentrate and ask again",
										"Don't count on it",
										"My reply is no",
										"My sources say no",
										"Outlook not so good",
										"Very doubtful"];

			var result = Math.floor((Math.random() * sayings.length) + 0);
      const ballEmb = new Discord.RichEmbed()
      .setColor(0x00FFFF)
      .setAuthor('8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png')
      .addField(args, sayings[result]);
			message.channel.send({embed: ballEmb})
}
  
  if(comd === `${prefix}userinfo`){
        const UserInfo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL()) //Heading With Username & Their Avatar 
            .setTitle('UserInfo')
            .setURL('www.google.com') //Any Vaild Link
            .setColor('RANDOM') //You Can Use HexColour Ex:- #000000
            .setImage(message.author.avatarURL()) //Add Any Image URl || Image
            .setThumbnail(message.author.avatarURL()) //Add Any Image URl || ThumbNail
            .addField('Avatar', message.author.avatar, true) //The ID of the user's avatar //Inline True or false
            .addField('AvatarURL', message.author.avatarURL, true)
            .addField('AvatarURL', message.author.avatarURL, true)
            .addField('Bot', message.author.bot, true) //Returns True If Message Author = Bot || False If Message Author not Bot.
            .addField('Created At', message.author.createdAt, false) //The time the user was created || .createdTimestamp - The timestamp the user was created at
            .addField('Discrim', message.author.discriminator, true) //A discriminator/tag based on username for the user Ex:- 0001
            .addField('DMChannel', message.author.dmChannel) //The DM between the client's user and this user || If Nothing Returns "Null"
            .addField('ID', message.author.id) //The ID of the User/author
            .addField('Last Message', message.author.lastMessage) //The Message object of the last message sent by the user, if one was sent
            .addField('Last Message ID', message.author.lastMessageID) //The ID of the last message sent by the user, if one was sent
            .addField('Presence', message.author.presence) //The presence of this user
            .addField('Presence Status', message.author.presence.status) //The presence status of this user
            .addField('Presence Game', message.author.presence.activity.name) //The presence Game of this user
            .addField('Tag', message.author.tag) //The Discord "tag" for this user || Ex:- Sai Chinna#6718
            .addField('Username', message.author.username) //The username of the user || Ex:- Sai Chinna
            .addField('Nick Name', message.guild.member(target).displayName) //Nick Name In That (message sent) server || Define target as message Author Ex:- let target = message.author; || Add This Line in Top
            .setFooter('Requested By', message.author.tag) //Change To Anything As You Wish
            .setTimestamp() //The timestamp of this embed

            message.channel.send(UserInfo);
   }
 

  if(cmd === `${prefix}radd`) {
    let myRole = message.guild.role.find('name', "ADMIN")
    let member = message.mentions.member.find();
    member.addRole(myRole).catch(console.error);
    return message.channel.sand("Just Test Not Man Ten !");


 }

  if(cmd === `${prefix}asd`) {
   if(!message.member.roles.some(r=>["OWNER", "ADMIN"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);

}
  
  if(cmd === `${prefix}say`) {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Need To [MANAGE_MESSAGES] Permissions !");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

 if(cmd === `${prefix}ping`){
 message.channel.send(new Date().getTime() - message.createdTimestamp + " ms :satellite: ");

}


 if(cmd === `${prefix}clear`){
     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !");
     if(!args[0]) return message.channel.send("no");
     message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`message has been clear ${args[0]} .`).then(msg => msg.delete(2000));
 });

}


 if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("```md\n# Please mention one user in order to kick them!\n- kick [@user] [reason]```");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Need To [KICK MEMBER] Permissions !");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
    .setColor("#635b0c")
    .addField("Kicked User", `${kUser}`)
    .addField("Kicked By", `<@${message.author.id}>`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);


    message.guild.member(kUser).kick(kReason);
    return message.channel.send(botembed);
  }  

 if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Info")
    .setColor("#f58be1")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  } 

  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#ae67fc")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}report`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("```md\n# Please mention one user in order to report them!\n- report [@user] [reason]```");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser}`)
    .addField("Reported By", `${message.author}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

  if(cmd === `${prefix}avatar`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setImage(message.author.avatarURL.addField)
    .setColor("#ae67fc")
    .setFooter(`Powered By TaMoToJi`)

    return message.channel.send(botembed);
    message.delete();
    message.channel.send(text);
  }

  if(cmd === `${prefix}prefix`){

   let embed = new Discord.RichEmbed()
   .setDescription("Prefix is [ # ]")
   .setColor('RANDOM')
   
   return message.channel.send(embed);

  }


  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("```md\n# Please mention one user in order to kick them!\n- ban [@user] [reason]```");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You Need To [BAN MEMBER] Permissions !");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you don't have permissions to use this");

    let banEmbed = new Discord.RichEmbed()
    .setTitle("~Ban~")
    .setColor("#FF0000")
    .addField("Banned User", `${bUser}`)
    .addField("Banned By", `<@${message.author.id}>`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    message.guild.member(bUser).ban(bReason);
    return message.channel.send(botembed);


    return;
  }

  if(cmd === `${prefix}invite`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor("TaMoToJi's Website", "https://cdn.discordapp.com/avatars/438160518293880832/0301fdd6dffcaf6751d33a809a32941d.png?size=2048")
    .setColor("#ae67fc")
    .setTitle("Hello  !I’m TaMoToJi\nStandard Command List\n140+ commands , Music , Fun, Image , Moderation , General command , Use 24/7\nAll in one , All in TaMoToJo   \niUse #help [command] to get more info on a seacific command ")
    .setThumbnail(bicon)
    .addBlankField(true)
    .addField("KhmerEMpire", "[Click Here](https://tamotoji533.wixsite.com/healong) View To Website :globe_with_meridians:")
    .addField("TaMoToJi", "[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=438160518293880832&permissions=2042801335&scope=bot)")
    .setFooter("Powered By TaMoToJi", "https://cdn.discordapp.com/avatars/438160518293880832/0301fdd6dffcaf6751d33a809a32941d.png?size=2048")
    .addBlankField(true)

    return message.channel.send(botembed);

  }
  
  if(cmd === `${prefix}embed`){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !");
    const embed1 = new Discord.RichEmbed()
    .setAuthor("TaMoToJi :", message.author.avatarURL)
    .setDescription(args.join(" "),true)
    .setColor('RANDOM')
    .setDescription(args.join(" "))

    message.delete().catch(O_o=>{});
    return message.channel.send(embed1);
    
  }
 


  if(cmd === `${prefix}help`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor("TaMoToJi's Help Commands", "https://cdn.discordapp.com/avatars/438160518293880832/0301fdd6dffcaf6751d33a809a32941d.png?size=2048")
    .setColor("#5ba0ed")
    .addBlankField(true)
    .setDescription("[Click Here](https://tamotoji533.wixsite.com/healong) View To Website :globe_with_meridians:")
    .setImage("https://cdn.discordapp.com/attachments/438339455141543936/438682012232974367/BotCommand.JPG")
    .setFooter("Powered By TaMoToJi", "https://cdn.discordapp.com/avatars/438160518293880832/0301fdd6dffcaf6751d33a809a32941d.png?size=2048")

    return message.channel.send(botembed);

  }
 
  if(cmd === `${prefix}tempmute`){

     let toMute = message.mentions.members.first() || message.guild.member(args[0]);
    if (!toMute) return message.reply('Please mention a Member first or provide their ClientID.');
    let muteRole = message.guild.roles.find('name', "TempMute");
    if (!muteRole) return message.channel.send(`Cant find a role named`);
    let reason = args.slice(2).join(' ');
    if (!reason) reason = 'no reason provided';
    let modlog = message.guild.channels.find('name', "tamotoji-logs")
    if (!modlog) return message.channel.send('Cant find a modlog Channel in my Database for this Guild , Please set one');

    var embed = new Discord.RichEmbed()

    .setTitle(':speak_no_evil: : Tempmuted | ' + toMute.user.tag)
    .setColor('#A9B5FD')
    .addField('User:', toMute.user.tag, true)  
    .addField('Moderator:', message.author.tag, true)
    .addField('Reason:', reason)
    .setFooter(toMute.user.tag + " was tempmuted")
    modlog.send(embed)
    toMute.addRole(muteRole);

    return message.channel.send(embed);

 }


});

client.login(process.env.token);
