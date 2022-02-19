/* Copyright (C) nijin-husni
Mwonu credits kalayalle
Maalutty-nijin-husni
*/

const Maalutty = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/f6ec3d3d845a1e3dcce39.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁💝 Toxic Alexa 💝⦁━►


*owner number husni* :https://wa.me/916380260672.
            

*owner number Nijin* :https://wa.me/919995801023.


*owner id instagram* :https://instagram.com/toxic_turbo777.


*github* : coming soon.


*audio commands* :coming soon.


*sticker commands* :coming soon.

◄━⦁💝 Toxic Alexa 💝⦁━►
■□ ~Turbo~ And ~Turbo~■□ 

`}) 

}));
