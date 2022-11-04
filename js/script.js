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
      
      createTask: {text : '' , done:false}
      
      
    }
  },
  methods:{
    newTask(){
      // this.createTask.push({text:this.typeTask , done:false});
      this.createTask.text = this.typeTask

      this.tasks.unshift(this.createTask);
      console.log(this.tasks);
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