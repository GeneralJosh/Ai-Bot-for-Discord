const commando = require('discord.js-commando');

module.exports = class MusicCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'music',
            group: 'monkey',
            memberName: 'music',
            description: 'dancer',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://media.discordapp.net/attachments/429407194228981771/795599118264696862/ezgif.com-gif-maker.gif');
    }     
    finally {messages;
    }
}
}