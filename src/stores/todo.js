import {defineStore} from 'pinia'

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        items: [],
        newItem: '',
    }),
    actions: {
        addItem() {
            if (this.newItem.trim() !== '') {
                this.items.push(this.newItem)
                this.newItem = ''
            } else {
                alert('Please enter a value')
            }
        },
        deleteItem(index) {
            this.items.splice(index, 1)
        },
        clearList() {
            this.items = []
        }
    }

})