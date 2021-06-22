const commando = require('discord.js-commando')
const _ = require('lodash')

 class DiceRollCommand extends commando.Command {

    constructor(bot) {
        super(bot, {
            name: 'roll',
            group: 'misc',
            memberName: 'roll',
            description: 'Rolls a dice.'
        })
    }

    async run(message, args) {
        let roll = args.split(' ')
        let hasNumber = /^[0-9]+$/
        let BasicRoll = + _.random(1, 20)
        let MediRoll = + _.random(1, roll[0])
        let CompRoll = + _.random(roll[0], roll[1])

        if (roll[0] || roll[1]) {
            if (!hasNumber.test(roll[0]) && !hasNumber.test(roll[1])) {
                message.reply('[DEBUG] Syntax Error input must be a number')
                return
            }
        }
        if (roll.length >= 100) {
            message.reply('[DEBUG] Syntax Error cannot use more than 100 parameters')
            return

        }
       if (message.content.match(/^~roll+$/)) {
           message.reply(`rolled  **${BasicRoll}**`)
       }
       if (message.content.match(/^~roll [0-9]+\b/)) {
           message.reply(`rolled  **${MediRoll}**`)
       }
       if (message.content.match(/^~roll ([0-9]*) ([0-9]*)+\b/)) {
           message.reply(`rolled  **${CompRoll}**`)
       }

    }

}

module.exports = DiceRollCommand