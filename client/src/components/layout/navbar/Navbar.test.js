import { render, screen, fireEvent } from '@testing-library/vue'

import Navbar from './Navbar.vue'
import config from './config'


test('renders navbar with nav elements', () => {

    const options = {
        props: {
            NavEl: config
        }
    }

    render(Navbar, options)

    screen.getByText(config[0].label)
    screen.getByText(config[1].label)
    screen.getByText(config[2].label)
})


test('check adding style "hide" when click on show icon ', async () => {

    const options = {
        props: {
            NavEl: config
        },
        data: () => ({
            show: true
        })
    }

    render(Navbar, options)

    await fireEvent.click(screen.getByTestId('show-nav-button'))

    expect(screen.getByTestId('navbar')).toHaveAttribute('class', 'nav-section hide')
})