const vm = new Vue({
    el:'#app',
    data:{
        name: 'Muhammad Advie Rifaldy',
        message: 'hello world',
        img: '01.png',
        menu: 'test1',
        qty: 1,
        bil: 3
    },
    methods:{
        getName: function(){
            return "Hello, Saya " + this.name;
        },
        changeName: function(newName){
            this.name = newName;
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