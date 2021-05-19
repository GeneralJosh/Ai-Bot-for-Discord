module.exports = {
    name: 'invite',
    description: "invite link for bot",
    execute(message, args){
        message.channel.send("**Join our Discord to recive updates** \nhttps://discord.gg/ZmRr4RAwQb");
    }
}