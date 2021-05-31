const commando = require('discord.js-commando');

module.exports = class FuckCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fuck',
            group: 'misc',
            memberName: 'fuck',
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
