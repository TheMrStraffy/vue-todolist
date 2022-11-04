const {createApp} = Vue;

createApp({
  data(){
    return{
      logo: "img/logo.png",
      error: "",
      typeTask: '',
      tasks: [
        {
          text: "Studiare assai",
          done: false
        },
        {
          text: "Fai quello",
          done: true
        },
        {
          text: "Fai questo",
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