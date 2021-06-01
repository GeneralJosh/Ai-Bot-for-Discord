const commando = require('discord.js-commando');

module.exports = class BitchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bitch',
            group: 'misc',
            memberName: 'bitch',
            description: 'Is what it is',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send(':worried:');
    }     
    finally {messages;
    }
}
}

