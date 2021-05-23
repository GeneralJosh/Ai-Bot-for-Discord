const commando = require('discord.js-commando');

module.exports = class BegoneCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'aight',
            group: 'monkey',
            memberName: 'aight',
            description: 'monk',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://tenor.com/bja6I.gif');
    }     
    finally {messages;
    }
}
}