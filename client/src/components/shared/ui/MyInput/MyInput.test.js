import { render, screen } from '@testing-library/vue'

import MyInput from './MyInput.vue'


test('renders input without label', () => {

    render(MyInput)

    screen.getByTestId('input')
})

test('renders input with label', () => {

    const labelText = "Checkbox label"

    const options = {
        props: {
            name: "input",
            label: labelText,
        }
    }

    render(MyInput, options)

    screen.getByLabelText(labelText)  
})

test('renders checked input type checkbox', () => {

    const options = {
        props: {
            type: 'checkbox'
        }
    }

    render(MyInput, options)

    const checkbox = screen.getByTestId("input")
    checkbox.checked = true

    expect(checkbox.checked).toBe(true)
})

test('renders checked input type radio', () => {

    const options = {
        props: {
            type: 'radio'
        }
    }

    render(MyInput, options)

    const checkbox = screen.getByTestId("input")
    checkbox.checked = true

    expect(checkbox.checked).toBe(true)
})


test('renders default input', () => {

    render(MyInput)

    expect(screen.getByTestId("input").type == "text").toBe(true)
})