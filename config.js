//UBAH UBAH DISINI BRO JANGAN LUPA SUBREK YT DELTA TECH//
//NOTE : cara menjadi premium silahkan Pergi ke file; all/database/premium.json
//NOTE : cara menjadi publik owner silahkan Pergi ke file; all/database/owner.json

require("./all/module")
global.owner = "254112192119" 
global.namaCreator = "𝐜𝐚𝐬𝐞𝐲𝐫𝐡𝐨𝐝𝐞𝐝 hímsєlf" 
global.autoJoin = false
global.antilink = false 
global.versisc = '1.0' 
global.codeInvite = ""
global.isLink = ' ' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "𝐜𝐚𝐬𝐞𝐲𝐫𝐡𝐨𝐝𝐞𝐬 bot" 
global.author = "YT :𝐜𝐚𝐬𝐞𝐲𝐫𝐡𝐨𝐝𝐞𝐬" 
global.jumlah = "5" 
global.namabot = "𝐜𝐚𝐬𝐞𝐲𝐫𝐡𝐨𝐝𝐞𝐬 Bot crash" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
