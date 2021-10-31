const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "역할얻기",

    async execute(interaction) {
        const embed = new MessageEmbed()
            .setTitle("역할얻기")
            .setColor("#6799ff")
            .setDescription("아래 버튼으로 실행할 작업을 선택해주세요!");

        const buttons = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('ADD')
                    .setLabel('NSFW 역할 받기')
                    .setStyle('SUCCESS')
                    .setDisabled(false)
                    .setEmoji('✔️'),
            )
            .addComponents(
                new MessageButton()
                    .setCustomId("REMOVE")
                    .setLabel('NSFW 역할 제거')
                    .setStyle("DANGER")
                    .setDisabled(false)
                    .setEmoji("❌")
            );
        interaction.channel.send({ embeds: [embed], components: [buttons] }).then(async (collector) => {
            collector.createMessageComponentCollector().on('collect', async i => {
                if (i.customId === "ADD") {
                    i.deferUpdate();
                    i.member.roles.add('역할ID')
                    interaction.channel.send(`<@${i.member.id}>, ` + "역할이 지급되었습니다!").then((x) => {
                        setTimeout(() => x.delete(), 3000)
                    })
                }
                if (i.customId === 'REMOVE') {
                    i.deferUpdate();
                    i.member.roles.remove('역할ID')
                    interaction.channel.send(`<@${i.member.id}>, ` + "역할이 제거되었습니다!").then((x) => {
                        setTimeout(() => x.delete(), 3000)
                    })
                }
            })
        })
    }
}
