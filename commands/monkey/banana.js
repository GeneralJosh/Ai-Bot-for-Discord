const commando = require('discord.js-commando');

module.exports = class BegoneCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'banana',
            group: 'monkey',
            memberName: 'banana',
            description: 'ooo monkey banana',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://cdn.discordapp.com/attachments/801432206961541141/810540357976326173/video0-140_1.mp4');
    }     
    finally {messages;
    }
}
}