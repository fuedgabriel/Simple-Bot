const Discord = require('discord.js');
const bot = new Discord.Client();


const config = require('./config.json');
const links = require('./links.json');
const sounds = require('./sounds/sounds.json');


bot.login(config.token);

bot.on('ready', () => {
    bot.user.setActivity('Google meet')
    console.log('Logado');
});

bot.on('message', async message => {
    if (message.content === 'cavalo') {
        message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(sounds.cavalo);
                dispatcher.on('end', () => { message.member.voiceChannel.leave(); });
            });
    }
	if (message.content === 'roblox') {
        message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(sounds.roblox);
                dispatcher.on('end', () => { message.member.voiceChannel.leave(); });
            });
    }
	if (message.content === 'corona virus') {
        message.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(sounds.corona);
                dispatcher.on('end', () => { message.member.voiceChannel.leave(); });
            });
    }
    if (message.content === 'a') {
        message.member.voice.channel.join()
            .then(connection => {
                connection.play(document.micStream())

            });
    }

    // if (message.author.bot) return;
    // if (message.content.indexOf(config.prefix) !== 0) return;

    responseObject = links;
    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
    }
    if (message.content === '!!ping') {
        const ms = await message.channel.send('Ping?');
        const clientMs = ms.createdTimestamp = message.createdTimestamp;
        ms.edit('Pong! Client ' + Math.round(clientMs) + 'ms / Bot+Server ' + Math.round(bot).toString() + 'ms')
    }


})