const db = require('quick.db')
const Discord = require('discord.js');
const client = new Discord.Client();

const radyo = {
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio ",
    fenomenfm : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
    kralpop : "https://www.kralmuzik.com.tr/radyo/kral-pop ",
    vergın : "https://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIOAAC.aac?dist=onlineradiobox ",

}

exports.run = function(bot, message, args) {

  message.delete(10000).catch(console.error);
    if (!message.member.voiceChannel) return message.reply("**:bangbang: Sana bağlanmam için ilk önce sesli bir kanala katılmalısın. :bangbang:** Youtube Tegmen Vevo").then(m => m.delete(15000)).catch(console.error);
    else {
        if (!args[0] || args[0] === "help" || args[0] === "yardım") {
            message.reply("**\n \n  ?? Radyo İstasyonları ??  \n Youtube Tegmen Vevo \n \n 1 = Fenomen \n 2 = FenomenTürk \n 3 = KralPop \n 4 = Virgin Radio\n \n Açmak İçin *radyo <numara> \n Kapatmak İçin *radyo kapat**").then(m => m.delete(40000)).catch(console.error);
        } else if (args[0].toLowerCase() === "fenomen" || args[0] === "1") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomen);
                message.reply("?? | **Başarılı! ??`FenomenFM`?? çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
    
            } else if (args[0].toLowerCase() === "FENOMEN TURK" || args[0] === "2") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.fenomenfm);
                message.reply("?? | **Başarılı! `FenomenTÜRK` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })                                                                                    
        } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                message.member.voiceChannel.leave();
    return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voiceChannel}.`);
        
            } else if (args[0].toLowerCase() === "KralPop" || args[0] === "3") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.kralpop);
                message.reply("?? | **Başarılı! `KralPop` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })    
            } else if (args[0].toLowerCase() === "Virgin Radio" || args[0] === "4") {
            message.member.voiceChannel.join().then(connection => {
                var dispatcher = connection.playStream(radyo.vergın);
                message.reply("?? | **Başarılı! `Virgin Radio` çalınıyor.** `Radyo 2 Saniye Sonra Açılıyor`").then(m => m.delete(10000)).catch(console.error);
            })   
        }
    }
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'radyo',
  description: '',
  usage: 'radyo'
};