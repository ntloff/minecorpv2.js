function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function getRandom(length) {

  return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
  
  }
//
const fs = require('fs')
const mineflayer = require('mineflayer');
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {  console.log(`Logged in as ${client.user.tag}!`); });
//
const bot = mineflayer.createBot({
  host: "minecorp.ru",
  port: "25565",
  username: "ауе",
  version: "1.8"
})
bot.once('login', () => {
  console.log("Ingame bot online!")
  bot.chat("/l крафт")
})
bot.on('message', message => {
  if(message == "Вы уже авторизированы!") return;
    else if (message == "Заходи на наш форум! http://forum.minecorp.ru/") return;
    else if (message == "Вы успешно вошли!") return;
    else if (message == "Вы являетесь владельцем 6 аккаунтов:") return;
    else if (message == "//set, /fireball, 10 участков. VIP за 79 руб. навсегда! Жми на /donate") return;
    else if (message == "Надоел креатив? Хочется выживания? Жми на /server classic") return;
    else if (message == "Заходи на наш форум! http://forum.minecorp.ru/") return;
    else if (message == "╭──────╢ Помогите нам стать лучше!\n│ Хочешь ли ты обнуление звезд всех игроков?\n│ \n│   1. Да\n│ \n│   2. Мне все равно\n│ \n│   3. Нет\n│ \n│ КЛИКНИТЕ на выбранный вариант\n╰──────╢ 6 алмазов за ответ") return;
    else if (message == "Девушка? Хочешь розовый ник? Жми на /igirl") return;
    else if (message == "Поддержи сервер, вступи в группу! Жми на http://vk.com/minecorp_server") return;
    else if (message == "Чтобы оставить кликабельную ссылку в чате на вашу текущую позицию, пиши [tp]. Например: Все ко мне! [tp]") return;
    else if (message == "Чтобы сделать кликабельной команду в чате, используй квадратные скобки, например: Все ко мне на рп! [/w steve myrp]") return;
    else if (message == "Огромная коллекция голов! /hdb") return;
    else if (message == "Установи себе любой скин! /skin <ник>") return;
    else if (message == "WorldEdit, /vanish, тп к игрокам.. Ultimate 399 руб. навсегда. Жми на /donate") return;
    else if (message == "//copy, //paste, 30 участков, питомцы, превращения.. Deluxe 249 руб. навсегда. Жми на /donate") return;
    else if (message == "Заходи к нам в дискорд! http://minecorp.ru/dis") return;
    else if (message == "MineCorp *любит рп* А ты? Пиши /rp <статус>") return;
    else if (message == "Забыл команды? Жми на /cmd") return;
    else if (message == "Участки можно соединить с помощью команды /merge") return;
    else if (message == "Петоблоки! Заведи себе питомца! /petblock") return;
    else if (message == "Накопил звёзды? Жми на /shop") return;
    else if (message == "Покупка и продажа участков! Жми на /sellbuy") return;
    else if (message == "Скучно? Телепортируйся к незнакомцу из чата: Ищу друга! [call]") return;
    else if (message == "Большие участки! Жми на /big") return;
    else if (message == "Сессия открыта") return;
    else if (message == "Для принятия запроса введите /tpaccept.") return;
    else if (message == "просит телепортироваться к Вам.") return;
    else if (message == "Для отказа от запроса введите /tpdeny.") return;
    else if (message == "Заявка будет автоматически отменена через 120 секунд.") return;
    else if (message == "Please slow down chat, you might get kicked for spam.") return;
    else if (message == "[Plot] Вы были телепортированы") return;
    else{
  let time = new Date();
  let displaytime = time.toLocaleTimeString();
  console.log(message.toAnsi())
  let channel = client.channels.cache.find(channel => channel.name === 'чат')
  if(!channel) return
  channel.send(`${message}`)
  let channel1 = client.channels.cache.find(channel => channel.name === 'канал с логами')
  if(!channel1) return
  let today = new Date().toISOString().slice(0, 10)
  channel1.send(`[${today}] [${displaytime}] ${message}`)
  fs.appendFile('d:\\a\\logs.txt', `[${today}] [${displaytime}] `+message.toString()+"\n", err => {
    if (err) {
      console.error(err)
      return
    }
  })
}})
prefix = ""
client.on("message", msg => {
  let args = msg.content.split(" ").slice(1)
  args = msg.content.slice(prefix.length).split(/ +/);
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  command = args.shift().toLowerCase();
  let aauthorid = "516226879234113536"
  if (command.startsWith("!")){
      if (msg.author.id == aauthorid){
        const chat = args.join(" ")
        bot.chat(`![Ⓓ]ⓄTLTengine > ${chat}`)
      }else{
        let authorid4 = "792731377681956874"
        let random7 = getRandom(2)
        if (msg.author.id == authorid4){
          const chat = args.join(" ")
          bot.chat(`!<${random7}> [Ⓓ] ⓄTheLoga♥ ➠ ${chat}`)
      }else{
        let authorid11 = "786940642857058335"
        let random10 = getRandom(2)
        if (msg.author.id == authorid11){
          const chat = args.join(" ")
          bot.chat(`!<${random10}> [Ⓓ] ⓄTheLoga♥ ➠ ${chat}`)
      }else{
      let channel1 = client.channels.cache.find(channel1 => channel1.name === `канал с чатом`)
      if (!channel1) return;
        const chat = args.join(" ")
        bot.chat(`![Ⓓ] ${msg.author.tag} -> ${chat}`)}}}}})

client.login("топ")