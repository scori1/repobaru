const { WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { getBuffer, getGroupAdmins, getRandom } = require('./lib/myfunc')
const { uncache, nocache } = require('./lib/loader')

require('./miku.js')
nocache('../miku.js', module => console.log(color('[WATCH]', 'red'), color(`'${module}'`, 'green'), 'File is updated!'))
require('./main.js')
nocache('../main.js', module => console.log(color('[WATCH]', 'red'), color(`'${module}'`, 'green'), 'File is updated!'))

const starts = async (kunz = new WAConnection()) => {
kunz.logger.level = 'warn'
kunz.version = [2, 2140, 14]
console.log(color(figlet.textSync('Xyz', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'red'))
kunz.browserDescription = ["GiiXyz", "Browser", "3.0.0"];
kunz.on('qr', () => {
console.log(color('[ Xyz ]', 'red'), color('Scan Qr Bro'))
})
fs.existsSync(`./session.json`) && kunz.loadAuthInfo(`./session.json`)
kunz.on('connecting', () => {
console.log(color('[ Xyz ]', 'red'), color('Tunggu!'))
})
kunz.on('open', () => {
console.log(color('[ Xyz ]', 'red'), color('Connected!'))
})
await kunz.connect({
timeoutMs: 30 * 1000
})
fs.writeFileSync(`./session.json`, JSON.stringify(kunz.base64EncodedAuthInfo(), null, '\t'))
kunz.on('chat-update', async (message) => {
require('./miku.js')(kunz, message)
})
kunz.on("group-participants-update", async (anu) => {
try {
groupMet = await kunz.groupMetadata(anu.jid)
groupMembers = groupMet.participants
mem = anu.participants[0]
console.log(anu)
} catch (e) {
console.log("Error : %s", color(e, "red"))
}
})
}
starts()
