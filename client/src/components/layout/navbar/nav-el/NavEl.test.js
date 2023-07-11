import { render, screen, fireEvent } from '@testing-library/vue'

import NavEl from './NavEl.vue'
import config from '../config'


const data = config[0]

test('renders nav element', () => {

    const options = {
        props: {
            data: data
        }
    }

    render(NavEl, options)
    
    screen.getByText(data.label)
})

test('check valid link', async () => {

    const options = {
        props: {
            data: data
        }
    }

    render(NavEl, options)

    expect(screen.getByTestId('nav-link')).toHaveAttribute('to', data.to)
})