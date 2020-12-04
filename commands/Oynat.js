const Client = require('../structures/Client');
const { Message } = require('discord.js');

module.exports = {
    name: `p`,
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */

    run: async(client, message, args) => {
       if(!args[0])return message.channel.send("Lütfen Bir şarkı giriniz");
       if(!message.member.voice.channel)return message.channel.send("Lütfen bir kanala katılınız")
       const res = await client.music.searchAndPlay(client.music.shoukaku.getNode(), args.join(" "), `youtube`, message)
       await message.channel.send(res.isPlaylist ? `${res.playlistName} | ${res.tracks.length} Adlı playlist kuyruğa eklendi` : `📋 **\`${res.songInfo.title}\`** Adlı şarkı Kuyruğa eklendi`).then(x => x.delete({timeout: 3000}))
    }

}
