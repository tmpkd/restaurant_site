<template>
  <div class="orders">
    <h1>Edit Order</h1>
    <div class="form">
      <div>
        <input v-model="client.name" id="name" pattern="\w+" type="text" required>
      </div>
      <div>
        <input v-model="client.phone_number" id="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" required>
      </div>
      <div>
        <input v-model="info.day" id="day" type="date" required>
      </div>
      <div>
        <input v-for="table in config.tables_count" :key="table" v-model="info.table_num" id="table_num" type="button" :value="table">
      </div>
      <div>
        <button class="update_order_btn" @click="updateOrder">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import OrdersService from "./services/OrdersService";

export default {
  name: 'edit_order',
  data () {
    return {
      config: require('./config/config'),
      client: {
        name: null,
        phone_number: null
      },
      info: {
        day: null,
        table_num: null,
        persons_count: null
      }
    }
  },
  mounted () {
    this.getOrder()
  },
  methods: {
    async getOrder() {
      const response = await OrdersService.getOrder({
        id: this.$route.params.id
      })
      this.client = response.data.client
      this.info = response.data.info
      // this.$router.push({ name: 'Orders' })
    },
    async updateOrder () {
      await OrdersService.updateOrder({
        id: this.$route.params.id,
        client: this.client,
        info: this.info
      })
      this.$swal(
          'Great!',
          `Your order has been updated!`,
          'success'
      )
      this.$router.push({ name: 'Orders' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.update_order_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>