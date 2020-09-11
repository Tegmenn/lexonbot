const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.setTitle(`<a:ates:743590844283617320> ÇOK YAKINDA <a:ates:743590844283617320>`)
.setFooter(`Lexon`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()

 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['site'],   
  permLevel: 0
};
exports.help = {
  name: 'site'
};
  