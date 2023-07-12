import { render, screen } from '@testing-library/vue'

import AccountCart from './AccountCart.vue'


const info = {
    _id: "id",
    number: "1111 1111 1111 1111",
    money: 12000,
    created_at: "01.01.2022"
}

const options = {
    props: {
        info: info
    }
}


test('renders info in AccountCart', () => {

    render(AccountCart, options)

    screen.getByText(info.number)
})

test('renders AccountCart with account link', () => {

    options.props.accountLinkStatus = true

    render(AccountCart, options)

    expect(screen.getByTestId('account-link')).toHaveAttribute('to', "/accounts/id")
})