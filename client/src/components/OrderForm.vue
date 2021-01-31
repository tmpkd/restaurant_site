<template>
  <div class="orders-form">
    <form @submit.prevent="sendData">
      <div class="form-control">
        <label for="name">Name</label>
        <input v-model="client.name" id="name" pattern="\w+" type="text" required>
      </div>
      <div class="form-control">
        <label for="phone_number">Phone number</label>
        <input v-model="client.phone_number" id="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" required><p>Format: 123-456-7890</p>
      </div>
      <div class="form-control">
        <label for="day">Date</label>
        <input v-model="info.day" id="day" type="date" required>
      </div>
      <div class="form-control">
        <label for="table_num">Table number</label>
        <input v-for="table in 10" :key="table" v-model="info.table_num" id="table_num" type="button">
      </div>
      <input type="submit" class="send" value="Send">
    </form>
  </div>
</template>

<script>
import OrdersService from "../services/OrdersService";

export default {
  name: "OrderForm",
  data() {
    return {
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
  methods: {
    async createOrder () {
      await OrdersService.createOrder({
        client: this.client,
        info: this.info
      })
      this.$swal(
          'Great!',
          `Your order has been created!`,
          'success'
      )
      this.$router.push({ name: 'Orders' })
    }
  }
}
</script>

<style scoped>
.form-control {
  padding: 5px;
}
.form-control label {
  display: block;
}
.send {
  margin: 5px
}
</style>