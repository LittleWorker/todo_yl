<template>
    <div class="bottomControl" v-show="showBottom">
        <span class="count">{{itemCounts}} item left</span>
        <span class="chooseType" @click="chooseClick($event)">
            <span class="chooseAll" :class="{active:(isSelect=='all')}">All</span>
            <span class="chooseActive" :class="{active:(isSelect=='active')}">Active</span>
            <span class="chooseCom" :class="{active:(isSelect=='complete')}">Completed</span>
        </span> 
        <span class="clearCom" v-show="showClear" @click="clearComTodo">Clear completed</span>
    </div>
</template>

<script>
 export default {
    name:'bottomControl',
    props:{
        itemCounts:{
            type:Number,
            default:2
        },
        showClear:{
            type:Boolean
        },
        showBottom:Boolean
    },
    data(){
        return {
            isSelect:'all'
        }
    },
    methods: {
      chooseClick(event){
          let chooseType = event.target.className;
          switch(chooseType){
              case "chooseAll":
                this.$bus.emit("showTodo",'chooseAll');
                this.isSelect = 'all';
                break;
              case "chooseActive":
                this.$bus.emit("showTodo",'chooseActive');
                this.isSelect = 'active';
                break;
              case "chooseCom":
                this.$bus.emit("showTodo",'chooseCom');
                this.isSelect = 'complete';
                break;
          }
      },
      //清楚已完成的todo
      clearComTodo(){
        this.$bus.emit("clearComTodo");
      }  
    },
   components: {

   }
 }
</script>

<style>
.bottomControl{
    position: relative;
    width: 100%;
    height: 40px;
    font-size: 14px;
    border: 1px solid #e6e6e6;
    background: #fff;
    line-height: 40px;
}
.count{
    margin-left: 16px;
}
.chooseType{
    position: absolute;
    left: 50%;
    width: 220px;
    text-align: center;
    margin-left: -100px; 
}
.chooseType span{
    margin-right: 16px;
    cursor: pointer;
    padding: 3px 6px;
}
.chooseType span:hover{
    border:1px solid rgba(175, 47, 47, 0.1);
}
.chooseType span.active{
    border:1px solid rgba(175, 47, 47, 0.2);
}
.clearCom{
    float: right;
    margin-right: 16px;
    cursor: pointer; 
    
}
.clearCom:hover{
    text-decoration: underline;
}
</style>
