const commando = require('discord.js-commando');

module.exports = class YesCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'yes',
            group: 'misc',
            memberName: 'yes',
            description: 'say yes dammit',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('N\n　  O\n　　　 O\n　　　　 o\n　　　　　o\n　　　　　 o\n　　　　　o\n　　　　 。\n　　　 。\n　　　.\n　　　.\n　　　 .\n　　　　.\n');
    }     
    finally {messages;
    }
}
}