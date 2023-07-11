import { render, screen } from '@testing-library/vue'

import MyButton from './MyButton.vue'


test('renders button', () => {

    const options = {
        slots: {
            default: 'Test Button'
        }
    }

    render(MyButton, options)
    

    screen.getByText(/test button/i)
})