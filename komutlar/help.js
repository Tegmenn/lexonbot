const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username} BOT`, client.user.avatarURL)
.setColor('RANDOM')
.addField('** **',`
** *sunucu** Destek sunucumuza götürür.
** *link** Botun davet linkini verir.
** *müzik** Müzik bilgilerini gösterir
** *site** Botun sitesinşn linkini verir
** *bot** Bot ile ilgili ping, şikayet tarzı genel bilgilerde yardımcı olur.
** *vote** Botumuza vote atmanız çin sizi bot list'e aktarır (**Yakında...**)
** *eğlence** Botumuzun eğlence komutlarını gösterir.
** LEXON BOT TÜM HAKLARI SAKLIDIR**`)
.setFooter(`Lexon BOT`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setImage("https://images-ext-2.discordapp.net/external/Qn7QAexTkV01wqaswdakh2heT9EzIfwgbBgo4Zyqikk/https/media.discordapp.net/attachments/707630474096279593/707663477333819512/a1giphy_2.gif?width=400&height=200")

 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"],   
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
  