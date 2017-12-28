<template>
    <div class="bottomControl">
        <span class="count">{{itemCounts}} item left</span>
        <span class="chooseType">
            <span class="chooseAll" :class="{active:isSelect}">All</span>
            <span class="chooseActive">Active</span>
            <span class="chooseCom">Completed</span>
        </span> 
        <span class="clearCom">Clear completed</span>
    </div>
</template>

<script>
 export default {
    name:'bottomControl',
    props:{
        itemCounts:{
            type:Number,
            default:2
        }
    },
    data(){
        return {
            isSelect:true
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
