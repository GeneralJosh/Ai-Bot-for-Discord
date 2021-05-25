const commando = require('discord.js-commando');

module.exports = class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'bot',
            memberName: 'help',
            description: 'Checks the bot\'s ping to the Discord server.',
            });
        }

        async run(msg) {
            const messages = [];
            try {
              msg.author.send('**Here ya go** \n```\n~ping \n~version \n~uptime \n~update \n~invite \n~discord \n~source \n``` \n **Fun Stuff** \n```\n~bitch \n~fuck \n~shut-up \n~execute \n~roll \n~best-song \n~whore \n~duck-duck \n~hi \n~begone \n~golf \n~yes \n~prove-it \n``` \n **Monkey** \n```\n~dance \n~spin \n~banana \n~music \n~pass-it-down \n~aight \n~ohai \n~mud-wizard \n``` \n **Cute Build** \n```\n~weee \n~bok-bok \n~chicken \n``` \n **Meme Commands** \n```\n~gift \n~chocolate \n~robo-bitch \n~holy \n~chair \n~s \n~lets-race \n~cheese-man \n~italia \n~spooked \n~hot-sauce\n~studying \n```');
            }     
        finally {messages;
        }
    }
}