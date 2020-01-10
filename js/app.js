new Vue({

    el:'#vue-app',
    data: {
        //name: 'Marcos',
        //trampo: 'Locutor de Rodeio',
        //website: 'http://cardapiodigital.ga/massasecia',
       // websiteTag: '<a href="http://cardapiodigital.ga/massasecia">Outro Link</a>'
       age: 20,
       a: 0,
       b: 0,
       available: true,
       nearby: false,
       error: false,
       success: false,
       characters: ['Mario','Luigi','Yoshi','Bowser'],
       ninjas:[
           {name: 'Ryu', age: 25},
           {name: 'Yoshi', age: 35},
           {name: 'Ken', age: 55}
       ]
    },
    methods:{

        greet: function(time){
            return 'Bom ' + time + ' ' + this.name;
        },

        add: function(){
            this.age++;
        },

        sub: function(){
            this.age--;
        },
        logName: function(){
            console.log('voce escreveu seu nome');
        },
        logAge: function(){
            console.log('voce escreveu sua idade');
        }
       /* addtoA: function(){
            return this.a + this.age;
        },
        addtoB: function(){
            return this.b + this.age;
        }*/
    },
    computed:{

        addtoA: function(){
            console.log('addtoA');
            return this.a + this.age;
        },
        addtoB: function(){
            console.log('addtoB');
            return this.b + this.age;
        },
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby
            }
        }

    }

})