const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://api.lolhuman.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://api.lolhuman.xyz': 'azzbot',
}

// Other
global.namabot = ['EASY PAYMENT']
global.namaowner = ['Vinceent']
global.owner = ['62895606178942']
global.donasi =  ['Daff']
global.namabuyer = ['Clinton']
global.premium = ['6282120715778']
global.packname = 'Easy Payment'
global.author = 'Vinceent'
global.sessionName = 'E-Pay'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'DoaMu Terkabulkan',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadikan Bot Admin Terlebih Dahulu!',
    owner: 'Khusus Owner Bot',
    group: 'Itu Khusus Grup Bre...!',
    private: 'Cuma Bisa Chat Pribadi Bre...',
    bot: 'Khusus Nomor Bot',
    wait: 'Tunggu Sejam...',
    endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.pbid = fs.readFileSync('./lib/pbzepetto.jpg')
global.pbps = fs.readFileSync('./lib/pbprivate.jpg')
global.mlbb = fs.readFileSync('./lib/mlbb.jpg')
global.payment = fs.readFileSync('./lib/payment.png')
global.pbid2 = { url: 'https://telegra.ph/file/61bbbe01c3c5022e2db2e.jpg' }
global.pbps2 = { url: 'https://telegra.ph/file/a863cc4a8ad176459454d.jpg' }
global.mlbb2 = { url: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/284793560_1215015829249705_1428578106295026574_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEZn5OXKz31V1JMtqqHJuIa6v9WGMVOgfPq_1YYxU6B87MW0XDV47ONJGtlVctQWeHpcBbSJbcVwM5dPKQNsR_r&_nc_ohc=d2NLCFN3mTAAX_rtUXD&_nc_ht=scontent-hkt1-1.xx&oh=00_AT-EW8BjaE4BugPheDtdt0mncVmCx6DfbJYV6Xjjtqe_fg&oe=62F18B6A' }
global.payment2 = { url: 'https://coffeeparadise.eu/storage/pay.png' }
global.visoka = { url: 'https://telegra.ph/file/6617ed0c9c9e7ccd74d09.jpg' } 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
