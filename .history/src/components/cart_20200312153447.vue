<template>
  <div>
    <div class="fixed">
      <!-- <p class="cart">Cart = {{ mainCart }}</p> -->
      <div v-for="carts in inCart" v-bind:key="carts.idPro" class="cartdetail">
        <div>Product Name: {{ carts.name }}</div>
        <div>Choosed: {{ carts.qty }}</div>
        <div>Product Price: {{ carts.price }}$</div>
      </div>
      <div class="total">Total: {{ total() }}$</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  
  // methods: {
  //   check(products) {
  //     var id = products.idPro;
  //     if (this.product[id].proStatic > 0) {
  //       return true;
  //     }
  //     return false;
  //   },
  //   updateCart(products) {
  //     this.idBut = products.idPro;
  //     var found = this.cart.find(array => {
  //       return products.idPro === array.idPro;
  //     });
  //     if (found) {
  //       found.qty++;
  //     } else {
  //       this.cart.push({
  //         qty: 1,
  //         idPro: this.product[this.idBut].idPro,
  //         image: this.product[this.idBut].image,
  //         price: this.product[this.idBut].price,
  //         name: this.product[this.idBut].name
  //       });
  //     }
  //     this.product[this.idBut].proStatic--;
  //   }
  // },
  methods: {
    total () {
      var sum = 0;
      console.log(""this.$store.getters.inCart.length)
        for (let i = 0; i < this.$store.getters.inCart.length; i++) {
          sum += this.$store.getters.inCart.price * this.$store.getters.inCart.qty;
        }
        return sum;
}},
  computed: {
    
    // mainCart() {
    //   var x = 0;
    //   for (let i = 0; i < this.cart.length; i++) {
    //     x += this.cart[i].qty;
    //   }
    //   return x;
    // },
    inCart() {
      return this.$store.getters.inCart;
    }
  }

};
</script>
<style scoped>
.disable {
  background-color: black;
}
.total {
  clear: left;
  color: white;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background-color: chocolate;
}
* {
  margin: 0;
  padding: 0;
}
h3 {
  margin: 40px 0 0;
}
.clear {
  clear: left;
}
form {
  width: 70%;
  margin: 0 auto;
  padding: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0;
}
h2 {
  margin: 0;
  padding: 0;
}
p {
  margin: 5px;
}
.dis {
  background-color: yellow;
}
a {
  color: #42b983;
}
img {
  height: 300px;
  width: 90%;
}
.container {
}
.fixed > div {
  width: 100%;
}
.fixed {
  border: 1px solid red;
  position: fixed;
  top: 0;
  right: 0;
  margin-bottom: 100px;
  width: 300px;
  background-color: cornsilk;
}
.cartdetail {
  width: 40%;
  border-bottom: 1px solid black;

  float: left;
}
.pro1 {
  border: 1px solid black;
  float: left;
  margin-left: 1%;
  margin-top: 5%;
  width: 24%;
  box-sizing: border-box;
}
.color-box {
  width: 40px;
  margin-left: 30%;
  height: 40px;
}
button {
  background-color: brown;
  color: white;
  outline: none;
  height: 40px;
  width: 70px;
}
.cart {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: burlywood;
  color: white;
  font-weight: bold;
  width: 100%;
  margin: 0;
  border: 1px solid green;
}
</style>
