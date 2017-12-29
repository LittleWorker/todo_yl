<template>
  <div class="todoList">
    <div class="listItem" v-for="(item,index) in listItem" :class="{complete:item.state,active:!item.state}" :key="item.index" @mouseenter="listItemHover($event)" @mouseleave="listItemMouseLeave($event)">
        <span id="right" :class="{selected:item.state}" @click="completeTodo($event,index)"></span>
        <span class="cover" :class="{complete:item.state}" v-show="item.showCover" @dblclick.prevent="dblclickCover(index)">{{item.todo}}</span>
        <input v-show="!item.showCover" type="text" autofocus="autofocus" id="todoItem" :value="item.todo" @blur="inputBlur($event,index)" >
        <span id="delete" @click="deleteTodo(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todoList',
  props:{
    listItem:Array
  },
  data () {
    return {

    }
  },
  methods: {
    //切换todo状态为完成/激活
    completeTodo(event,index){
      this.$bus.emit("completeTodo",index);
    },
    dblclickCover(index){
      this.$bus.emit('todoEdit',index);
    },
    inputBlur(event,index){
      //更改值
      let param={
        index:index,
        value:event.target.value
      }
      this.$bus.emit('todoChanged',param);
      this.showCover =true;
    },
    deleteTodo(index){
      this.$bus.emit('deleteTodo',index);
    },
    listItemHover(event){
      $(event.target).children("#delete").show();
    },
    listItemMouseLeave(event){
      $(event.target).children("#delete").hide();
    }
      
  },
  mounted () {
    let that = this;
    //监听显示切换事件
    this.$bus.on("showTodo",function(showType){
      //jquery控制显示
      let allTodo = $(".todoList div"),
          activeTodo = $("div.active"),
          completeTodo = $("div.complete");
      switch(showType){
        case "chooseAll":
          allTodo.show();
          break;
        case "chooseActive":
          activeTodo.show();
          completeTodo.hide();
          break;
        case "chooseCom":
          activeTodo.hide();
          completeTodo.show();
          break;
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.todoList{
  position: relative;
}
.listItem{
  position: relative;
  width:100%;
  height:60px;
  color: #000000;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  font-size:0px;
  border: 1px solid #e6e6e6;
  background: #fff;
}
#right{
    width:48px;
    height:100%;
    display:inline-block;
    vertical-align: top;
    line-height:60px;
    /* background-image: url('../assets/image/right.png'); */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
    background-repeat: no-repeat;
    background-position: 50%;
    padding: 10px;
    box-sizing: border-box;
}
.selected{
  background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>') !important;
}
#delete{
    width:48px;
    height:100%;
    display:none;
    vertical-align: top;
    line-height:60px;
    background-image: url('../assets/image/close.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 80%;
    padding: 10px;
    box-sizing: border-box;
}
.cover{
    display: inline-block;
    vertical-align: top;
    width:504px;
    height: 100%;
    border:none;
    background: none;
    outline:none;
    font-size: 24px;
    padding-left:16px;
    box-sizing: border-box; 
    user-select:none;
    line-height: 60px;
}
.complete{
  text-decoration: line-through;
  color:#d9d9d9;
}
#todoItem{
    display: inline-block;
    vertical-align: top;
    width:504px;
    height: 100%;
    border:none;
    background: none;
    outline:none;
    font-size: 24px;
    padding-left:16px;
    box-sizing: border-box;  
}
#todoItem:focus{
  border: none
}

</style>
