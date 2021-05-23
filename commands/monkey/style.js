const commando = require('discord.js-commando');

module.exports = class DanceCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dance',
            group: 'monkey',
            memberName: 'dance',
            description: 'monkey got style',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://tenor.com/bg3eH.gif');
    }     
    finally {messages;
    }
}
}