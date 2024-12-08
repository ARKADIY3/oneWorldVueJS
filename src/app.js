const App= {
    data(){
        return{
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
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },removeNote(index){
            this.notes.splice(index ,1)
        }
    }
}



Vue.createApp(App).mount('#app')