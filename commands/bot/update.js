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
                msg.channel.send("**Ai:** 2.1 \n```\n+ **Added** ~flip and ~say she can now speak for you \n+ **Updated** Help command now embeds with paged commands instead of a nice wall of every growing commands \n+ **Fixed** ~bok-bok and ~yes now had a timer on it for antispam \n```");
    }     
    finally {messages;
    }
}
}