const commando = require('discord.js-commando');

module.exports = class RouletteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roulette',
            group: 'misc',
            memberName: 'roulette',
            description: 'Russian Roulette',
            cooldown: 5,
        })
    }

    async run(msg, args) {
        const messages = [];
        let shot = Math.floor(Math.random()*6) + 1;
        shot === 1 ? msg.reply("**BANG!** Sorry bro!") : msg.channel.send("*Miss!*") 

    }
};