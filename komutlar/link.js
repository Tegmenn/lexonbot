//Tüm Hakları Saklıdır En Gelişmiş destek Sistemi vardır.
//Yapımcısı : Lexon Support Team
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const destek = new Discord.RichEmbed()
   .setColor(`RANDOM`)
   .setDescription(`Selam, botumuzu eklemek istersen [bana tıkla!](https://discord.com/oauth2/authorize?client_id=743217625634701373&scope=bot&permissions=8) \n \nDestek sunucumuza gelmek için [bana tıkla!](https://discord.gg/XhxQ9AH)`) 
  .setFooter(`Tüm Hakları Saklıdır.`, client.user.avatarURL)
  console.log("Bildiri: .destek komutu " + message.author.username , " kanalında kullanıldı.")
  return message.channel.sendEmbed(destek);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['link','support'],
    permLevel: 0
  };

  exports.help = {
    name: 'link',
    description: 'Botun Destek Linkini Gösterir.',
    usage: 'link'
  };
//Tüm Hakları Saklıdır En Gelişmiş destek Sistemi vardır.
//Yapımcısı : Lexon Support Team`