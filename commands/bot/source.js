const commando = require('discord.js-commando');

module.exports = class SourceCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'source',
            group: 'bot',
            memberName: 'source',
            description: 'Source code',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send("**Github Source Code:** \nhttps://github.com/GeneralJosh/Ai-Bot-for-Discord");
    }     
    finally {messages;
    }
}
}