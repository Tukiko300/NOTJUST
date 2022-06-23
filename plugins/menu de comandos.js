//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
*Que onda, ${username}*

»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐦𝐞𝐧𝐮́𝐬 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«

≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📬 #𝕓𝕦𝕘 (𝚛𝚎𝚙𝚘𝚛𝚝𝚊𝚛 𝚊𝚕𝚐𝚞𝚗 𝚋𝚞𝚐)
┣ ඬ⃟📬 #𝕣𝕖𝕡𝕠𝕣𝕥 (𝚛𝚎𝚙𝚘𝚛𝚝𝚊𝚛 𝚊𝚕𝚐𝚞𝚗 𝚎𝚛𝚛𝚘𝚛)
┣ ඬ⃟🤖 #𝕛𝕠𝕚𝕟 (𝚒𝚗𝚟𝚒𝚝𝚊 𝚊𝚕 𝚋𝚘𝚝 𝚊 𝚞𝚗 𝚐𝚛𝚞𝚙𝚘)
┣ ඬ⃟🤖 #𝕓𝕠𝕥𝕤 (𝚖𝚒𝚛𝚊 𝚕𝚘𝚜 𝚜𝚞𝚋-𝚋𝚘𝚝𝚜 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚋𝚕𝚎𝚜)
┣ ඬ⃟👻 #𝕠𝕨𝕟𝕖𝕣 (𝚊𝚌𝚞𝚍𝚎 𝚊 𝚖𝚒 𝚘𝚠𝚗𝚎𝚛)
≡≡≡≡≡≡≡≡≡≡≡≡≡≡

╔════════════════╗
✅ ownermenu
✅ groupmenu
✅ downloadmenu
✅𝐌𝐞𝐧𝐮𝐉𝐮𝐞𝐠𝐨𝐬
✅𝐌𝐞𝐧𝐮 𝐝𝐞 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬
✅ Programenu
✅ Randommenu
✅ Menubuzones
✅𝐌𝐞𝐧𝐮 𝐝𝐞 𝐄𝐟𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐕𝐨𝐳
✅𝐌𝐞𝐧𝐮 𝐝𝐞 𝐋𝐨𝐠𝐨𝐬
╚════════════════╝

»𝐄𝐬𝐭𝐞 𝐛𝐨𝐭 𝐞𝐬 𝐝𝐞 𝐮𝐬𝐨 𝐠𝐞𝐧𝐞𝐫𝐚𝐥, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫, 𝐞𝐯𝐢𝐭𝐚 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐫𝐥𝐨 𝐝𝐞 𝐦𝐚𝐥 𝐦𝐚𝐧𝐞𝐫𝐚 𝐲 𝐝𝐞 𝐢𝐠𝐮𝐚𝐥 𝐟𝐨𝐫𝐦𝐚 𝐞𝐯𝐢𝐭𝐚 𝐠𝐞𝐧𝐞𝐫𝐚𝐫 𝐬𝐩𝐚𝐦.

»𝐒𝐢 𝐝𝐞𝐬𝐞𝐚𝐧 𝐮𝐭𝐢𝐥𝐢𝐳𝐚𝐫 𝐚𝐥𝐠ú𝐧 𝐦𝐞𝐧ú 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨, 𝐬𝐢𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐞 𝐢𝐧𝐭𝐫𝐨𝐝𝐮𝐳𝐜𝐚𝐧 𝐞𝐥 𝐩𝐫𝐞𝐟𝐢𝐣𝐨 𝐞𝐬𝐭𝐚𝐛𝐥𝐞𝐜𝐢𝐝𝐨 (.) 𝐣𝐮𝐧𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 (𝐬𝐢𝐧 𝐬𝐞𝐩𝐚𝐫𝐚𝐫 𝐩𝐚𝐥𝐚𝐛𝐫𝐚𝐬).

»𝐄𝐣𝐞𝐦𝐩𝐥𝐨: .𝐨𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮

`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝕄𝔼ℕ𝕌 𝕊𝕀𝕄ℙ𝕃𝔼 ', `#menusimple`, 'tt', `#ytowner`, 'oo', `#igofc`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
