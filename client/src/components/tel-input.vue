<template>
  <vue-tel-input v-model="value"></vue-tel-input>
</template>

<script>
import { abstractField } from 'vue-form-generator';

export default {
  name: 'TelephoneInput',
  mixins: [abstractField]
};
</script>