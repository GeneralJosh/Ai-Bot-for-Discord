const commando = require('discord.js-commando');
const MessageEmbed = require('discord.js');
const Discord = require('discord.js');

module.exports = class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'help-monkey',
            group: 'help',
            memberName: 'help-monkey',
            description: 'Monkey Commands',
        });
    }

    run(msg, args) {
        const { text } = args;
            const embed = new Discord.MessageEmbed().setColor("#ac4d39");
                        embed
                            .setTitle("Monkey")
                            .setDescription("List of all the monkey commands.")
                            .addFields(
                                { name: '**~dance**', value: 'Monkey Dance' },
                                { name: '**~spin**', value: 'Monkey Spin' },
                                { name: '**~banana**', value: 'Banana revenge' },
                                { name: '**~music**', value: 'Musica dramatica' },
                                { name: '**~pass-it-down**', value: 'Passes banana down' },
                                { name: '**~aight**', value: 'Monkey gets the f out' },
                                { name: '**~ohai**', value: 'Have rock' },
                                { name: '**~mud-wizard**', value: 'Mud wizard (do not tempt him)' },
                            )
                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  