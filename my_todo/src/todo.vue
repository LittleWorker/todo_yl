<template>
  <div id="todo">
    <header>todos</header>
    <div class="list-maker">
      <newTodoVue></newTodoVue>
    </div>
    <div class="list-container">
      <todoList :listItem="todoList"></todoList>
    </div>
    <bottomControl :showBottom="showBottom" :itemCounts='itemCounts' :showClear="showClear"></bottomControl>
  </div>
</template>

<script>
import newTodoVue from './components/newTodo.vue';
import todoList from './components/todoList.vue';
import bottomControl from './components/bottomControl.vue';
export default {
  name: 'todo',
  data(){
    return{
      //4个参数: todo --待办名称
      //        showCover -- 是否显示input框
      //        state  -- 当前状态：true--complete false--active
      todoList:[],
      showClear:false
    }
  },
  methods:{
    addTodo(todoName){
      this.todoList.push({todo:todoName,showCover:true,state:false});
    }
  },
  computed:{
    itemCounts:function(){
      let counts=0;
      for(let i in this.todoList){
        if(!this.todoList[i].state){
          counts++;
        }else{
          this.showClear=true;
        }
      }
      return counts;
    },
    showBottom:function(){
      return this.todoList.length?true:false;
    }
  },
  mounted:function() {
    let  that = this;
    //新todo生成事件
    this.$bus.on("addTodo",function(data){
      that.addTodo(data);
    });
    //编辑todo事件
    this.$bus.on('todoEdit',function(index){
      that.todoList[index].showCover =false;
    });
    //修改todo事件
    this.$bus.on('todoChanged',function(data){
      that.todoList[data.index].todo = data.value;
      that.todoList[data.index].showCover =true;
    });
    //删除todo事件
    this.$bus.on('deleteTodo',function(index){
      that.todoList.splice(index,1);
    });
    //todo状态切换事件
    this.$bus.on("completeTodo",function(index){
      that.todoList[index].state = ! that.todoList[index].state;
    });
    //清楚已完成的todo
    this.$bus.on("clearComTodo",function(){
      for(let i in that.todoList){
        if(that.todoList[i].state){
          that.todoList.splice(i,1);
        }
      }
    });
  },
  components:{
    newTodoVue:newTodoVue,
    todoList:todoList,
    bottomControl:bottomControl
  }
}
</script>

<style>
body{
  background:#f5f5f5;
}
#todo{
  position: relative;
    width:600px;
    height:auto;
    left: 50%;
    margin-left:-300px;
}
header{
  position: relative;
  display: inline-block;
  width:100%;
  height:100px;
  font-size: 72px;
  font-weight: bold;
  line-height: 100px;
  text-align: center;
  color:rgba(175, 47, 47, 0.15);
}

.list-maker{
  font:36px 'Helvetica Neue', Helvetica, Arial, sans-serif
}
</style>
