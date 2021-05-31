const commando = require('discord.js-commando');
const MessageEmbed = require('discord.js');
const Discord = require('discord.js');

module.exports = class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'help-meme',
            group: 'help',
            memberName: 'help-meme',
            description: 'Meme Commands',
        });
    }

    run(msg, args) {
        const { text } = args;
            const embed = new Discord.MessageEmbed().setColor("#92e3fc");
                        embed
                            .setTitle("Meme Commands")
                            .setDescription("List of all the meme commands.")
                            .addFields(
                                { name: '‎', value: '‎' },
                                { name: '**~gift**', value: 'A gift (subject to change)' },
                                { name: '**~chocolate**', value: 'French cuisine!' },
                                { name: '**~robo-bitch**', value: 'Ancient vine that I enjoyed' },
                                { name: '**~holy**', value: 'Holy cow!' },
                                { name: '**~chair**', value: 'Shrek but irl' },
                                { name: '**~s**', value: 'S' },
                                { name: '**~lets-race**', value: 'Racing related video or meme (subject to change)' },
                                { name: '**~cheese-man**', value: 'Cheese man!' },
                                { name: '**~italia**', value: 'An italian meme (subject to change)' },
                                { name: '**~spooked**', value: 'Spooky indeed' },
                                { name: '**~hot-sauce**', value: 'Hot sauce' },
                                { name: '**~studying**', value: 'For people who should be studyinh' },
                            )
                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  