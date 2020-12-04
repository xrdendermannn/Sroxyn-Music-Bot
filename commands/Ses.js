const Client = require('../structures/Client');
const { Message } = require('discord.js');

module.exports = {
    name: `volume`,
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
    run: async(client, message, args) => {
        if(!message.member.voice.channel)return message.channel.send("Lütfen bir kanala katılınız")
        if(!client.music.getQueue(message))return message.channel.send("Herhangi Bir şarkı çalmıyor")
        if(args[0] > 100)return message.channel.send("Ses 100'den fazla olamaz")
        await client.music.setVolume(message, parseInt(args[0]))
        await message.react("🔊")
        await message.channel.send("Yeni ses :" + args[0])
    }
}
