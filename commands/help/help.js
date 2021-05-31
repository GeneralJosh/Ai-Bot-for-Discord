const commando = require('discord.js-commando');
const MessageEmbed = require('discord.js');
const Discord = require('discord.js');

module.exports = class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'help',
            memberName: 'help',
            description: 'help command',
        });
    }

    run(msg, args) {
        const { text } = args;
            const embed = new Discord.MessageEmbed().setColor("#6f3283");
                        embed
                        .setTitle('Bot Stuff')
                            .setDescription("List of all the bot commands.")
                            .addFields(
                                { name: '‎', value: '‎' },
                                { name: '**Pages**', value: 'Use any command bellow to bring up a page' },
                                { name: '**~help-bot**', value: 'All the bot related commands such ad "~ping"' },
                                { name: '**~help-fun**', value: 'A list of all the fun commands' },
                                { name: '**~help-cute**', value: 'Just every cute command' },
                                { name: '**~help-meme**', value: 'All the meme commands' },
                                { name: '**~help-monkey**', value: 'Every monkey command' },
                            )
                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  