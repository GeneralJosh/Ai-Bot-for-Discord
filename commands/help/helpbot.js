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
                        .setTitle('Bot Stuff')
                            .setDescription("List of all the bot commands.")
                            .addFields(
                                { name: '‎', value: '‎' },
                                { name: '**~help**', value: 'Help command (The one you just used)' },
                                { name: '**~ping**', value: 'Displays the bots ping in ms' },
                                { name: '**~version**', value: 'Version and release title' },
                                { name: '**~uptime**', value: 'Shows how long the bots been up for' },
                                { name: '**~update**', value: 'Update notes' },
                                { name: '**~invite**', value: 'Invite link' },
                                { name: '**~discord**', value: 'Ai bots Discord server invite' },
                                { name: '**~source**', value: 'Github source code' },
                                { name: '**~prefix**', value: 'Changes the prefix for your server' },
                                { name: '**~enable**', value: 'Enables grouped commands' },
                                { name: '**~disable**', value: 'Disables grouped commands' },
                            )
                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  