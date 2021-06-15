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

                            .setThumbnail("https://imgur.com/gallery/keggGDk")

                            .setDescription("List of all the meme commands.")

                            .addFields({ name: '**~gift**', value: 'A gift (subject to change)' })
                            .addFields({ name: '**~chocolate**', value: 'French cuisine!' })
                            .addFields({ name: '**~robo-bitch**', value: 'Ancient vine that I enjoyed' })
                            .addFields({ name: '**~holy**', value: 'Holy cow!' })
                            .addFields({ name: '**~chair**', value: 'Shrek but irl' })
                            .addFields({ name: '**~s**', value: 'S' })
                            .addFields({ name: '**~lets-race**', value: 'Racing related video or meme (subject to change)' })
                            .addFields({ name: '**~cheese-man**', value: 'Cheese man!' })
                            .addFields({ name: '**~italia**', value: 'An italian meme (subject to change)' })
                            .addFields({ name: '**~spooked**', value: 'Spooky indeed' })
                            .addFields({ name: '**~hot-sauce**', value: 'Hot sauce' })
                            .addFields({ name: '**~studying**', value: 'For people who should be studyinh' })
                            
                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  