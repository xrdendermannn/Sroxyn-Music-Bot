const Bot = require('./structures/Client');
const ayar = require('./config.json');
new Bot().start(ayar.Token, `./commands`);



