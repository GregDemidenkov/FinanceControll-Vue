import { render, screen, fireEvent } from '@testing-library/vue'
import MyModal from './MyModal.vue'


test('renders modal window with content', () => {

    const modalText = "My model content"

    const options = {
        props: {
            show: true
        },
        slots: {
            default: modalText
        }
    }

    render(MyModal, options)

    screen.getByText(modalText) 
})