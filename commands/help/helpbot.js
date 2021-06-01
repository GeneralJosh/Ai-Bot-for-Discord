const commando = require('discord.js-commando');
const MessageEmbed = require('discord.js');
const Discord = require('discord.js');


module.exports = class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'help-bot',
            group: 'help',
            memberName: 'help-bot',
            description: 'Bot Commands',
        });
    }

    run(msg, args) {
        const { text } = args;
            const embed = new Discord.MessageEmbed().setColor("#970045");
                        embed
                        .setTitle("Bot Commands")

                        .setThumbnail("https://imgur.com/gallery/keggGDk")

                            .setDescription("List of all the bot commands.")

                            .addFields({ name: '**~help**', value: 'Help command (The one you just used)' })
                            .addFields({ name: '**~ping**', value: 'Displays the bots ping in ms' })
                            .addFields({ name: '**~version**', value: 'Version and release title' })
                            .addFields({ name: '**~uptime**', value: 'Shows how long the bots been up for' })
                            .addFields({ name: '**~update**', value: 'Update notes' })
                            .addFields({ name: '**~invite**', value: 'Invite link' })
                            .addFields({ name: '**~discord**', value: 'Ai bots Discord server invite' })
                            .addFields({ name: '**~source**', value: 'Github source code' })
                            .addFields({ name: '**~prefix**', value: 'Changes the prefix for your server' })
                            .addFields({ name: '**~enable**', value: 'Enables grouped commands' })
                            .addFields({ name: '**~disable**', value: 'Disables grouped commands' })
                            .addFields({ name: '**~embed**', value: 'For embedding messages' })

                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  