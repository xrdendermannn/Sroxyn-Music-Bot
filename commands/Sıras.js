const Client = require('../structures/Client');
const { Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: `q`,
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
    run: async(client, message, args) => {
        if(!message.member.voice.channel)return message.channel.send("Lütfen bir kanala katılınız")
        if(!client.music.getQueue(message))return message.channel.send("Herhangi Bir şarkı çalmıyor")
        let np = client.music.getQueue(message).nowPlaying;
        const sıra = client.music.getQueue(message).queue;
        console.log(np)
        message.channel.send(`⬐ Şuanki Şarkı\n1) ${np.title}\n⬑ Şuanki Şarkı\n\n${sıra.slice(0, 10).map((song,i) => { return `${i+1}) ${song.info.title}`}).join("\n")}`.trim(),{code: "m"})
    }
}
