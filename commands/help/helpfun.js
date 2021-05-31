const commando = require('discord.js-commando');
const MessageEmbed = require('discord.js');
const Discord = require('discord.js');

module.exports = class HelpCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'help-fun',
            group: 'help',
            memberName: 'help-fun',
            description: 'Fun Commands',
        });
    }

    run(msg, args) {
        const { text } = args;
            const embed = new Discord.MessageEmbed().setColor("#5eec4c");
                        embed
                            .setTitle("Fun Stuff")
                            .setDescription("List of all the fun commands.")
                            .addFields(
                                { name: '‎', value: '‎' },
                                { name: '**~bitch**', value: 'Sends an worred emote' },
                                { name: '**~fuck**', value: 'Says "Fuck You!" back' },
                                { name: '**~shut-up**', value: 'Owns you' },
                                { name: '**~execute**', value: 'Pretends to ban users' },
                                { name: '**~roll**', value: 'Rolls a dice from 1-20 or desided number given' },
                                { name: '**~best-song**', value: 'Sends a YouTube link of a song I like (Subject to change)' },
                                { name: '**~whore**', value: 'Sends a heart eyes emote' },
                                { name: '**~duck-duck**', value: 'Pings a random user in the server and says "Goose!"' },
                                { name: '**~hi**', value: 'Replies with "Sup!"' },
                                { name: '**~begone**', value: 'Begone thot spray image' },
                                { name: '**~golf**', value: 'An emote game of golf' },
                                { name: '**~yes**', value: 'Annoying small text wall saying no' },
                                { name: '**~prove-it**', value: 'Prove me wrong boi' },
                                { name: '**~flip**', value: 'Flips a coin' },
                                { name: '**~say**', value: 'Speaks for you basically' },
                            )
                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  
