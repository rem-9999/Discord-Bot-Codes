const { MessageEmbed, MessageActionRow, MessageSelectMenu, Message } = require('discord.js');

module.exports = {
    name: "도움말",

    async execute(interaction) {
        const mainpage = new MessageEmbed()
            .setTitle(`봇 도움말`)
            .setDescription("봇 소개\n\n===================================\n• 메인페이지\n• 일반 명령어\n• 관리명령어\n===================================\n\n[깃허브](https://github.com/rem-9999/Discord-V13-Bot)")
            .setFooter(interaction.member.user.tag, interaction.member.user.displayAvatarURL({ dynamic: true }))
            .setColor("#ffa6a8");

        const genpage = new MessageEmbed()
            .setTitle("일반 명령어")
            .setDescription("일반 명령어")
            .addFields(
                { name: "!도움말", value: '소개', inline: true },
                { name: "!가사", value: '가사', inline: true },
                { name: "!추가예정", value: '추가예정', inline: true },
            )
            .setColor("#ffa6a8")
            .setFooter(interaction.member.user.tag, interaction.member.user.displayAvatarURL({ dynamic: true }));

        const managepage = new MessageEmbed()
            .setTitle("관리 명령어")
            .setDescription("관리 명령어")
            .addFields(
                { name: "!밴", value: "밴", inline: true },
                { name: "!추가예정", value: '추가예정', inline: true },
                { name: "!추가예정", value: '추가예정', inline: true },
            )
            .setColor("#ffa6a8")
            .setFooter(interaction.member.user.tag, interaction.member.user.displayAvatarURL({ dynamic: true }));

        const menu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('MAIN')
                    .setPlaceholder("메뉴를 열어  선택해주세요.")
                    .setOptions([
                        {
                            label: "메인페이지",
                            description: "도움말의 메인 페이지입니다.",
                            value: "mainpage"
                        },
                        {
                            label: "⚙️ㅣ일반 명령어",
                            description: "도움말의 일반 명령어 페이지입니다.",
                            value: "genpage"
                        },
                        {
                            label: "🛠️ㅣ관리 명령어",
                            description: "도움말의 관리 명령어 페이지입니다.",
                            value: "managepage"
                        }
                    ])
                    .setMaxValues(1)
                    .setMinValues(1)
            );

        interaction.reply({ embeds: [mainpage], components: [menu] })
        const collector = interaction.channel.createMessageComponentCollector({ filter: i => i.user.id === interaction.member.id, componentType: 'SELECT_MENU' })
        collector.on('collect', async i => {
            if(i.customId === 'MAIN') {
                if(i.values.join(', ') === 'mainpage') {
                    await i.deferUpdate()
                    await i.editReply({embeds: [mainpage]})
                }
                if(i.values.join(', ') === 'genpage') {
                    await i.deferUpdate()
                    await i.editReply({embeds: [genpage]})
                }
                if(i.values.join(', ') === 'managepage') {
                    await i.deferUpdate()
                    await i.editReply({embeds: [managepage]})
                }
            }
        })
    }
}
//Copyright(c)2021 REM All rights reserved.
