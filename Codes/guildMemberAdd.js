client.on('guildMemberAdd', member => {
        let welcome = new MessageEmbed()
            .setTitle("환영해요!")
            .setDescription(`${member.user.username} 님이 본 서버에 입장하셨어요!`)
            .addFields(
                { name: "아이디", value: member.id, inline: true },
                { name: "계정 생성일", value: moment(member.user.createdTimestamp).locale('ko').format('ll dddd LTS'), inline: true },
                { name: "서버 가입일", value: moment(member.joinedAt).locale('ko').format('ll dddd LTS'), inline: true }
            )
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setColor("#6799ff");

        client.channels.cache.get('환영메시지가_전송될_채널아이디').send({ embeds: [welcome], content: `<@${member.id}>` })
})
//index.js
//Copyright(c)2021 REM All rights reserved.
