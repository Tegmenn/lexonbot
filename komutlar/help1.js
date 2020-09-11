const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username} BOT`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`**Genel komutlar**`)
.addField('**   **  :point_down:', `** *destek**: Botun destek sunucusunı verir. <a:ates:743590844283617320>\n** *i** Botun istatistiklerini yazar. <a:ates:743590844283617320>\n** *öneri <mesaj>** Botumuz bir öneride bulunursunuz.<a:ates:743590844283617320>\n** *şikayet <mesaj>** Botumuzu şikayet edebilirsiniz. <a:ates:743590844283617320>\n`)
.setFooter(`Lexon`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setImage("https://images-ext-2.discordapp.net/external/Qn7QAexTkV01wqaswdakh2heT9EzIfwgbBgo4Zyqikk/https/media.discordapp.net/attachments/707630474096279593/707663477333819512/a1giphy_2.gif?width=400&height=200")

 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['komutlar'],   
  permLevel: 0
};
exports.help = {
  name: 'bot'
};
  