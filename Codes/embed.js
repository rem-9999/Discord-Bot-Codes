const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "임베드",

	async execute(message) {
		message.delete()
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		let title = args.slice(1).join(" ").split("/")[0]
		let des = message.content.split("/")[1]
		let img = message.content.match(/\bhttps?:\/\/\S+/gi)[0]
		if (!title) return message.reply("사용법 : !임베드 제목/설명/이미지(필수X)")
		if (!des) return message.reply("사용법 : !임베드 제목/설명/이미지(필수X)")
		let embed = new MessageEmbed()
			.setTitle(title)
			.setDescription(des)
			.setImage(img)
			.setColor("RANDOM")
		message.channel.send({ embeds: [embed] })}
}
