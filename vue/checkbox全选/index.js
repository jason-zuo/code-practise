export default {
    'check-all' : {
        twoWay : true ,
        params : ['checkData'] ,
        bind () {
            /**
                如果所有的列表的checked属性为true，则选中全选框，否则不选中全选框
            **/
            this.vm.$watch(this.params.checkData,(checkData) => {
                if (checkData.every((item) => {item.checked})) {
                    this.set(true)
                }else {
                    this.set(false)
                }
            },{deep : true })
        },
        //checkAll发生变化时
        update (checkAll) {
            //如果全选框被选中，则将列表的所有checked属性转为true,否则转为false
            if (checkAll) {
                this.vm[this.params.checkData].forEach((item) => {
                    item.checked  = true ;
                })
            }else {
                this.vm[this.params.checkData].forEach((item)=> {
                    item.checked = false ;s
                })
            }
        }
    }
}


// 调用方法

<input type="checkbox" v-model="checkAll" v-check-all="checkAll" check-data="checkData">
<ul>
    <li v-for="item in checkData">
        <input type="checkbox" v-model="item.checked">
        {{item.text}}
    </li>
</ul>