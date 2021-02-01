<template>
  <div class="orders-form">
    <form action="" @submit.prevent="onSubmit">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions" />
      <div class="d-flex justify-content-end mt-3 pr-4">
        <button type="submit" class="btn btn-primary btn-lg">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import OrdersService from "../services/OrdersService";
import VueFormGenerator from "vue-form-generator";
import { validators } from "vue-form-generator";
import swal from "sweetalert";

export default {
  name: "OrderForm",
  data() {
    return {
      model: {
        client_name: '',
        client_phone: '',
        info_day: Date.now(),
        info_table_num: 0,
        info_persons_count: 0
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Name',
            model: 'client_name',
            placeholder: 'Your name',
            required: true,
            validator: validators.string
          },
          {
            type: 'tel-input',
            label: 'Phone number',
            model: 'client_phone',
            required: true
          },
          {
            type: 'input',
            inputType: 'date',
            label: 'Order date',
            model: 'info_day',
            validator: validators.date,
            required: true
          },
          {
            type: "input",
            inputType: "number",
            label: "Table number",
            model: "info_table_num",
            max: 10,
            value: '',
            placeholder: 0,
            required: true,
            validator: validators.number
          },
          {
            type: "input",
            inputType: "number",
            label: "Persons count",
            model: "info_persons_count",
            max: 4,
            value: '',
            placeholder: 0,
            required: true,
            validator: validators.number
          }
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  },
  components: {
    "vue-form-generator": VueFormGenerator.component
  },
  methods: {
    async onSubmit () {
      console.log(this.model)
      await OrdersService.createOrder({
        client: {
          name: this.model.client_name,
          phone_number: this.model.client_phone
        },
        info: {
          day: this.model.info_day,
          table_num: this.model.info_table_num,
          persons_count: this.model.info_persons_count,
          creation_time: Date.now()
        }
      })
      await swal(
          'Great!',
          `Your order has been created!`,
          'success'
      )
      location.reload();
    }
  }
}
</script>

<style scoped>

</style>