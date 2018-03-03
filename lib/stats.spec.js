const fs = require('fs')
const path = require('path')
const chai = require('chai')
const stats = require('app/lib/stats')

const expect = chai.expect
chai.use(require('chai-as-promised'))

chai.should()

describe('stats', () => {
	describe('cleanWords', () => {
		it('should remove non-word characters', () => {
			const words = [
				9,
				'',
				'one,'
			]

			const result = stats.cleanWords(words)

			expect(result).to.be.an('array')
			expect(result.length).to.equal(1)
			expect(result[0]).to.equal('one')
		})
	})

	describe('coleman liau', () => {
		it('should return text passed', () => {
			const sentences = [
				// 'The quick fox jumped over the lazy dog.',
				// 'The quick, sly omnivorous mammal jumped energetically over the sullen, sleepy canine.'
				'Existing computer programs that measure readability are based largely upon subroutines which estimate number of syllables, usually by counting vowels.',
				'The shortcoming in estimating syllables is that it necessitates keypunching the prose into the computer.',
				'There is no need to estimate syllables since word length in letters is a better predictor of readability than word length in syllables.',
				'Therefore, a new readability formula was computed that has for its predictors letters per 100 words and sentences per 100 words.',
				'Both predictors can be counted by an optical scanning device, and thus the formula makes it economically feasible for an organization such as the U.S. Office of Education to calibrate the readability of all textbooks for the public school system'
			]

			const result = stats.colemanliau(sentences)
			expect(result).to.be.a('number')
			expect(result).to.equal(14.53042016806722)
		})
	})
})
