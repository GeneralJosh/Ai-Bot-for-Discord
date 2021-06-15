const commando = require('discord.js-commando');

module.exports = class HolyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'holy',
            group: 'meme',
            memberName: 'holy',
            description: 'cow',
            });
        }

        async run(msg) {
            const messages = [];
            try {
              msg.channel.send(`Holy Cow! \nhttps://cdn.discordapp.com/attachments/801432206961541141/803865221261033522/20201227_164107.jpg`);
            }     
            finally {messages;
            }
        }
    }
