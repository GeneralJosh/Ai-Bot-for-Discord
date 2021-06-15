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
                            .setThumbnail("https://imgur.com/gallery/keggGDk")
                            .setDescription("List of all the fun commands.")

                            .addFields({ name: '**bitch**', value: 'Sends an worred emote' })
                            .addFields({ name: '**fuck you**', value: 'Dislikes you ' })
                            .addFields({ name: '**shut up**', value: 'Owns you' })
                            .addFields({ name: '**whore**', value: 'Sends a heart eyes emote' })
                            .addFields({ name: '**~execute**', value: 'Pretends to ban users' })
                            .addFields({ name: '**~roll**', value: 'Rolls a dice from 1-20 or desided number given' })
                            .addFields({ name: '**~best-song**', value: 'Sends a YouTube link of a song I like (Subject to change)' })
                            .addFields({ name: '**~duck-duck**', value: 'Pings a random user in the server and says "Goose!"' })
                            .addFields({ name: '**~hi**', value: 'Replies with "Sup!"' })
                            .addFields({ name: '**~begone**', value: 'Begone thot spray image' })
                            .addFields({ name: '**~golf**', value: 'An emote game of golf' })
                            .addFields({ name: '**~yes**', value: 'Annoying small text wall saying no' })
                            .addFields({ name: '**~prove-it**', value: 'Prove me wrong boi' })
                            .addFields({ name: '**~flip**', value: 'Flips a coin' })
                            .addFields({ name: '**~say**', value: 'Speaks for you basically' })
                            .addFields({ name: '**~roulette**', value: 'Russian Roulette' })
                            .addFields({ name: '**~nya**', value: 'It Will Never Leave Your Head' })
                    
                            .setFooter("Go to ~help for info");
                            msg.author.send(embed);
            }
        }  
