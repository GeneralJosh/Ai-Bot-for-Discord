const commando = require('discord.js-commando');

module.exports = class WeeeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'weee',
            group: 'misc',
            memberName: 'weee',
            description: 'weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://cdn.discordapp.com/attachments/801432206961541141/809925744490446878/image0-66.png');
    }     
    finally {messages;
    }
}
}