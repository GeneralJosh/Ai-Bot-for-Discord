const commando = require('discord.js-commando');

module.exports = class StudyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'best-song',
            group: 'misc',
            memberName: 'best-song',
            description: 'best song for the mood',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('Here bitch! \nhttps://www.youtube.com/watch?v=HIcffq03sbU&list=RDMM&index=1');
    }     
    finally {messages;
    }
}
}
