/* const App = {
    data() {
        return {
            counter: 0,
            title: 'Счетчик'
        }
    }
}
 */

// Это все модели:

const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Type your note here',
      inputValue: '',
      notes: ['asdasd'],
    }
  },
  methods: {
    inputChangeHendler(event) {
      this.inputValue = event.target.value // this = data точнее data это обьект и мы к нему оброщаемся
    },
    addNewNote() {
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    inputKeyPress(event) {
      if (event.key === 'Enter') {
        this.addNewNote()
      }
    },
  },
}

Vue.createApp(App).mount('#app') //для отоброжения элементов
