<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Update {{ product.title }}</h2>
            <form action>
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option" v-model="categoryID">
                  <option
                    v-for="category in categories"
                    :value="category._id"
                    :key="category._id"
                    >{{ category.type }}</option
                  >
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
                    >{{ owner.name }}</option
                  >
                </select>
              </div>

              <!-- Title Input-->
              <div class="a-spacing-top-medium">
                <label style="margin-botton: 0px;">Title</label>
                <input
                  type="text"
                  class="a-input-text"
                  v-model="title"
                  style="width: 100%"
                  :placeholder="product.title"
                />
              </div>

              <!-- Price Input-->
              <div class="a-spacing-top-medium">
                <label style="margin-botton: 0px;">Price</label>
                <input
                  type="text"
                  class="a-input-text"
                  v-model="price"
                  style="width: 100%"
                  :placeholder="product.price"
                />
              </div>

              <!-- StockQuantity Input-->
              <div class="a-spacing-top-medium">
                <label style="margin-botton: 0px;">Stock Quantity</label>
                <input
                  type="text"
                  class="a-input-text"
                  v-model="stockQuantity"
                  style="width: 100%"
                  :placeholder="product.stockQuantity"
                />
              </div>

              <!-- Description Textarea-->
              <div class="a-spacing-top-medium">
                <label style="margin-botton: 0px;">Description</label>
                <textarea
                  v-model="description"
                  :placeholder="product.description"
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
              </div> -->

              <!-- Submit Button -->
              <hr />
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onUpdateProduct"
                      >Update product</span
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
  async asyncData({ $axios, params }) {
    try {
      let categories = $axios.$get("http://localhost:3000/api/categories");
      let owners = $axios.$get("http://localhost:3000/api/owners");
      let product = $axios.$get(
        `http://localhost:3000/api/products/${params.id}`
      );

      const [catResponse, ownerResponse, productResponse] = await Promise.all([
        categories,
        owners,
        product
      ]);

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        product: productResponse.product
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
      price: "",
      stockQuantity: "",
      description: "",
      selectedFile: null,
      fileName: ""
    };
  },

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },

    async onUpdateProduct() {
      let data = {
        categoryID: this.categories,
        title: this.title,
        ownerID: this.ownerID,
        price: this.price,
        stockQuantity: this.stockQuantity,
        description: this.description
      };

      let result = await this.$axios.$put(
        `http://localhost:3000/api/products/${this.$route.params.id}`,
        data
      );

      this.$router.push("/");
    }
  }
};
</script>
