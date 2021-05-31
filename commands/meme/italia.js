const commando = require('discord.js-commando');

module.exports = class ItaliaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'italia',
            group: 'meme',
            memberName: 'italia',
            description: 'italian navy',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://cdn.discordapp.com/attachments/801432206961541141/804363411727056960/Italian_navy.png');
    }     
    finally {messages;
    }
}
}