const commando = require('discord.js-commando');

module.exports = class WhoreCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'whore',
            group: 'misc',
            memberName: 'whore',
            description: 'yea',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send(':heart_eyes:');
    }     
    finally {messages;
    }
}
}