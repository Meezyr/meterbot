const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Le Bot à démarré ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === "salut") {
    msg.reply("Salut, sa va la famille et tout ?");
  }
});

client.on('message', msg => {
	if (msg.content === "slt") {
    msg.reply("Salut, sa va la famille et tout ?");
  }
});

client.on('message', msg => {
  if (msg.content === 'salut tout le monde') {
    msg.reply('Yo ma gueule !');
  }
});

client.on('message', msg => {
  if (msg.content === 'wesh') {
    msg.reply('Sa va mon pote ?');
  }
});

client.on('message', msg => {
  if (msg.content === '.aide') {
    msg.channel.send('Tu trouveras une aide ici : https://meter-craft.000webhostapp.com/aide.html');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'help') {
    msg.reply('Mauvaise commande essaie la commande "aide"');
  }
});

client.on('message', msg => {
  if (msg.content === '.help') {
    msg.reply('Mauvaise commande essaie la commande "aide"');
  }
});

//GROS MOTS//
client.on('message', msg => {
  if (msg.content === 'tg') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'bite') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'merde') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'putain') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'putin') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'salope') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'enculer') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'chatte') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'chate') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'techa') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'BITE') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'connard') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'fils de pute') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'fils de tepu') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'fdp') {
    msg.reply('Les gros mots sont interdits !');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

//GROS MOTS FIN//

client.on('message', msg => {
  if (msg.content === 'Salut') {
    msg.reply('Wesh mon frère !');
  }
});

client.on('message', msg => {
  if (msg.content === 'slt @everyone') {
    msg.reply('YO ça va ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Salut @everyone') {
    msg.reply('Salut à toi aussi !');
  }
});

client.on('message', msg => {
  if (msg.content === 'salut @everyone') {
    msg.reply('Salut à toi aussi !');
  }
});

client.on('message', msg => {
  if (msg.content === '.geek') {
    msg.channel.send('Je suis un geek !🤓');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === 'lawl') {
    msg.reply('Tu te calme Jaqueline !😛');
  }
});

client.on('message', msg => {
  if (msg.content === 'ok') {
    msg.reply('OK ! \n https://gph.is/2eYyMtS');
  }
});

client.on('message', msg => {
  if (msg.content === 'et toi') {
    msg.reply('Tranquille poser la famille ! Abdoula https://gph.is/1Rxc96t');
  }
});

client.on('message', msg => {
  if (msg.content === 'et toi ?') {
    msg.reply('Tranquille poser la famille ! Abdoula https://gph.is/1Rxc96t');
  }
});

client.on('message', msg => {
  if (msg.content === 'et toi?') {
    msg.reply('Tranquille poser la famille ! Abdoula https://gph.is/1Rxc96t');
  }
});

client.on('message', msg => {
  if (msg.content === 'yep et toi ?') {
    msg.reply('Tranquille poser la famille ! Abdoula https://gph.is/1Rxc96t');
  }
});

client.on('message', msg => {
  if (msg.content === 'and you ?') {
    msg.reply('Tranquille poser la famille ! Abdoula https://gph.is/1Rxc96t');
  }
});

client.on('message', msg => {
  if (msg.content === 'and you') {
    msg.reply('Tranquille poser la famille ! Abdoula https://gph.is/1Rxc96t');
  }
});

client.on('message', msg => {
  if (msg.content === '🤔') {
    msg.reply('Elementaire mon cher Watson !');
  }
});

client.on('message', msg => {
  if (msg.content === '.plus') {
    msg.channel.send('@everyone Avez-vous des choses à me rajouter ?😉 Si oui, les mettres en-dessous ce poste.🙃');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.oui') {
    msg.channel.send('OKLM !😀');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.youtube') {
    msg.channel.send('@here Voici la chaine YouTube de Meter-Craft : https://www.youtube.com/channel/UCTW0s7P4zR0scKEdl2bMVlw');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.twitter') {
    msg.channel.send('@here Voici le Twitter de Meter-Craft : https://twitter.com/MeterCraft');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.twitch') {
    msg.channel.send('@here Voici la chaine Twitch de Meter-Craft : https://www.twitch.tv/metercraft');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.twitch Morthicks') {
    msg.channel.send('@here Voici la chaine Twitch de Morthicks : https://www.twitch.tv/morthicks');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.live') {
    msg.channel.send('@everyone Je suis en live sur YouTube et Twitch : https://www.twitch.tv/metercraft  et https://www.youtube.com/channel/UCTW0s7P4zR0scKEdl2bMVlw');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.salut') {
    msg.channel.send('Hello @here ! Comment ça va ?😄');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.a+') {
    msg.channel.send('A+ dans le bus @here !😋');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.start') {
    msg.channel.send("Je suis de nouveau disponible, j'ai passé une très bonne nuit !😎");
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.stop') {
    msg.channel.send('Bon A+ @here, je vais me coucher, bonne nuit !😴');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.con') {
    msg.channel.send('Putain je suis trop CON ! http://media1.popsugar-assets.com/files/2014/01/28/991/n/1922398/7d28abc22c736764_giphy-3.gif.xxxlarge/i/Some-politicians-started-looking-little-bored.gif');
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.retour') {
    msg.channel.send("Je suis de retour après un peu d'absence, je suis de nouveau operationnel avec des nouveautées ! https://gph.is/1aPAh1Z");
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.paque') {
    msg.channel.send("Je vous souhaite @everyone de manger beaucoup de chocolats. #paque https://gph.is/1IEJPRK");
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.spam') {
    msg.channel.send("Il est interdit de spamer des messages ! 😑");
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.caca') {
    msg.channel.send(":poop: https://gph.is/17GJ4mH");
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.news') {
    msg.channel.send("@everyone J'ai été mis à jour et j'ai des nouvelles fonctionnalitées, à voir ici : https://meter-craft.000webhostapp.com/aide.html");
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.MetaLife') {
    msg.channel.send("Qu'est ce que MetaLife ? MetaLife c'est un jeu avant tout, il est dévelopé par Meter-Craft. Si tu veux en savoir plus sur le projet va voir cette vidéo : https://youtu.be/WYSq97aVgqA");
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('message', msg => {
  if (msg.content === '.news MetaLife') {
    msg.channel.send("@everyone MetaLife a reçu des nouveautées, si tu veux les consultées cela se passe sur discord ou sur mon twitter : https://twitter.com/MeterCraft?lang=fr");
	msg.delete()
	.then(msg => console.log(`Deleted message from ${msg.content}`))
  }
});

client.on('ready', () => {
	client.user.setPresence({ game: { name: ".aide | By Meter-Craft", type: 0} });
	console.log("Bot Ready !");
});

client.on("guildMemberAdd", member => {
	member.guild.channels.find("name", "general").send(`:heart: Bienvenue à ${member} , je t'invite à aller voir le règlement ! :heart:`)
})

client.on("guildMemberRemove", member => {
	member.guild.channels.find("name", "general").send(`:cry: ${member} Goodbye my friend ! :cry:`)
})

client.on("guildMemberAdd", member =>{
	var role = member.guild.roles.find("name", "Membre");
	member.addRole(role)
})

client.login('NDA4OTk5MDg0NDE0NzMwMjQw.DVYNrw.gVKzig62g5udeYLgFwlTiq75kJI');
