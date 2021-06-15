const commando = require('discord.js-commando');

module.exports = class WizardCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mud-wizard',
            group: 'monkey',
            memberName: 'mud-wizard',
            description: 'truely the chosen one',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://cdn.discordapp.com/attachments/801432206961541141/810538325483585586/mud_wizard.jpg');
    }     
    finally {messages;
    }
}
}