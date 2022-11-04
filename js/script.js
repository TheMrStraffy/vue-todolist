const {createApp} = Vue;

createApp({
  data(){
    return{
      logo: "img/logo.png",
      typeTask: "",
      error: "",
      tasks: [
        {
          text: "Studiare assai",
          done: false
        },
        {
          text: "Comporre almeno una canzone",
          done: true
        },
        {
          text: "Scrivere 3 poesie",
          done: false
        },
      ],
      createTask: {text: this.typeTask, done: false}

    }
  },
  methods:{
    newTask(){
      this.tasks.push(this.createTask);
    },
    removeTask(index){
      if(this.tasks[index].done){
        this.tasks.splice(index,1)
      }
    }
  },
  mounted(){

  },
  created(){

  },
}).mount('#app')