<template>
  <div class="orders-form">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions" />
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import { validators } from "vue-form-generator";
import OrdersService from "@/services/OrdersService";
import swal from "sweetalert";

export default {
  name: "OrderForm",
  data() {
    return {
      model: {
        client: {
          name: null,
          phone_number: null
        },
        info: {
          day: new Date(Date.now()).setHours(0, 0, 0,0),
          table_num: null,
          persons_count: null,
          creation_time: Date.now()
        }
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Name',
            model: 'client.name',
            placeholder: 'Your name',
            required: true,
            validator: validators.string
          },
          {
            type: 'tel-input',
            label: 'Phone number',
            model: 'client.phone_number',
            required: true
          },
          {
            type: 'input',
            inputType: 'date',
            label: 'Order date',
            model: 'info.day',
            validator: validators.date,
            required: true
          },
          {
            type: "input",
            inputType: "number",
            label: "Table number",
            model: "info.table_num",
            min: 1,
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
            model: "info.persons_count",
            min: 1,
            max: 4,
            value: '',
            placeholder: 0,
            required: true,
            validator: validators.number
          },
          {
            type: "submit",
            buttonText: "Submit",
            validateBeforeSubmit: true,
            async onSubmit(model) {
              console.log(model)
              console.log(window)
              console.log(window.is_editing)
              if (window.is_editing) {
                await OrdersService.updateOrder({
                  id: window.params_id,
                  client: model.client,
                  info: model.info
                })
                await swal(
                    'Great!',
                    `Your order has been updated!`,
                    'success'
                )
                await window.router.push("/orders")
              }
              else {
                await OrdersService.createOrder({
                  client: model.client,
                  info: model.info
                })
                await swal(
                    'Great!',
                    `Your order has been created!`,
                    'success'
                )
                await window.router.push("/")
              }
            }
          }
        ]
      },
      formOptions: {
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  },
  components: {
    "vue-form-generator": VueFormGenerator.component
  },
  mounted () {
    window.router = this.$router
    if (this.$route.params.id !== undefined) this.getOrder()
  },
  methods: {
    async getOrder() {
      const response = await OrdersService.getOrder({
        id: this.$route.params.id
      })
      this.model.client = response.data.client
      this.model.info = response.data.info
      window.is_editing = true
      window.params_id = this.$route.params.id
    }
  },
  beforeMount() {
    console.log(this.params)
  }
}
</script>

<style scoped>

</style>