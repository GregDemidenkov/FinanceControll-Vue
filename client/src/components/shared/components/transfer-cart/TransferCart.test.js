import { render, screen, fireEvent } from '@testing-library/vue'

import TransferCart from './TransferCart.vue'


const info = {
    id: "id",
    account: {id: "account_id", number: "5555 5555 5555 5555"},
    transfer_type: "income",
    class_type: "other",
    money: 5000
}


test('renders info in TransferCart', () => {

    const options = {
        props: {
            info: info
        }
    }

    render(TransferCart, options)
})

test('renders TransferCart with account number', () => {

    const options = {
        props: {
            info: info,
            accountLinkStatus: true
        }
    }

    render(TransferCart, options)

    screen.getByText(info.account.number)
})

test('renders TransferCart without account number', () => {

    const options = {
        props: {
            info: info,
            accountLinkStatus: false
        }
    }

    render(TransferCart, options)

    expect(screen.queryByText(info.account.number)).toBeNull()
})

test('check input show when click on button "update"', async () => {

    const options = {
        props: {
            info: info,
        },
        data: () => ({
            updateVisible: false
        })
    }

    render(TransferCart, options)

    await fireEvent.click(screen.getByTestId("update-btn"))

    screen.getByTestId("update-input")
})

test('check input hidden when click on button "cancel-update"', async () => {

    const options = {
        props: {
            info: info,
        },
        data: () => ({
            updateVisible: true
        })
    }

    render(TransferCart, options)

    await fireEvent.click(screen.getByTestId("cancel-update-btn"))

    expect(screen.queryByTestId("update-input")).toBeNull()
})