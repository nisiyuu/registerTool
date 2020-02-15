<template>
  <div>
    <span>{{ label }}</span>
    <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    :type="type"
    />
  </div>
</template>

<script>
export default {
  props:{
    value:{},
    label:{type:String},
    type: {type:String, default: 'text' },
  },
  methods:{
  }
}
</script>
