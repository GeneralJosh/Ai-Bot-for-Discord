const commando = require('discord.js-commando');

module.exports = class UpvoteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'upvote',
            group: 'bot',
            memberName: 'upvote',
            description: 'upvote link',
            });
        }

        async run(msg) {
            const messages = [];
            try {
                msg.channel.send("**How about, ya'll give us a lil upvote here** \nhttps://top.gg/bot/801367525832130580/vote \nhttps://discordbotlist.com/bots/ai-9535/upvote");
    }     
    finally {messages;
    }
        }
    }