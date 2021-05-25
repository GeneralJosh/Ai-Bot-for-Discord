const commando = require('discord.js-commando');

module.exports = class MegaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'robo-bitch',
            group: 'misc',
            memberName: 'robo-bitch',
            description: 'mega',
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
