<template>
  <div class="container">
    <form class="review-form" @submit.prevent="onSubmit">
      <div class="form-right">
        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name" placeholder="name" />
        </p>
        <p>
          <label for="review">Review:</label>
          <textarea id="review" v-model="review"></textarea>
        </p>
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </div>
      <div v-for="review in reviews" v-bind:key="review.name">
        <span>{{ review.name }}</span>
        <span>{{ review.rating }}</span>
        <span>{{ review.review }}</span
        ><br />
      </div>
      <div v-if="errors.length" class="form-left">
        <b> Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Review",
  data() {
    return {
      review: null,
      rating: null,
      name: null,
      errors: [],
      reviews: []
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        //GET VALUE NAME, REVIEW, RATING
        this.reviews.push({
          name: this.name,
          review: this.review,
          rating: this.rating
        });
      } else {
        if (!this.name) this.errors.push("Name Required.");
        if (!this.review) this.errors.push("Review Required.");
        if (!this.rating) this.errors.push("Rating Required.");
      }
      reviews.length =0;
    }
  },
  computed: {
    show() {
      return this.reviews;
    }
  }
};
</script>
<style scoped>
.form-right {
  width: 100%;
  margin-top: 10px;
  float: left;
}
.form-right {
  border: 1px solid black;
}
span {
  margin-left: 5px;
}
</style>
