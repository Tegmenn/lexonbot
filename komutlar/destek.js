//Tüm Hakları Saklıdır En Gelişmiş destek Sistemi vardır.
//Yapımcısı : Klob Support Team
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const destek = new Discord.RichEmbed()
   .setColor(`RANDOM`)
   .setDescription(`Selam, discord sunucumuza gelmek için [bana tıkla!](https://discord.gg/W57ZxVh)`) 
  .setFooter(`Tüm Hakları Saklıdır.`, client.user.avatarURL)
  return message.channel.sendEmbed(destek);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['destek','support'],
    permLevel: 0
  };

  exports.help = {
    name: 'sunucu',
    description: 'Botun Destek Linkini Gösterir.',
    usage: 'sunucu'
  };
//Tüm Hakları Saklıdır En Gelişmiş destek Sistemi vardır.
//Yapımcısı : Lexon Support Team