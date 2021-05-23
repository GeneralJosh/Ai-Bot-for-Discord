const commando = require('discord.js-commando');

module.exports = class HiCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hi',
            group: 'misc',
            memberName: 'hi',
            description: 'greeting',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.reply('Sup!')
    }     
    finally {messages;
    }
}
}
