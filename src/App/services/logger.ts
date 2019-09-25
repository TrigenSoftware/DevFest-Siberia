import Logger from 'js-logger';

Logger.useDefaults({
	defaultLevel: process.env.NODE_ENV === 'test'
		? Logger.WARN
		: Logger.DEBUG,
	formatter(messages, { name }) {

		const contextPart = messages.shift();
		const time = new Date().toLocaleString();
		const context = `[${time}]\t[${name}::${contextPart}] `;

		messages.unshift(context);
	}
});

export default function createLogger(context: string) {
	return Logger.get(context);
}
