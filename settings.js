/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'B6084A1B49', // Ambil apikey di zenz biar fitur yg make api work
}

// Other
global.owner = ['15626664777','15626664777','15626664777']
global.premium = ['15626664777']
global.ownernomer = '15626664777'
global.ownername = '𝐀𝐧𝐝𝐢𝐆𝐚𝐧𝐬'
global.botname = '𝐂𝐡𝐚𝐭-𝐁𝐨𝐭𝐬'
global.footer = '𝐀𝐧𝐝𝐢𝐆𝐚𝐧𝐬'
global.ig = '𝐆𝐚𝐤 𝐩𝐮𝐧𝐲𝐚'
global.email = '𝐕𝐞𝐧𝐨𝐦𝐠𝐚𝐦𝐢𝐧𝐠𝐨𝐟𝐟𝐢𝐜𝐢𝐚𝐥999@gmail.com'
global.region = 'American'
global.sc = 'dalam neraka'
global.myweb = 'dalam neraka'
global.packname = '𝐀𝐧𝐝𝐢𝐁𝐨𝐭𝐬'
global.author = '𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐑𝐨𝐛𝐨𝐭'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '[ ✓ ] 𝐒𝐮𝐤𝐜𝐞𝐬𝐬',
    admin: '[ ⚠︎ ] 𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐀𝐝𝐦𝐢𝐧 𝐆𝐫𝐮𝐩',
    botAdmin: '[ ⚠︎ ] 𝐇𝐚𝐧𝐲𝐚 𝐛𝐞𝐫𝐥𝐚𝐤𝐮 𝐊𝐞𝐭𝐢𝐤𝐚 𝐆𝐮𝐚 𝐉𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧',
    owner: '[ ⚠︎ ] 𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐀𝐧𝐝𝐢𝐆𝐚𝐧𝐬',
    group: '[ ⚠︎ ] 𝐅𝐢𝐭𝐮𝐫 𝐃𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐇𝐚𝐧𝐲𝐚 𝐔𝐧𝐭𝐮𝐤 𝐆𝐫𝐮𝐩',
    private: '[ ⚠︎ ] 𝐅𝐢𝐭𝐮𝐫 𝐃𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐇𝐚𝐧𝐲𝐚 𝐔𝐧𝐭𝐮𝐤 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭',
    bot: '[ ⚠︎ ] 𝐅𝐢𝐭𝐮𝐫 𝐊𝐡𝐮𝐬𝐮𝐬 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐍𝐨𝐦𝐨𝐫 𝐁𝐨𝐭',
    wait: '[ ♲︎︎︎ ] 𝐋𝐨𝐚𝐝𝐢𝐧𝐠...',
    endLimit: '[ ⚠︎ ] 𝐁𝐚𝐭𝐚𝐬 𝐏𝐞𝐦𝐚𝐤𝐚𝐢𝐚𝐧 𝐀𝐧𝐝𝐚 𝐓𝐞𝐥𝐚𝐡 𝐇𝐚𝐛𝐢𝐬, 𝐃𝐢𝐫𝐞𝐬𝐞𝐭 𝐉𝐚𝐦 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
