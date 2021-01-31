import {expect} from 'chai'
import {getStyleByDate} from '../TodoListItem'

describe('The getStyleByDate function', () => {
    it('Returns none if the date is less than five days ago', () => {
        const today = Date.now()
        const recentDay = new Date(Date.now() - 8640000 * 3)
        const expected = 'none'
        const actual = getStyleByDate(recentDay, today)

        expect(actual).to.equal(expected)
    })
    it('Returns border if the date is more than five days ago', () => {
        const today = Date.now()
        const recentDay = new Date(Date.now() - 8640000 * 7)
        const expected = '2px solid red'
        const actual = getStyleByDate(recentDay, today)

        expect(actual).to.equal(expected)
    })
})