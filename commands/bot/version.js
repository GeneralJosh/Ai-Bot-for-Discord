const commando = require('discord.js-commando');

module.exports = class VersionCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'version',
            group: 'bot',
            memberName: 'version',
            description: 'displays the bot version',
            });
        }

        async run(msg) {
            const messages = [];
            try {
                msg.channel.send('**Version 2.5!!!** \n**Speak but not to be spoken** ');
            }     
        finally {messages;
        }
    }
}