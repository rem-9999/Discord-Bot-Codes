client.on('guildMemberRemove', member => {
        client.channels.cache.get('퇴장메시지가_전송될_채널아이디').send(`${member.user.username} 님이 본 서버에서 퇴장하셨어요`)
})
//index.js
//Copyright(c)2021 REM All rights reserved.
