import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import ListBox from './ListBox';
import axios from 'axios';

Enzyme.configure({adapter: new Adapter()})
jest.mock('axios')

const response = {
    code: 200,
    data: {
        count: 100
    }
}


describe('test list', () => {
    it('should show', () => {
        /*
        const container = shallow(<ListBox/>)
        axios.get.mockImplementation(url => {
            switch(url) {
                case 'http://localhost:8080/getTicketsCount':
                    return Promise.resolve(response)
            }
        })

        container.instance().getCount().then(resp => {
            expect(container.state('totalNum')).toEqual(100)
        })
        */
        /*
        const container = shallow(<ListBox/>);
        console.log(container.hasClass('lists'))
        expect(container.hasClass('change_page')).toBe(true)
        expect(container.find('span.btn').length).toBe(2)
        */
    })
})