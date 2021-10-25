const { CommandInteraction, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    name: "코로나",
    description: '대한민국 코로나19 현황을 불러와요!',
    /**
     * @param { CommandInteraction } Interaction
     */

    async execute(interaction) {
        fetch('https://capi.msub.kr/').then((res) => res.json()).then((json) => {
            const covid19 = new MessageEmbed()
            .setTitle("대한민국 코로나19 현황")
            .setDescription(`${json.today.update} 기준이예요!`)
            .addFields(
                { name: "확진 환자", value: `**(누적) ${json.today.confirmation} 명**\n**전일대비 ${json.yesterday.confirmation} 명**`, inline: true},
                // { name: "일일 확진자", value: `${json.yesterday.confirmation.replace(/\(/gi, '').replace(/\)/gi, '').replace(/\+/gi, '')} 명`,}
                { name: "격리 해제", value: `**${json.today.cured} 명**\n**${json.yesterday.cured} 명**`, inline: true},
                { name: "치료중 (격리중)", value: `**${json.today.isolation} 명**\n**${json.yesterday.isolation} 명**`, inline: true},
            )
            .setColor("#6799ff")
            interaction.reply({embeds: [covid19]})
        })
    }
} 
//Copyright(c)2021 REM All rights reserved.
