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
        // �� `methods` �����ж��巽��
        methods: {
            switchSystem:function(e){
                var sys = e.target.getAttribute('data-label') ;
                this.system = sys ;
            }
        },
        computed: {
            // �������Ե� getter
            reversedMessage: function () {
                // `this` ָ�� vm ʵ��
                return this.message.split('').reverse().join('')
            }
        }
    })
})() ;