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
                msg.channel.send("**Ai:** 2.5 \n```\n+ **Added** ~roulette and ~nya *ichi ni san!*\n+ **Updated** Help command embed to not look clunky. \n+Fuck you, bitch, shut up and whore now work without a prefix \n+ **Fixed** ~chicken now has a timer on it too\n```");
    }     
    finally {messages;
    }
}
}