const Client = require('../structures/Client');
const { Message } = require('discord.js');

module.exports = {
    name: `resume`,
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
    run: async(client, message, args) => {
        if(!message.member.voice.channel)return message.channel.send("Lütfen bir kanala katılınız")
        if(!client.music.getQueue(message))return message.channel.send("Herhangi Bir şarkı çalmıyor")
        await client.music.resume(message)
        await message.react("▶️")
    }
}
