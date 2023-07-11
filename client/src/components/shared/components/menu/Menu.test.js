import { render, screen, fireEvent } from '@testing-library/vue'

import Menu from './Menu.vue'


const modalContent = "Modal content"


test('renders menu with label', () => {

    const menuTitle = "Menu title"

    const options = {
        props: {
            title: menuTitle
        }
    }

    render(Menu, options)


    screen.getByText(menuTitle)
})

test('renders menu with modal content', () => {

    const options = {
        slots: {
            default: modalContent
        }
    }

    render(Menu, options)


    screen.getByText(modalContent)
})

test('check open modal when click on button', async () => {

    const options = {
        data: () => ({
            modalVisible: false
        }),
        slots: {
            default: modalContent
        }
    }

    render(Menu, options)

    await fireEvent.click(screen.getByTestId('menu-btn'))

    screen.getByText(modalContent)
})