const Discord = require('discord.js');

const botsettings = require('./botsettings.json');

const client = new Discord.Client();

const prefix = '~';

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){

    var command;

    try {
        command = require(`./commands/${file}`)(client);
    } catch(e) {
        command = require(`./commands/${file}`);
    }

    client.commands.set(command.name, command);
}

//Startup Function (Change type: STREAMING, LISTENING, COMPETING, CUSTOM_STATUS, PLAYING, WATCHING) 
// edit -> (client.user.setActivity("Halo 3: The Ark",) to get It's Status

client.on('ready', () =>{
        console.log('Ai-Chan is Online');
        client.user.setActivity("Mass Effect™ Legendary Edition", {
            type: "STREAMING",
            url: "https://www.twitch.tv/general_josh"
        });
    });

//Commands 

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //Normal commands bellow
    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }   else if (command == 'update'){
            client.commands.get('update').execute(message, args); 
    }   else if (command == 'help'){
            client.commands.get('commands').execute(message, args);
    }   else if (command == 'version'){
            client.commands.get('version').execute(message, args);
    }   else if (command == 'invite'){
            client.commands.get('invite').execute(message, args);
    }   else if (command == 'uptime'){
            client.commands.get('uptime').execute(message, args);
    }   else if (command == 'discord'){
            client.commands.get('discord').execute(message, args);   

    //Fun Reaction Commands

    }   else if (command == 'ban'){
            client.commands.get('banned').execute(message, args);    
    }   else if (command == 'roll'){
            client.commands.get('roll').execute(message, args);
    }   else if (command == 'duck-duck'){
            client.commands.get('duck').execute(message, args);
    }   else if (command == 'hi'){
            client.commands.get('greeting').execute(message, args); 
    }   else if (command == 'whore'){
            client.commands.get('whore').execute(message, args);
    }   else if (command == 'bitch'){
            client.commands.get('bitch').execute(message, args);
    }   else if (command == 'fuck'){
            client.commands.get('fuck you').execute(message, args);
    }   else if (command == 'shut-up'){
            client.commands.get('shut up').execute(message, args);
    }   else if (command == 'best-song'){
            client.commands.get('song').execute(message, args);
    }   else if (command == 'yes'){
            client.commands.get('yes').execute(message, args);
    }   else if (command == 'prove-it'){
            client.commands.get('prove').execute(message, args);
    }   else if (command == 'golf'){
            client.commands.get('golf').execute(message, args); 

    //Monkey Build Commands

    }   else if (command == 'ohai'){
            client.commands.get('ohai').execute(message, args);
    }   else if (command == 'dance'){
            client.commands.get('style').execute(message, args);
    }   else if (command == 'spin'){
            client.commands.get('spin').execute(message, args);
    }   else if (command == 'banana'){
            client.commands.get('banana').execute(message, args);
    }   else if (command == 'music'){
            client.commands.get('music').execute(message, args);
    }   else if (command == 'pass-it-down'){
            client.commands.get('pass').execute(message, args);
    }   else if (command == 'come'){
            client.commands.get('come').execute(message, args);
    }   else if (command == 'aight'){
            client.commands.get('aight').execute(message, args);
    }   else if (command == 'mud-wizard'){
            client.commands.get('wizard').execute(message, args);

    //Ayyyeye Build Commands  

    }   else if (command == 'weee'){
            client.commands.get('weee').execute(message, args);        
    }   else if (command == 'bok-bok'){
            client.commands.get('chikin').execute(message, args);
    }   else if (command == 'chicken'){
            client.commands.get('chicken').execute(message, args);

    //Meme Commands

    }   else if (command == 'chocolate'){
            client.commands.get('fish').execute(message, args);
    }   else if (command == 'robo-bitch'){
            client.commands.get('mega').execute(message, args);                       
    }   else if (command == 'gift'){
            client.commands.get('gift').execute(message, args);        
    }   else if (command == 'begone'){
            client.commands.get('begone').execute(message, args);                    
    }   else if (command == 'chair'){
            client.commands.get('chair').execute(message, args);        
    }   else if (command == 'holy'){
            client.commands.get('holy').execute(message, args);        
    }   else if (command == 's'){
            client.commands.get('smeme').execute(message, args);        
    }   else if (command == 'lets-race'){
            client.commands.get('race').execute(message, args);                       
    }   else if (command == 'cheese-man'){
            client.commands.get('cheese').execute(message, args);        
    }   else if (command == 'italia'){
            client.commands.get('italia').execute(message, args);
    }   else if (command == 'spooked'){
            client.commands.get('spook').execute(message, args);
    }   else if (command == 'hot-sauce'){
            client.commands.get('sauce').execute(message, args);
    }   else if (command == 'studying'){
            client.commands.get('study').execute(message, args);
               
}            
    
});



        
   
      
client.login(botsettings.token);
