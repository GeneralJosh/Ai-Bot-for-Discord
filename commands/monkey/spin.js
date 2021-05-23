const commando = require('discord.js-commando');

module.exports = class SpinCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'spin',
            group: 'monkey',
            memberName: 'spin',
            description: 'weeeeeee',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://cdn.discordapp.com/attachments/801432206961541141/810540359557447750/spinning_gorilla.mp4');
    }     
    finally {messages;
    }
}
}