const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username} BOT`, client.user.avatarURL)
.setColor('RANDOM')
.addField('** **',`
**              DONOR ÜYELER**
\<:diamond_donor:747869440540147884>**<@!331930966341713931>** **/ __Diamond Donor__**
\<:diamond_donor:747869440540147884> **/ __Diamond Donor__**
\<:gold_donor:747869464812453949> **/ Gold Donor**
\<:gold_donor:747869464812453949> **/ Gold Donor**
\<:iron_donor:747869475512123526> <@!474182152267890688> / İron Donor
\<:iron_donor:747869475512123526> / İron Donor
*▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁*
\<:720602229433958411:747869732027236502> <@!510949064939012108> **/Lexon Bot Developer / Lexon Owner** 
\<:720602229433958411:747869732027236502> **/Lexon Bot Developer / Lexon Admin**
\<:720602229433958411:747869732027236502> **/Lexon Bot Developer / Lexon Admin**
*▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁*
\<:diamond_donor:747869440540147884> Diamond Donor = 15 TL (Sınırsız)
\<:gold_donor:747869464812453949> Gold Donor = 10 TL (Sınırsız)
\<:iron_donor:747869475512123526> İron Donor = 5 TL (Sınırsız)

** LEXON BOT TÜM HAKLARI SAKLIDIR**`)
.setFooter(`Lexon BOT`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setImage("")

 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["donor"],   
  permLevel: 0
};
exports.help = {
  name: 'donor'
};
  