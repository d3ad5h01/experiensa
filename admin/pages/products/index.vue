<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add aaaa new product</h2>
            <form action>
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option" v-model="categoryID">
                  <option
                    v-for="category in categories"
                    :value="category._id"
                    :key="category._id"
                  >
                    {{ category.type }}
                  </option>
                </select>
              </div>

              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option" v-model="ownerID">
                  <option
                    v-for="owner in owners"
                    :value="owner._id"
                    :key="owner._id"
                  >
                    {{ owner.name }}
                  </option>
                </select>
              </div>

              <!-- Title Input-->
              <div class="a-spacing-top-medium">
                <label style="margin-botton: 0px">Title</label>
                <input
                  type="text"
                  class="a-input-text"
                  v-model="title"
                  style="width: 100%"
                />
              </div>

              <!-- Price Input-->
              <div class="a-spacing-top-medium">
                <label style="margin-botton: 0px">Price</label>
                <input
                  type="text"
                  class="a-input-text"
                  v-model="price"
                  style="width: 100%"
                />
              </div>

              <!-- StockQuantity Input-->
              <div class="a-spacing-top-medium">
                <label style="margin-botton: 0px">Stock Quantity</label>
                <input
                  type="text"
                  class="a-input-text"
                  v-model="stockQuantity"
                  style="width: 100%"
                />
              </div>

              <!-- Description Textarea-->
              <div class="a-spacing-top-medium">
                <label style="margin-botton: 0px">Description</label>
                <textarea
                  v-model="description"
                  placeholder="Provide details such as a product description"
                  style="width: 100%"
                ></textarea>
              </div>

              <!-- Photo File
              <div class="a-spacing-top-medium">
                <label style="margin-botton: 0px;">Add Photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected" />
                    <p style="margin-top: -70px">{{ fileName }}</p>
                  </label>
                </div>
              </div>-->

              <!-- Submit Button -->
              <hr />
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onAddProduct"
                      >Add product</span
                    >
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let categories = $axios.$get("http://localhost:3000/api/categories");
      let owners = $axios.$get("http://localhost:3000/api/owners");

      const [catResponse, ownerResponse] = await Promise.all([
        categories,
        owners
      ]);

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners
      };
    } catch (err) {
      console.log(err);
    }
  },

  data() {
    return {
      categoryID: null,
      ownerID: null,
      title: "",
      price: 0,
      stockQuantity: 1,
      description: ""
    };
  },

  methods: {
    async onAddProduct() {
      let data = {
        categoryID: this.categories,
        title: this.title,
        ownerID: this.ownerID,
        price: this.price,
        stockQuantity: this.stockQuantity,
        description: this.description
      };

      let result = await this.$axios.$post(
        "http://localhost:3000/api/products",
        data
      );

      this.$router.push("/");
    }
  }
};
</script>
