const commando = require('discord.js-commando');

module.exports = class MegaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'robo-bitch',
            group: 'meme',
            memberName: 'robo-bitch',
            description: 'mega',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('Mega F, Robo Bitch \nhttps://youtu.be/T6vfLwcvDBE ');
    }     
    finally {messages;
    }
}
}
