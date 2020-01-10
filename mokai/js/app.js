new Vue({

    el:'#app',
    data: {

       website: 'https://api.whatsapp.com/send?phone=+5599984850548&text=  + pedido',
       mostrar: false,
       nome: '',
       endereco: '',
       cardapio: true,
       combo: true,
       desabilitar: false,
       combo1: ['3 Sashimi','3 Niguiri','2 Uramaki de salmão','2 Hossamaki Califórnia'],
       combo2: ['2 Joy', '2 Sashimi', '3 Hot holl', '2 Uramaki de atum', '2 Hossamaki de salmão',  '2 Hossamaki california', '2 Niguiri de salmão' ],
       combo3: ['3 Joy' , '3 Niguiri', '5 Sashimi', '3 Uramaki Califórnia',  '3 Hossamaki de atum', '3 Hossamaki de salmão',  '3 Uramaki de salmão',  '7 Hot philadelphia'],
       combo4: ['4 Joy', '5 Niguiri', '5 Sashimi', '5 Hot holl', '5 Niguiri flambado', '5 Sashimi flambado', '5 Hossamaki de camarão', '4 Huramaki de salmão', '4 Hossamaki de salmão', '4 Hossamaki de goibada', '4 Uramaki de atum'],
       combo5: ['5 Niguiri', '5 Sashimi', '5 Joy c/patê de salmão', '5 Joy c/creme cheese', '5 Uramaki Califórnia', '5 Niguiri flambado', '10 Hot philadelphia', '10 Hossamaki de salmão', '10 Uramaki de salmão'],
       combo6: ['10 Sashimi', '10 Niguiri', '10 Hot holl', '10 Hossamaki de atum', '10 Uramaki de salmão', '10 Hossamaki de salmão', '5 Sashimi flambado', '5 Niguiri flambado', '5 Uramaki Califórnia', '5 Joy'],
       combo7: ['15 Sashimi', '15 Hot holl',  '10 Niguiri',  '10 Joy', '10 Niguiri flambado',  '10 Sashimi flambado',  '10 Uramaki de salmão', '10 Hossamaki de salmão',  '10 Hossamaki Califórnia', '10 Uramaki de atum',  '10 Hossamaki de camarão' ],
       combocombo1: ' Combo Executivo 1 - 10 peças: R$ 24,90 ',
       combocombo2: ' Combo Executivo 2 - 15 peças: R$ 37,35 ',
       combocombo3: ' Combo Executivo 3 - 30 peças: R$ 74,70 ',
       combocombo4: ' Combo Executivo 4 - 50 peças: R$ 124,50 ',
       combocombo5: ' Combo Executivo 5 - 60 peças: R$ 149,40 ',
       combocombo6: ' Combo Executivo 6 - 80 peças: R$ 199,20 ',
       combocombo7: ' Combo Executivo 7 - 120 peças: R$ 298,80 ',
       temakilista: 'Salmão, arroz e cebolinha',
       temaki1: ' Temaki de salmão simples - R$ 21,00 ',
       temakilista2: ['Ingredientes:', 'Arroz', 'Salmão', 'Cream Cheese', ' e Cebolinha'],
       temaki2: ' Temaki de salmão especial - R$ 23,00 ',
       temaki2hot: ' Temaki de salmão especial HOT - R$ 25,00 ',
       temakilista3: 'Salmão, cream cheese e cebolinha',
       temaki3: ' Temaki de salmão especial s/ arroz - R$ 27,00 ',
       temakilista4: ['Camarão', 'Arroz', 'Cream cheese e', 'Cebolinha'],
       temaki4: ' Temaki de camarão especial - R$ 29,00 ',
       temaki4hot: ' Temaki de camarão especial HOT - R$ 31,00 ',
       temaki5: ' Temaki de camarão especial s/ arroz - R$ 31,00 ',
       temaki: [],
       val1: 10,
       val2: 10,
       total: this.val1 + this.val2,
       ninjas:[
           {name: 'Ryu', age: 25},
           {name: 'Yoshi', age: 35},
           {name: 'Ken', age: 55}
       ],
       toggle: false,
       pedido: [],
       desabilitar: false,
       dialog: '',
    },
    methods:{
        greet: function(time){
            return 'Bom ' + time + ' ' + this.name;
        },
        add: function(val){
            alert('Você selecionou: ' + val);
            this.pedido.push(val);
        },
        add2: function(val){
            this.pedido.push(val);
        },
        add3: function(val){
            this.pedido.push(val);
        },
        add4: function(val){
            this.pedido.push(val);
        },
        removeElement: function (index) {
            this.$delete(this.pedido, index);
          }
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
                mostrar: this.mostrar,
                cardapio: this.cardapio
            }
        },

    }
})