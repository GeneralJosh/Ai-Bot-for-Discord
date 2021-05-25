const commando = require('discord.js-commando');

module.exports = class StudyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shut-up',
            group: 'misc',
            memberName: 'shut-up',
            description: 'hush',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('Huh? What was that? Must be da wind!');
    }     
    finally {messages;
    }
}
}
