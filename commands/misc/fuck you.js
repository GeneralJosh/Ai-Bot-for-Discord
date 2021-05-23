const commando = require('discord.js-commando');

module.exports = class FuckyouCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fuck-you',
            group: 'misc',
            memberName: 'fuck-you',
            description: 'not very nice there sir!',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('Fuck you!');
    }     
    finally {messages;
    }
}
}
