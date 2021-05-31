const commando = require('discord.js-commando');
const MessageEmbed = require('discord.js');
const Discord = require('discord.js');

module.exports = class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'help-cute',
            group: 'help',
            memberName: 'help-cute',
            description: 'Cute Commands',
        });
    }

    run(msg, args) {
        const { text } = args;
            const embed = new Discord.MessageEmbed().setColor("#e98bff");
                        embed
                            .setTitle("Cute Build")
                            .setDescription("List of all the cute.")
                            .addFields(
                                { name: '‎', value: '‎' },
                                { name: '**~weee**', value: 'Swingin' },
                                { name: '**~bok-bok**', value: 'bok bok song' },
                                { name: '**~chicken**', value: 'chikin!!!' },
                            )
                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  