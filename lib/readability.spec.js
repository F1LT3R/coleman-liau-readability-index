const chai = require('chai')
const readability = require('app/lib/readability')

const expect = chai.expect
chai.use(require('chai-as-promised'))

chai.should()

describe('coleman liau', () => {
	it('should return text passed', () => {
		const text = 'Hello world!'


		readability.colemanliau(result => {
			expect(result).to.equal(text)
		})
	})
})
