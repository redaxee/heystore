require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const ms = require('ms');
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
// Database
// let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
// let _sewa = require("./lib/sewa");
// const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));

// UCAPAN WAKTU
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
// TANGGAL
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = xavior = async (xavior, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await xavior.decodeJid(xavior.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const from = m.chat
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        
        // Time
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam Juragan,'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang Juragan,'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore Juragan,'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang Juragan,'
}
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi Juragan, '
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh Juragan,'
}
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam Juragan,'
}
	
        // Group
        const groupMetadata = m.isGroup ? await xavior.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
	//const lakal = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
// Other
// const isSewa = _sewa.checkSewaGroup(from, sewa)
// //Sewa
// _sewa.expiredCheck(xavior, sewa)
	
        // Public & Self
        if (!xavior.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            // xavior.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await xavior.setStatus(`${'HeyStore•Bot'} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await xavior.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        xavior.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

      let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang COLY ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti COLY${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        if(m.chat == '6285197348366-1615821882@g.us'){
            return;
        }

    switch(command){
        case 'owner': case 'creator': {
            xavior.sendContact(m.chat, global.owner, m)
        }
        break
        case 'donasi': {
            anu = `
*[MANDIRI]* 1310017072952 
_A/N FERI RAPAEL_
//-------------------//
*[DANA]* 082219449227 
_A/N FERI RAPAEL_

*TERIMA KASIH BUAT YANG SUDAH MAU DONASI🤗*
*SEMOGA TRANSAKSI DI MUDAHKAN DAN DI LANCAKAN*`


            let btn = [{
                    urlButton: {
                        displayText: 'Download Aplikasi',
                        url: 'https://flashstore720.tokowebku.com/download'
                    }
                    
                    }]
                let setbot = db.data.settings[botNumber]
            if (setbot.templateImage) {
            xavior.send5ButImg(m.chat, anu, 'EasyPayment•Bot', global.thumb, btn, global.thumb)
            } else if (setbot.templateGif) {
            xavior.send5ButGif(m.chat, anu, 'EasyPayment•Bot', global.visoka, btn, global.thumb)
            } else if (setbot.templateVid) {
            xavior.send5ButVid(m.chat, anu, 'EasyPayment•Bot', global.visoka, btn, global.thumb)
            } else if (setbot.templateMsg) {
            xavior.send5ButMsg(m.chat, anu, 'EasyPayment•Bot', btn)
            } else if (setbot.templateLocation) {
            xavior.send5ButLoc(m.chat, anu, 'EasyPayment•Bot', global.thumb, btn)
            }
        }
        break
        case 'yts': case 'ytsearch':{
            if (!text) throw `Example : ${prefix + command} Nosstress - Pegang Tanganku`
            let yts = require("yt-search")
            let search = await yts(text)
            let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
            let no = 1
            for (let i of search.all) {
                teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
            }
            xavior.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
        }
        break
        case 'play': case 'ytplay':{
            if (!text) throw `Example : ${prefix + command} story wa anime`
            let yts = require("yt-search")
            let search = await yts(text)
            let anu = search.videos[0]
            let buttons = [
                {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
            ]
            let buttonMessage = {
                image: { url: anu.thumbnail },
                caption: `
⭔ Title : ${anu.title}
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Url : ${anu.url}`,
                footer: 'HeyStore•Bot',
                buttons: buttons,
                headerType: 4
            }
            xavior.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
        case 'ytmp3':{
            let { yta } = require('./lib/y2mate')
            if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
            let quality = args[1] ? args[1] : '128kbps'
            let media = await yta(text, quality)
            if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
            xavior.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
            xavior.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
        }
        break
        case 'ytmp4':{
            let { ytv } = require('./lib/y2mate')
            if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
            let quality = args[1] ? args[1] : '360p'
            let media = await ytv(text, quality)
            if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
            xavior.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
        }
        break
        case 'tiktok': case 'tiktoknowm':{
            if (!text) throw 'Masukkan Query Link!'
            m.reply(mess.wait)
            let anu = await fetchJson(`https://grradev.me/api/dowloader/tikok?url=${text}`)
            let buttons = [
                {buttonId: `donasi`, buttonText: {displayText: '► Donasi'}, type: 1}
            ]
            let buttonMessage = {
                video: { url: anu.result.video },
                caption: `Successfully Downloading!`,
                footer: 'Press The Button Below',
                buttons: buttons,
                headerType: 5
            }
            xavior.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
        case 'soundcloud': case 'scdl': {
            if (!text) throw 'No Query Title'
            m.reply(mess.wait)
            let anu = await fetchJson(`https://grradev.me/api/dowloader/soundcloud?url=${text}`)
            let msg = await xavior.sendImage(m.chat, anu.result.thumbnail, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
            xavior.sendMessage(m.chat, { audio: { url: anu.result.download }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
        }
        break
        case 'sticker':case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await xavior.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await xavior.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
        }
        break
        case 'emojimix':{
            let [emoji1, emoji2] = text.split`+`
            if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
            if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
            let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
            for (let res of anu.results) {
                let encmedia = await xavior.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                await fs.unlinkSync(encmedia)
            }
        }
        break
        case 'attp': case 'ttp': {
            if (!text) throw `Example : ${prefix + command} text`
            await xavior.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'Bangs', 'Ngek', m, {asSticker: true})
        }
        break
        case 'toimg':{
            if (!quoted) throw 'Reply Image'
            if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
            m.reply(mess.wait)
            let media = await xavior.downloadAndSaveMediaMessage(quoted)
            let ran = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                fs.unlinkSync(media)
                if (err) throw err
                let buffer = fs.readFileSync(ran)
                xavior.sendMessage(m.chat, { image: buffer }, { quoted: m })
                fs.unlinkSync(ran)
            })
        }
        break
        case 'tomp4':{
            if (!quoted) throw 'Reply Image'
            if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
            m.reply(mess.wait)
            let { webp2mp4File } = require('./lib/uploader')
            let media = await xavior.downloadAndSaveMediaMessage(quoted)
            let webpToMp4 = await webp2mp4File(media)
            await xavior.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
            await fs.unlinkSync(media)
        }
        break
        case 'removebg':{
            if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
            if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
            if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
            let remobg = require('remove.bg')
            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
            hmm = await './src/remobg-'+getRandom('')
            localFile = await xavior.downloadAndSaveMediaMessage(quoted, hmm)
            outputFile = await './src/hremo-'+getRandom('.png')
            m.reply(mess.wait)
            remobg.removeBackgroundFromImageFile({
              path: localFile,
              apiKey: apinobg,
              size: "regular",
              type: "auto",
              scale: "100%",
              outputFile 
            }).then(async result => {
            xavior.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
            await fs.unlinkSync(localFile)
            await fs.unlinkSync(outputFile)
            })
        }
        break
        case 'bitly':{
            if(!text) throw reply(`Example : ${prefix + command} http://destroysquad.com`)
            let anu = await fetchJson(`https://grradev.me/api/linkshort/bitly?link=${text}`)
            reply(`*Hasil : *${anu.result}`)
        }
        break
        // =================[JB MENU]======================== //
         case 'ready': case 'ready?': case 'menu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    listMessage :{
        title: `${ucapanWaktu}`,
        description: "╭─❏ *『 EASY PAYMENT 』*\n│ Tup - Up Game \n│ Android & Komputer\n╰───────────────❏",
        buttonText: "LIST MENU",
        footerText: "Created by EasyPayment•Bot",
        listType: "SINGLE_SELECT",
        sections: [{
                    "title": "Cash Point Blank Zepetto",
                    "rows": [
                        {
                            "title": "Cash Point Blank Zepetto",
                          //  "description": "Tujuan = Id game Transaksi Via id Atau Vocuher",
                            "rowId": `${prefix}cashpb`
                        }
                    ]
                },
                {
                   "title": "Mobile Legend ",
                    "rows": [
                        {
                            "title": "Mobile Legend ",
                        //    "description": "List Harga Point Blank Private Server", 
                            "rowId": `${prefix}mlbb`
                        }
                    ]
                },
                {
                   "title": "Arena Of Valor",
                    "rows": [
                        {
                            "title": "Arena Of Valor",
                         //   "description": "List Harga PUBGM Emulator",
                            "rowId": `${prefix}aov`
                        }
                    ]
                },
                {
                   "title": "Free Fire",
                    "rows": [
                        {
                            "title": "Free Fire",
                         //   "description": "List Harga PUBGM Emulator",
                            "rowId": `${prefix}ff`
                        }
                    ]
                },
                {
                    "title": "Valorant",
                    "rows": [
                        {
                            "title": "Valorant",
                         //   "description": "List Harga PUBGM Emulator",
                            "rowId": `${prefix} valorant`
                        }
                    ]
                },
                {
                    "title": "Lost Saga Original",
                    "rows": [
                        {
                            "title": "Lost Saga original",
                      //    "description": "List Harga Mobile Legends: Bang Bang",
                            "rowId": `${prefix}lso`
                        }
                    ]
                },
                {
                    "title": "PUBGM",
                    "rows": [
                        {
                            "title": "PUBGM",
                      //    "description": "List Harga Mobile Legends: Bang Bang",
                            "rowId": `${prefix}pubgm`
                        }
                    ]
                },                
                {
                    "title": "️Genshin Impact",
                    "rows": [
                        {
                            "title": "Genshin Impact",
                      //    "description": "List Harga Mobile Legends: Bang Bang",
                            "rowId": `${prefix}git`
                        }
                    ]
                },
                {
                    "title": "Call of duty Mobile",
                    "rows": [
                        {
                            "title": "Codm",
                      //    "description": "List Harga Mobile Legends: Bang Bang",
                            "rowId": `${prefix}codm`
                        }
                    ]
                }],
                  listType: 1 } }), { userJid: m.chat, quoted: m })
         xavior.relayMessage(m.chat, template.message, { messageId: template.key.id })    
         }
        break
        case 'cashpb':{
            anu = 
`╭─❏ *『 POINT BLANK VIA ID 』*
│ ➪ 1.200 💰 = Rp. 8.850
│ ➪ 2.400 💰 = Rp. 17.810
│ ➪ 6.000 💰 = Rp. 44.010
│ ➪ 12.000 💰 = Rp. 89.010
│ ➪ 36.000 💰 = Rp. 264.000
│ ➪ 60.000 💰 = Rp. 455.000
╰───────────────❏
╭─❏ *『 VOUCHER 』*
│ ➪ VPB1 1.200 💰 = Rp. 9.000
│ ➪ VPB2 2.400 💰 = Rp. 18.000
│ ➪ VPB3 6.000 💰 = Rp. 45.000
│ ➪ VPB4 12.000 💰 = Rp. 92.000
│ ➪ VPB5 36.000 💰 = Rp. 282.500
│ ➪ VPB6 60.000 💰 = Rp. 475.000
╰───────────────❏
*FORMAT PEMBELIAN :*
Send Bukti TF Dan Id Game Atau Pilih Voucher CTH VPB1.

*Note :*
1.Cash di Atas Belum Termasuk Bonus Topup.
2.Speed Transaksi Max 3 Menit.
3.Stok Unlimited.
4.Masa Aktif Voucher.
5.Speed Sat Set Jika tidak ada Hambatan.
6.Transaksi Bisa berkali kali
`

let btn = [{
           quickReplyButton: {
                displayText: 'PAYMENT',
                id: 'payment'
            }
        }]       
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
        
        //AOV
        case 'aov':{
            anu =
`╭─❏ *『 AOV 』*
│ ➪ *18 Vouchers* = Rp 5.000
│ ➪ *40 Vouchers* = Rp 10.000
│ ➪ *90 Vouchers* = Rp 19.500
│ ➪ *230 Vouchers* = Rp 46.500
│ ➪ *470 Vouchers* = Rp 93.000
│ ➪ *950 Vouchers* = Rp 188.150
│ ➪ *1430 Vouchers* = Rp 287.300
│ ➪ *2390 Vouchers* = Rp 471.800
╰───────────────❏
*FORMAT PEMBELIAN :*
Send Bukti TF Dan Player Id


*_Stok Pasti Unlimited Transaksi Bisa berulang ulang_*


`
let btn = [{
            quickReplyButton: {
                displayText: 'PAYMENT',
                id: 'payment'
            }
        }]
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break

        //Valorant
        case 'valorant':{
            anu = 
`╭─❏ *『VALORANT POINT 』*
│ ➪ *Valorant 420 Points* = Rp 49.000
│ ➪ *Valorant 700 Points* = Rp 78.500
│ ➪ *Valorant 1375 Points* = Rp 147.500
│ ➪ *Valorant 2400 Points* = Rp 247.500
│ ➪ *Valorant 4000 Points* = Rp 395.000
│ ➪ *Valorant 8150 Points* = Rp 781.000
╰───────────────❏
*FORMAT PEMBELIAN :*
Contoh = FlashStore720#SEA

*Noted*

Unlimited Stock
✅
SN = Nickname Player + ID Transaksi
✅
24/7 transaksi tanpa jam cut off

Noted = ⛔️ id player invalid (salah) 
atau id player region luar indonesia otomatis gagal.
`
let btn = [{
            quickReplyButton: {
                displayText: 'PAYMENT',
                id: 'payment'
            }
        }]
xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
        
        //pubgm
        case 'pubgm':{
        anu = 
`╭─❏ *『 PUBGM 』*
│ ➪ 52 UC = Rp. 9.500
│ ➪ 105 UC = Rp. 18.500
│ ➪ 131 UC = Rp  23.500
│ ➪ 150 UC = Rp. 32.500
│ ➪ 263 UC = Rp. 45.700
│ ➪ 525 UC = Rp. 93.300
│ ➪ 530 UC = Rp. 93.700
│ ➪ 600 UC = Rp. 106.000
│ ➪ 700 UC = Rp. 143.025
│ ➪ 825 UC = Rp. 146.000
╰───────────────❏

*FORMAT PEMBELIAN :*
Send Bukti TF Dan Player Id


*_Stok Pasti Unlimited Transaksi Bisa berulang ulang_*
`
let btn = [{
                quickReplyButton: {
                    displayText: 'PAYMENT',
                    id: 'payment'
                }
        }]
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
                //freefire
        case 'ff':{
            anu = 
`╭─❏ *『 FREE FIRE 』*
│ ➪ 💎 50 = Rp. 7.000
│ ➪ 💎 70 = Rp. 9.120
│ ➪ 💎 100 = Rp. 13.400
│ ➪ 💎 140 = Rp. 17.655
│ ➪ 💎 210 = Rp. 27.000
│ ➪ 💎 280 = Rp. 37.525
│ ➪ 💎 355 = Rp. 43.750
│ ➪ 💎 720 = Rp. 86.900
│ ➪ 💎 1000 = Rp. 127.000
│ ➪ 💎 1075 = Rp. 137.750
│ ➪ 💎 1450 = Rp. 174.500
│ ➪ 💎 2180 = Rp. 261.700
╰───────────────❏

*FORMAT PEMBELIAN :*
Send Bukti TF Dan Player Id


*_Stok Pasti Unlimited Transaksi Bisa berulang ulang_*
`
let btn = [{
                quickReplyButton: {
                    displayText: 'PAYMENT',
                    id: 'payment'
                }
        }]
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
        //mlbb
        case 'mlbb':{
            anu =
`╭─❏ *『 Mobile Legends 』*
│ ➪ 💎 5 = Rp. 1.500
│ ➪ 💎 38+4 Bns (32) = Rp. 9.800
│ ➪ 💎 53+6 Bns (59) = Rp. 16.000
│ ➪ 💎 86 = Rp. 18.600
│ ➪ 💎 127+13 Bns (140) = Rp. 32.500
│ ➪ 💎 167 = Rp. 40.000
│ ➪ 💎 257 = Rp. 57.000
│ ➪ 💎 344 = Rp. 78.000
│ ➪ 💎 429 = Rp. 90.000
│ ➪ 💎 514 = Rp. 120.000
│ 💳 Twilight Pass = Rp. 130.000
│ 💳 Startlight Member = Rp. 130.000
│ 💳 Startlight Member+= Rp. 290.000
│ 💳 193 DM + SM = ~201.000~ 195.000
╰───────────────❏
*Note:*
Untuk Yang tidak ada di List
Bisa di tanya langsung bosq,,
all diamond ada.
/----------------/
produk Valid & Legal 100%.
Transaksi Max 30 Detik.
Produk Unlimited.
Transaksi only butuh Id + server Nick
*(ex : 12345567 (2012) Nick )*

`
let btn = [{
                quickReplyButton: {
                    displayText: 'PAYMENT',
                    id: 'payment'
                }
        }]
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
        
       //Genshin
        case 'git':{
            anu =
`╭─❏ *『 Genshin Impact 』*
│ ➪ *60 Crystals* = Rp 14.500
│ ➪ *300+30 Crystals* = Rp 63.300
│ ➪ *980+110 Crystals* = Rp 205.000
│ ➪ *1980+260 Crystals* = Rp 438.500
│ ➪ *3280+600 Crystals* = Rp 720.000
│ ➪ *6480+1600 Crystals* = Rp 1.350.000
│ ➪ *Blessing of the welkin moon* = Rp 66.500
╰───────────────❏
*FORMAT PEMBELIAN :*
Send Bukti TF Dan (server) id 

*_Stok Pasti Unlimited Transaksi Bisa berulang ulang_*
`
let btn = [{
            quickReplyButton: {
                displayText: 'PAYMENT',
                id: 'payment'
            }
        }]
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
        //codm
        case 'codm':{
        anu = 
`╭─❏ *『 CODM 』*
│ ➪ 26 CP = Rp. 5.150
│ ➪ 53 CP = Rp. 9.650
│ ➪ 106 CP = Rp. 18.650
│ ➪ 264 CP = Rp. 45.650
│ ➪ 528 CP =  Rp. 93.000
│ ➪ 1056 CP = Rp. 184.500 
│ ➪ 1584 CP = Rp. 288.925
│ ➪ 2640 CP = Rp. 478.925
│ ➪ 5280 CP = Rp. 953.925
│ ➪ 10560 CP = Rp. 1.934.250
│ ➪ 26400 CP = Rp. 4.788.500
│ ➪ 52800 CP = Rp. 9.650.000
╰───────────────❏

*FORMAT PEMBELIAN :*
Send Bukti TF Dan Player Id


*_Stok Pasti Unlimited Transaksi Bisa berulang ulang_*
`
let btn = [{
                quickReplyButton: {
                    displayText: 'PAYMENT',
                    id: 'payment'
                }
        }]
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
        
        //LSO
        case 'lso':{
        anu = 
`╭─❏ *『 Lost Saga Original 』*
│ ➪ 15.000 Gold = Rp 15.000
│ ➪ 30.000 Gold = Rp 29.600
│ ➪ 50.000 Gold = Rp 48.600
│ ➪ 100.000 Gold = Rp 97.600
│ ➪ 200.000 Gold = Rp 193.600
│ ➪ 300.000 Gold = RP 291.600
╰───────────────❏

*FORMAT PEMBELIAN :*
Send Bukti TF Dan Username

*_Stok Pasti Unlimited Transaksi Bisa berulang ulang_*
`
let btn = [{
                quickReplyButton: {
                    displayText: 'PAYMENT',
                    id: 'payment'
                }
        }]
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
        
        //info
        case 'tes': case 'open':case 'info':{
anu = `╭─❏ *『 INFO USER 』*
│ ➪ Name : ${pushname}
│ ➪ Number : ${m.sender.split('@')[0]}
╰───────────────❏
╭─❏ *『 HEY STORE || VIP 』*
│ ➪ Nama : ${global.namabot}
│ ➪ Owner : ${global.namaowner}
│ ➪ Donasi Terbarik : ${global.donasi}
│ ➪ 7Hari Transaksi Terbanyak : ${global.namabuyer}
╰───────────────❏
╭─❏ *『 INFO SERVER 』*
│ ➪ cut off 23:30 - 00:15 (Peralihan Sistem)
│ ➪ Speed : Santet Jika Tidak Ada Hambatan.
│ ➪ Tanggal : ${jangwak}
│ ➪ Waktu : ${time}
│ ➪ WIB : ${moment().utcOffset('+0700').format('HH:mm')}
│ ➪ WIB : ${moment().utcOffset('+0900').format('HH:mm')}
│ ➪ WITA : ${moment().utcOffset('+0800').format('HH:mm')}
╰───────────────❏
*Group ON, Admin on, Off Jika Admin Kerja / Tidur*`


let btn = [{
                urlButton: {
                    displayText: 'Aplikasi️ Flash Store',
                    url: 'https://flashstore720.tokowebku.com/download'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Owner',
                    id: 'owner'
                }  
            }, {
                quickReplyButton: {
                    displayText: 'Menu',
                    id: 'menu'
                }  
            }, {
                quickReplyButton: {
                    displayText: 'Donasi',
                    id: 'donasi'
                }
        }]
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
        case 'payment':{
            anu =
`╭─❏ *『 PAYMENT 』*
│ ➪ *[MANDIRI]* = 13 100 1707 2952  
│    _A/N FERI RAPAEL_
│ ➪ *[DANA]* = 0822 1944 9227
│    _A/N FERI RAPAEL_
╰───────────────❏`
let btn = [{
            quickReplyButton: {
                displayText: 'Menu HEY STORE',
                id: 'menu'
            }
        }]
        xavior.send5ButMsg(m.chat, anu, 'HeyStore•Bot', btn)
        }
        break
        
        case 'antilink': {
                
        if (!m.isGroup) throw mess.group

        if (!isBotAdmins) throw mess.botAdmin

       if (!isAdmins) throw mess.admin
        if (args[0] === "on") {
                
        if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)

         db.data.chats[m.chat].antilink = true
                
         m.reply(`Antilink Aktif !`)
               
         } else if (args[0] === "off")
         {
  if (!db.data.chats[m.chat].antilink) 
         return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                
         db.data.chats[m.chat].antilink = false
                
         m.reply(`Antilink Tidak Aktif !`)
                
         } else {
                 
         let buttons = [
                        
         { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await xavior.sendButtonText(m.chat, buttons, `Mode Antilink`, 'BangsNgek-BOT', m)
                }
             }
             break
        
        
        
        default:
            if (budy.startsWith('=>')) {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }

            if (budy.startsWith('>')) {
                if (!isCreator) return m.reply(mess.owner)
                try {
                    let evaled = await eval(budy.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await m.reply(evaled)
                } catch (err) {
                    await m.reply(String(err))
                }
            }

            if (budy.startsWith('$')) {
                if (!isCreator) return m.reply(mess.owner)
                exec(budy.slice(2), (err, stdout) => {
                    if(err) return m.reply(err)
                    if (stdout) return m.reply(stdout)
                })
            }
        
    if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                if (room) {
                    if (/^.*(next|leave|start)/.test(m.text)) return
                    if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                    let other = [room.a, room.b].find(user => user !== m.sender)
                    m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                        contextInfo: {
                            ...m.msg.contextInfo,
                            forwardingScore: 0,
                            isForwarded: true,
                            participant: other
                        }
                    } : {})
                }
                return !0
            }
        
    if (isCmd && budy.toLowerCase() != undefined) {
        if (m.chat.endsWith('broadcast')) return
        if (m.isBaileys) return
        let msgs = global.db.data.database
        if (!(budy.toLowerCase() in msgs)) return
        xavior.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
    }
    }
} catch (err) {
    m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})