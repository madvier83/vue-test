const vm = new Vue({
    el:'#app',
    data:{
        name: 'Muhammad Advie Rifaldy',
        message: 'hello world',
        img: '01.png',
        menu: 'test1',
        qty: 1,
        bil: 3,
        testArray: ['test1', 'test2', 'test3'],
        numbers: [1,2,3,4,5],
        materi: ['Vue.js']
    },
    methods:{
        getName: function(){
            return "Hi, my name is " + this.name;
        },
        changeName: function(newName){
            this.name = newName;
        },
        checkGenap: function(numbers){
            return numbers.filter(data => {
                return data % 2 == 0;
            })
        }
    },
    computed: {
        total: function(){
            return this.qty * 10000;
        },
        ganjilGenap: function(){
            return this.bil%2 == 0 ? 'ganjil':'genap';
        }
    }
});