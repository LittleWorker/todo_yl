<template>
  <div id="todo">
    <header>todos</header>
    <div class="list-maker">
      <newTodoVue></newTodoVue>
    </div>
    <div class="list-container">
      <todoList :listItem="todoList"></todoList>
    </div>
    <bottomControl :itemCounts='2' ></bottomControl>

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
      todoList:[{
        todo:'111'
      },{
        todo:'222'
      }]
    }
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
