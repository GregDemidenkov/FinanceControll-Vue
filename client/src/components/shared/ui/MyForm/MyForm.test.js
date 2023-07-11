import { render, screen } from '@testing-library/vue'

import MyForm from './MyForm.vue'


test('renders form', () => {

    const options = {
        slots: {
            default: 'Form content'
        }
    }

    render(MyForm, options)
    

    screen.getByText(/form content/i)
})