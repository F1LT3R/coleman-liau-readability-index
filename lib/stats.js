const stats = {}

stats.cleanWords = words => {
	const result = []

	words.forEach(word => {
		if (typeof word !== 'string') {
			return
		}

		if (word.length < 1) {
			return
		}

		if (word === ' ') {
			return
		}

		if (word === '	') {
			return
		}

		if (word === '\n') {
			return
		}

		const lastChar = word[word.length - 1]

		word = word.replace(/\./g, '')

		if (lastChar === ',') {
			word = word.substr(0, word.length - 1)
		}

		result.push(word)
	})

	return result
}

stats.splitWords = sentences => {
	let result = []

	sentences.forEach(sentence => {
		const words = sentence.split(' ')
		result = result.concat(words)
	})

	result = stats.cleanWords(result)
	return result
}

stats.countLetters = words => {
	let count = 0

	words.forEach(word => {
		count += word.length
	})

	return count
}

stats.colemanliau = sentences => {
	const words = stats.splitWords(sentences)
	const letterCount = stats.countLetters(words)

	const L = (letterCount / words.length) * 100
	const S = (sentences.length / words.length) * 100

	const grade = (0.0588 * L) - (0.296 * S) - 15.8

	return grade
}

module.exports = stats
