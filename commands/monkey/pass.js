const commando = require('discord.js-commando');

module.exports = class PassCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pass-it-down',
            group: 'monkey',
            memberName: 'pass-is-down',
            description: 'monkey banana pass',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://media.discordapp.net/attachments/296056831514509312/785195113508503562/image0-14-2.gif');
    }     
    finally {messages;
    }
}
}