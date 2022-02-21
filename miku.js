const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL,  ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange, waChatKey, mentionedJid, processTime, Browsers, } = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request');
const crypto = require('crypto')
const fs = require("fs-extra")
const util = require('util')
const { color, bgcolor } = require('./lib/color')
const { getBuffer, getGroupAdmins, getRandom } = require('./lib/myfunc')

// EndJson!

module.exports = miku = async (miku, kxd) => {
try {
if (!kxd.hasNewMessage) return
kxd = kxd.messages.all()[0]
if (!kxd.message) return
if (kxd.key && kxd.key.remoteJid == 'status@broadcast') return
if (kxd.key.id.startsWith('3EB0') && kxd.key.id.length === 12) return
const { Functions }= require('./lib/functions.js');
global.ky_ttt
global.blocked
kxd.message = (Object.keys(kxd.message)[0] === 'ephemeralMessage') ? kxd.message.ephemeralMessage.message : kxd.message
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const content = JSON.stringify(kxd.message)
const from = kxd.key.remoteJid
const type = Object.keys(kxd.message)[0]     
const typeo = Object.keys(kxd.message)[0]
global.prefix
const cmd = (type === 'conversation' && kxd.message.conversation) ? kxd.message.conversation : (type == 'imageMessage') && kxd.message.imageMessage.caption ? kxd.message.imageMessage.caption : (type == 'videoMessage') && kxd.message.videoMessage.caption ? kxd.message.videoMessage.caption : (type == 'extendedTextMessage') && kxd.message.extendedTextMessage.text ? kxd.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°Z•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•Zπ÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
var body = (typeo === 'conversation') ? kxd.message.conversation : (typeo === 'extendedTextMessage') ? kxd.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? kxd.message.conversation : (type === 'extendedTextMessage') ? kxd.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
budy = (type === 'conversation') ? kxd.message.conversation : (type === 'extendedTextMessage') ? kxd.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const arg = body.substring(body.indexOf(' ') + 1)
const isCmd = body.startsWith(prefix) 
const q = args.join(' ')
const markon = "0@s.whatsapp.net"
const botNumber = miku.user.jid
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? kxd.participant : kxd.key.remoteJid
const senderr = kxd.key.fromMe ? miku.user.jid : kxd.key.remoteJid.endsWith('@g.us') ? kxd.participant : kxd.key.remoteJid
const totalchat = await miku.chats.all()
const groupMetadata = isGroup ? await miku.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = kxd.key.fromMe ? miku.user.jid : miku.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = kxd.key.fromMe ? miku.user.name : conts.notify || conts.vname || conts.name || '-'
const mentionByTag = type == "extendedTextMessage" && kxd.message.extendedTextMessage.contextInfo != null ? kxd.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = type == "extendedTextMessage" && kxd.message.extendedTextMessage.contextInfo != null ? kxd.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const sendMess = (hehe, teks) => {
miku.sendMessage(hehe, teks, text)
}
const reply = (teks) => { 
miku.sendMessage(from, teks, text, {quoted:kxd})
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
miku.sendMessage(to, media, type, {quoted: fstatus, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const costum = (pesan, tipe, target, target2) => {
miku.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}

// Media!

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const { quotedMsg, isQuotedMsg, isBaileys } = kxd
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isListMsg = (type == 'listResponseMessage')
const isQuotedemage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
const isQuotediudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
const isQuotedoideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
const isQuotedpticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false

// Command!

switch (command) {
case 'sticker':  case 'stiker':  case 's': 
if ((isMedia && !kxd.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kxd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kxd
const media = await miku.downloadAndSaveMediaMessage(encmedia, 'media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, markon, `© - GiiXyz`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && kxd.message.videoMessage.seconds < 11 || isQuotedVideo && kxd.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kxd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kxd
const media = await miku.downloadAndSaveMediaMessage(encmedia, 'media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`*Error Bro.*`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, markon, `*Sticker!*`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kxd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kxd
const media = await miku.downloadAndSaveMediaMessage(encmedia, 'media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('*Gagal!*')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
miku.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: kyy })
fs.unlinkSync(ranw)
})
})
} else {
reply(`*Kirim Gambar 🖼 Dengan Caption ${prefix}Sticker*`)
}
break

// Akhir!

default:
if (/^=?>/.test(budy) && (isOwner || kxd.key.fromMe)){
let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')
try{
let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })
return reply(require('util').format(evaluate))
 } catch(e){
 return reply(require('util').format(e))
}
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('Text','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'cyan'))
}
}
}