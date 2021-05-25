const commando = require('discord.js-commando');

module.exports = class CheeseCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cheese-man',
            group: 'misc',
            memberName: 'cheese-man',
            description: 'Cheese man',
            });
        }

        async run(msg) {
            const messages = [];
            try {
              msg.channel.send('https://cdn.discordapp.com/attachments/801432206961541141/804363032054333480/cheese_man.gif');
            }     
            finally {messages;
            }
        }
    }