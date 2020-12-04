const { Collection, Client, MessageEmbed, Message } = require('discord.js');

class Bot extends Client {
    constructor() {
        super();
        this.commands = new Collection();
        this.discord = require('discord.js');
        this.ms = require('ms');
        this.ayar = require('../config.json');
        this.path = require('path')
        this.moment = require('moment')
        this.fs = require('fs');
        this.salvage = require('salvage-music');
        this.music = new this.salvage(this, [
            {
                host: `localhost`,
                auth: `youshallnotpass`,
                port: 2333,
                name: `Node1`
            }
        ], {
        destroy: () => ``,
        newSong: (song) => new MessageEmbed().setColor("RANDOM").setDescription(`**Şimdi Oynatılıyor:** \n [${song.title}](${song.uri})\n**Süre** ${moment(song.length)}`)

        });
       
    };
    commandHandler(path) {
        this.fs.readdirSync(this.path.normalize(path)).map((f) => {
            const File = require(this.path.join(__dirname, `..`, path, f));
            console.log('Yüklenen Komut : ' + File.name + '')
            this.commands.set(File.name, File);
        });

    };
    getCommand(cmd) {
        return this.commands.has(cmd) ? this.commands.get(cmd) : false;
    };
    start(token,path) {
        this.commandHandler(path);
        this.login(token)
        this.on('ready', () => {
            console.log("Ben hazırım ve Giriş yaptım");
        });
        this.prefix = this.ayar.Prefix;
        this.on('message', async(message) => {
            if(message.author.bot || !message.guild || message.content.toLowerCase().startsWith(this.prefix)){
            const [cmd, ...args] = message.content.slice(this.prefix.length).trim().split(/ +/g);
            const command = this.getCommand(cmd.toLowerCase())
            if(command) {
            command.run(this, message, args).catch(console.error);
            }
            };
        });
    };
    /**
     * 
     * @param {MessageEmbed} data 
     * @param {Message} message 
     */
    embed(data, message) {
    return new MessageEmbed({ ...data, color: `RANDOM`}).setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true, format: `png`}));
    };
};
module.exports = Bot;
