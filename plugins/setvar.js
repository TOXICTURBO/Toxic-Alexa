const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'setvar', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/f6ec3d3d845a1e3dcce39.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `โฆโโ๐SETVAR๐โโโฆ
   HELLO ๐ ๐Toxic-Alexa๐
  
    *Turbo and Jifi*
โ โกโ โกโ โกโ โกโ โกโ โกโ โกโ โกโ โกโ โก
All setvars are

 ๐To change add message
 .setvar ADD_MESSAGE:your message

 ๐To change afk message
 .setvar AFK_MESSAGE:your message

 ๐To change alive message
 .setvar ALIVE_MESSAGE:your message

 ๐To change captions generated by bot
 .setvar ALL_CAPTION:your message

 ๐To change ban message
 .setvar BAN_MESSAGE:your message

 ๐To change block message
 .setvar BLOCK_MESSAGE:your message

 ๐To block a chat from using bot
 .setvar BLOCK_CHAT:chat jid,0,chat jid,0..etc

 ๐To change bot name on .list reply
 .setvar BOT_NAME:your BOT name

 ๐To change .leave message
 .setvar KICKME_MESSAGE:your message

 ๐To change owner name
 .setvar OWNER_NAME:your name

 ๐To change promote message
 .setvar PROMOTE_MESSAGE:your message

 ๐To change demote message
 .setvar DEMOTE_MESSAGE:your message

 ๐To change handler
 .setvar HANDLERS:^[.,!]your handler insidde the box

 ๐To change removebg api key 
 .setvar REMOVE_BG_API_KEY:api key

 ๐To change SUDO
 .setvar SUDO:number,0,number,0

 ๐To change tagall heading 
 .setvar TAG_HEADER:your message

 ๐To change unblock message
 .setvar UNBLOCK_MESSAGE:your message

 ๐To change unmute message
 .setvar UNMUTE_MESSAGE:your message

 ๐To change work type message
 .setvar WORK_TYPE:public or private or admin

 ๐To change bad word remove list
 .setvar THERI_LIST:badword,badword

 ๐To change AMALSER bot name
 .setvar BOT_NAME:your bot name

 ๐To get a song when your number is mentioned
 .setvar TAG_REPPLY:your jid 

    โกโ โกTurbo and Jifiโ โกโ โก

      โโโโ๐Toxic-Alexa๐โโโโโ
`}) 

}));
