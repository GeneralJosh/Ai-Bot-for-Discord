const commando = require('discord.js-commando');

module.exports = class ComeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'come',
            group: 'monkey',
            memberName: 'come',
            description: 'come to monkey land',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://tenor.com/bpUSn.gif');
    }     
    finally {messages;
    }
}
}