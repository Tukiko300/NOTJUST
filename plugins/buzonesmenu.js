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

ยป๐๐ช๐ฎ๐ขฬ ๐๐ง๐๐จ๐ง๐ญ๐ซ๐๐ซ๐ฬ๐ฌ ๐ฅ๐จ๐ฌ ๐๐ข๐ฌ๐ญ๐ข๐ง๐ญ๐จ๐ฌ ๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ ๐๐ข๐ฌ๐ฉ๐จ๐ง๐ข๐๐ฅ๐๐ฌยซ
โโโโโโโโโโโโโโโโโโ
๐ฑ๐๐ฎ๐ณ๐จ๐ง๐๐ฌ
๐ฑ๐๐จ๐ง๐ฒ๐ฑ
๐ฑ๐๐จ๐จ๐ญ ๐๐๐ฏ๐จ
๐ฑ๐๐๐ซ๐ฌ
โโโโโโโโโโโโโโโโโโ
ยป๐๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐. ๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐ ๐๐๐๐ยซ
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'ยฉ๐๐ก๐ฎ๐ฌ๐ณแ  แทฆรอร', '๐๐ผโ๐ โโ๐โโ๐โ๐ธ๐', `#menu`, '๐๐๐๐๐๐น๐ผ', `#ytowner`, '๐โ๐๐๐ธ๐พโ๐ธ๐', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(buzonesmenu|menubuzones|buzonesm|bm)$/i
handler.fail = null
module.exports = handler
