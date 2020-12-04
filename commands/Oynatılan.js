const Client = require('../structures/Client');
const { Message, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: `np`,
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
    run: async(client, message, args) => {
        if(!message.member.voice.channel)return message.channel.send("Lütfen bir kanala katılınız")
        if(!client.music.getQueue(message))return message.channel.send("Herhangi Bir şarkı çalmıyor")
        let np = client.music.getQueue(message).nowPlaying
        let emb = new MessageEmbed()
        .setTitle("Şuan Oynatılan Şarkı")
        .setColor("RANDOM")
        .setDescription(`**• İsmi:** [${np.title}](${np.uri})
        **• Kanal:** \`${np.author}\`
        **• Süre:** \`${ms(np.length)}\``)
        .setThumbnail(`https://img.youtube.com/vi/${np.identifier}/hqdefault.jpg`)
        message.channel.send(emb)
    }
}
