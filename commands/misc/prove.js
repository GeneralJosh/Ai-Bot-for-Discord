const commando = require('discord.js-commando');

module.exports = class ProveCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'prove-it',
            group: 'misc',
            memberName: 'prove-it',
            description: 'Well...?',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('prove me wrong boii ᕕ( ͡° ͜ʖ ͡°)▄︻̷̿┻̿═━一');
    }     
    finally {messages;
    }
}
}
