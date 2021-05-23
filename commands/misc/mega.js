const commando = require('discord.js-commando');

module.exports = class MegaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mega',
            group: 'misc',
            memberName: 'mega',
            description: 'robo bitch',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('Mega Faggot \nhttps://youtu.be/T6vfLwcvDBE ');
    }     
    finally {messages;
    }
}
}
