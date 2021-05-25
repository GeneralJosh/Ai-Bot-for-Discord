const commando = require('discord.js-commando');

module.exports = class UpdateCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'update',
            group: 'bot',
            memberName: 'update',
            description: 'Update logs',
            });
        }

        async run(msg) {
            const messages = [];
            try {
                msg.channel.send("**Ai:** 2.00.1 \n```\n+ **Fixed** a bunch of commands being named incorrectly and ~uptime not counting days (i hope) \n```");
    }     
    finally {messages;
    }
}
}