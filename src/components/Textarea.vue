<template>
  <div>
    <span>{{ label }}</span>
    <textarea
    :value="value"
    @input="$emit('input', $event.target.value)"
    >
    </textarea>
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