//Get discord.js and discord.js-commando
const Discord = require('discord.js');
//Create client instance as bot
const bot = new Discord.Client();

//Set listener on 'ready'
bot.on('ready', () => {
  console.log('Rem ready!');
});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === '/บอท') {
    message.reply('มีอะไรให้รับใช้เจ้าค่ะ');
  }
});

bot.on('message', message => {
  if (message.content === '/บอทกิน') {
    message.reply('เราเป็นบอท ไม่ต้องการของแบบนั้นหรอก');
  }
});


bot.login('Mjg5MjgwODMwODA1NjM5MTc4.C6LAcw.ipb78U4j9sHgo5EwB5IU1wT9Cng');
