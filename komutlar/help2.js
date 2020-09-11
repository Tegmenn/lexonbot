const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username} BOT`, client.user.avatarURL)
.setColor('RANDOM')
.setDescription(`**Müzik komutları**`)
.addField('**   **  :point_down:',`
**■ |*play <şarkıadı>**: Belirttiğiniz şarkıyı sesli odada söyler. 
**■ |*stop**: Çalan şarkıyı durdurur. 
**■ |*start**: Durdurduğunuz şarkıyı devam ettirir.
**■ |*replay**: Çalan şarkıyı tekrarlar. 
**■ |*skip - s**: Bir sonraki şarkıya geçiş yapar.
**■ |*finsh**: Şarkıyı durdurur.  
**■ |*voice**: Ses seviyesini belirler.`)
.setFooter(`Lexon`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setImage("https://images-ext-2.discordapp.net/external/Qn7QAexTkV01wqaswdakh2heT9EzIfwgbBgo4Zyqikk/https/media.discordapp.net/attachments/707630474096279593/707663477333819512/a1giphy_2.gif?width=400&height=200")

 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['muzik', 'şarkı', 'sarki'],   
  permLevel: 0
};
exports.help = {
  name: 'müzik'
};
  