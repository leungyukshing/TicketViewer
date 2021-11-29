import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import PageButtom from './PageButton';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({adapter: new Adapter()})

describe('test elements', () => {
    it('should show', () => {
        const container = shallow(<PageButtom/>);
        console.log(container.hasClass('change_page'))
        expect(container.hasClass('change_page')).toBe(true)
        expect(container.find('span.btn').length).toBe(2)
    })
})