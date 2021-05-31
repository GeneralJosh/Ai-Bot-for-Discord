const commando = require('discord.js-commando');

module.exports = class FishCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'chocolate',
            group: 'meme',
            memberName: 'chocolate',
            description: 'Le Fishe au chocolat',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('Enjoy :kissing_heart: \nhttps://cdn.discordapp.com/attachments/801432206961541141/801525461062385794/video0_22_1.mp4');
    }     
    finally {messages;
    }
}
}
