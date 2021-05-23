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
                msg.channel.send("**Ai:** 2.0 \n```\n+ **Added** Discord Commando handelling with major upgrades to the bots handelling of commands \n+ **Updated** Entire bot, thanks to the people who helped me when commando went oop \n```");
    }     
    finally {messages;
    }
}
}