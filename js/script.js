const {createApp} = Vue;

createApp({
  data(){
    return{
      logo: "img/logo.png",
      error: "",
      typeTask: '',
      tasks: [
        {
          text: "Prepara impasto",
          done: false
        },
        {
          text: "Accendi il forno",
          done: true
        },
        {
          text: "Fai i panetti",
          done: false
        },
      ],
      
      
    }
  },
  methods:{
    newTask(){
      
      this.error = '';
      if(this.typeTask.length < 5){
        this.error = "Non meno di 5 caratteri";
        this.typeTask = '';
      } else{

        createTask= {text : '' , done:false};
        createTask.text = this.typeTask;
        this.tasks.unshift(createTask);
        console.log(this.tasks);
      }
      this.typeTask = '';
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