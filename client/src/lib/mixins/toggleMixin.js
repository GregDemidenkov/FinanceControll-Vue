export default {
    props: {
        show: {
            type: Boolean,
            dafault: false
        }
    },
    methods: {
        hideModal() {
            this.$emit('update:show', false)
        }
    }
}