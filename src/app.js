const App= {
    data(){
        return{
            counter: 0,
            title:'Список заметок',
            placeholderString:'Введите текст',
            inputValue:'',
            notes:[
                'заметки 1',
                'заметки 2',
            ],delete:''
        }
    },
    methods:{
        addNewNote(){
            if(this.inputValue !==''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(index){
            this.notes.splice(index ,1)
        }
    },
    computed:{
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
}

Vue.createApp(App).mount('#app')
Vue.createApp(App).mount('#app1')