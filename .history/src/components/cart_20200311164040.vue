<template>
    <div>
        <div class="fixed">
        <p class="cart">Cart = {{ mainCart }}</p>
        <div v-for="carts in cart" v-bind:key="carts.idPro" class="cartdetail">
          <div>Product Name: {{ carts.name }}</div>
          <div>Choosed: {{ carts.qty }}</div>
          <div>Product Price: {{ carts.price }}$</div>
        </div>
        <div class="total">Total: {{ total }}$</div>
      </div>
    </div>
</template>