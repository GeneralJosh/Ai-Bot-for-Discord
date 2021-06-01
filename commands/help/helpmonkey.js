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

                            .setThumbnail("https://imgur.com/gallery/keggGDk")

                            .setDescription("List of all the monkey commands.")
                            
                            .addFields({ name: '**~dance**', value: 'Monkey Dance' })
                            .addFields({ name: '**~spin**', value: 'Monkey Spin' })
                            .addFields({ name: '**~banana**', value: 'Banana revenge' })
                            .addFields({ name: '**~music**', value: 'Musica dramatica' })
                            .addFields({ name: '**~pass-it-down**', value: 'Passes banana down' })
                            .addFields({ name: '**~aight**', value: 'Monkey gets the f out' })
                            .addFields({ name: '**~ohai**', value: 'Have rock' })
                            .addFields({ name: '**~mud-wizard**', value: 'Mud wizard (do not tempt him)' })
                            
                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  