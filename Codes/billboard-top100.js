const { MessageEmbed, Client } = require('discord.js')
const { getChart } = require('billboard-top-100');

module.exports = {
    name: "빌보드",
    description: '빌보드 차트를 불러와요!',

    async execute(interaction) {
        getChart('hot-100', (err, chart) => {
            const chartembed = new MessageEmbed()
                .setTitle("빌보드 TOP 10 차트")
                .setURL(chart.previousWeek.url)
                .setDescription(`${chart.week} 기준`)
                .addFields(
                    { name: `1. ${chart.songs[0].title}`, value: `${chart.songs[0].artist}`},
                    { name: `2. ${chart.songs[1].title}`, value: `${chart.songs[1].artist}`},
                    { name: `3. ${chart.songs[2].title}`, value: `${chart.songs[2].artist}`},
                    { name: `4. ${chart.songs[3].title}`, value: `${chart.songs[3].artist}`},
                    { name: `5. ${chart.songs[4].title}`, value: `${chart.songs[4].artist}`},
                    { name: `6. ${chart.songs[5].title}`, value: `${chart.songs[5].artist}`},
                    { name: `7. ${chart.songs[6].title}`, value: `${chart.songs[6].artist}`},
                    { name: `8. ${chart.songs[7].title}`, value: `${chart.songs[7].artist}`},
                    { name: `9. ${chart.songs[8].title}`, value: `${chart.songs[8].artist}`},
                    { name: `10. ${chart.songs[9].title}`, value: `${chart.songs[9].artist}`},
                )
                .setColor("#6799ff")
                .setFooter("Made By ! レム＃9999") 
                .setTimestamp();
                interaction.reply({embeds: [chartembed]})
        })
    }
}

//Copyright(c)2021 REM All rights reserved.
//npm i billboard-top-100
