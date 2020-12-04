const Client = require('../structures/Client');
const { Message } = require('discord.js');

module.exports = {
    name: `ping`,
   /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
    run: async(client, message, args) => {
        await message.channel.send(`Abooo ${client.ws.ping}`)
    }
}

