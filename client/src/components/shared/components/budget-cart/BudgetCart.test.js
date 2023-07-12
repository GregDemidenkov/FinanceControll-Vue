import { render, screen, fireEvent } from '@testing-library/vue'

import BudgetCart from './BudgetCart.vue'


const info = {
    id: "id",
    from_date: "01.01.2022",
    to_date: "01.01.2023",
    status: "active",
    curr_money: 0,
    budget_money: 10000,
    account: {id: "account_id", number: "1111 1111 1111 1111"}
}

const options = {
    props: {
        info: info
    }
}


test('renders info in BudgetCart', () => {

    render(BudgetCart, options)
})

test('renders BudgetCart with undefined to_date', () => {

    info.to_date = null

    render(BudgetCart, options)

    screen.getByText('XXXX-XX-XX')
})

test('test progress width 0%', () => {

    info.curr_money = 0

    render(BudgetCart, options)

    expect(screen.getByTestId('curr-progress')).toHaveAttribute('style', "width: 0%;")
})


test('test progress width 50%', () => {

    info.curr_money = 5000

    render(BudgetCart, options)

    expect(screen.getByTestId('curr-progress')).toHaveAttribute('style', "width: 50%;")
})

test('test progress width 100%', () => {

    info.curr_money = 10000

    render(BudgetCart, options)

    expect(screen.getByTestId('curr-progress')).toHaveAttribute('style', "width: 100%;")
})

test('test visibility of topUp modal', async () => {

    options.data = () => ({
        topUpVisible: false
    })

    render(BudgetCart, options)

    await fireEvent.click(screen.getByTestId("topUp-btn"))

    expect(screen.getByTestId('topUp-modal')).toHaveAttribute('show', "true")
})