const commando = require('discord.js-commando');

module.exports = class OhaiCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ohai',
            group: 'monkey',
            memberName: 'ohai',
            description: 'First command ever created',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://cdn.discordapp.com/attachments/801432206961541141/801453240184602635/habrok.png');
    }     
    finally {messages;
    }
}
}