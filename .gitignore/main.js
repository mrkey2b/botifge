const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!radioIFGE");
var ramdom = 0;

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: 'https://radio-ifge.fr/'}})
    //bot.user.setAFK({afk: ''})   ->|set.Presence AFK|<-
    console.log("Bot Ready !")

});

bot.login('KLO7eQSRnqejDGZf8z6_M8KJtNMSV6OF');

bot.on('message', message => {
    if (message.content === "ntest"){
        message.reply("ntest");
}
});

bot.on("message", async message => { 

    if(message.author.bot) return; // Ignore bots
    
    if(message.channel.type === 'dm') { // Direct Message
        return;
    } 

    console.log(message.content)
     {message.channel.send(`${message.content}`);
}; // Log chat to console
})
