import { render, screen } from '@testing-library/vue'

import MySelect from './MySelect.vue'


test('renders select with only disabled option', () => {

    const disabledOptionName = "disabled option name"

    const options = {
        props: {
            options: [],
            disabledOptionName: disabledOptionName
        }
    }

    render(MySelect, options)

    const select = screen.getByTestId('select')
    const optionList = select.getElementsByTagName('option')

    expect(optionList.length).toBe(1)
    expect(optionList[0].innerHTML).toBe(disabledOptionName)
})

test('renders select with usable options', () => {

    const options = {
        props: {
            options: [
                {value: "1", name: "name 1"},
                {value: "2", name: "name 2"},
            ],
        }
    }

    render(MySelect, options)

    const select = screen.getByTestId('select')
    const optionList = select.getElementsByTagName('option')

    expect(optionList.length).toBe(3)
})