<template>
    <div class="newTodo">
        <span id="down-arrow">></span>
        <input type="text" id="inputTodo" placeholder="What needs to be done?" @keyup.enter="newTodo">
    </div>
</template>

<script>
 export default {
    name:'newTodo',
    data () {
        return {
            
        }
    },
    methods:{
        newTodo(event){
            let todoName=event.target.value;
            if(!!todoName){
               this.$bus.emit('addTodo',todoName);
               //清空当前input框
                event.target.value="";
            }
        }
    },
    components: {
    }
 }
</script>

<style>
/* 引入字体 */
@font-face {
  font-family: 'icomoon';
  src:  url('../assets/fonts/icomoon.eot?41i7g5');
  src:  url('../assets/fonts/icomoon.eot?41i7g5#iefix') format('embedded-opentype'),
    url('../assets/fonts/icomoon.ttf?41i7g5') format('truetype'),
    url('../assets/fonts/icomoon.woff?41i7g5') format('woff'),
    url('../assets/fonts/icomoon.svg?41i7g5#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}
.newTodo{
    position: relative;
    width:100%;
    height:60px;
    color: #000000;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    font-size:0px;
    border: 1px solid #e6e6e6;
    background: #fff;
}
#inputTodo{
    display: inline-block;
    vertical-align: top;
    width:552px;
    height: 100%;
    border:none;
    background: none;
    outline:none;
    font-size: 24px;
    padding-left:16px;
    box-sizing: border-box; 
}
#inputTodo:focus{
    border:none;
}
#down-arrow{
    background-image: url('../assets/image/downArrow.png');
    background-size: 80%;
    background-repeat: no-repeat;
    display: inline-block;
    width: 48px;
    height: 100%;
    background-position: 50%
}
</style>
