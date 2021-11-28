import {render} from '@testing-library/react';
import React from 'react';
import PageButtom from './PageButton';

describe('test', () => {
    it('should show', () => {
        const {container} = render(<PageButtom/>)
    })
})