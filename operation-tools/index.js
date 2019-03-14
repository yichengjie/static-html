/**
 * Created by yicj on 2019/3/13.
 */
(function(){
    var vm = new Vue({
        el: '#example',
        data: {
            message: 'Hello',
            system:'prod'
        },
        // 在 `methods` 对象中定义方法
        methods: {
            switchSystem:function(e){
                var sys = e.target.getAttribute('data-label') ;
                this.system = sys ;
            }
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    })
})() ;