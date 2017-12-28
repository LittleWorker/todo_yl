<template>
  <div class="todoList">
    <div class="listItem" v-for="item in listItem" :key="item.index">
        <span id="right"></span>
        <input type="text" id="todoItem" :value="item.todo">
        <span id="delete"></span>
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
    background-image: url('../assets/image/right.png');
    background-repeat: no-repeat;
    background-position: 50%;
    padding: 10px;
    box-sizing: border-box;
}

#delete{
    width:48px;
    height:100%;
    display:inline-block;
    vertical-align: top;
    line-height:60px;
    background-image: url('../assets/image/close.png');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 80%;
    padding: 10px;
    box-sizing: border-box;
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
