const commando = require('discord.js-commando');

module.exports = class GiftCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'gift',
            group: 'meme',
            memberName: 'gift',
            description: 'a gift for the bros',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('Yo! Who wants one? \nhttps://cdn.discordapp.com/attachments/801432206961541141/802409627252949022/image0-35-1.png');
    }     
    finally {messages;
    }
}
}
