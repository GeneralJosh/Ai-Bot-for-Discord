const commando = require('discord.js-commando');

module.exports = class FlipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'misc',
            memberName: 'flip',
            description: 'flips a coin'
        })
    }

    async run(msg, args) {
        const messages = [];
        let coinflip = Math.floor(Math.random()*2) + 1;
        coinflip === 1 ? msg.reply("**Heads!**") : msg.reply("**Tails!**")
    }
};