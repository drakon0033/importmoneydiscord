
module.exports.run = function(client, message, args) {
	message.channel.send('Понггг!');
}

exports.config = {
	help: {
		description: `Вспомогательная команда для разработчика.`,
		usage: ''
	}
}
