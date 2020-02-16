<template>
  <div>
    <span>{{ label }}</span>
    <!-- <input 
    :value="value"
    @input="$emit('input', $event.target.files[0])"
    :type="type"
    /> -->

  <h2>↓画像↓</h2>
  <img v-show="uploadedImage" :src="uploadedImage" />
  <input type="file" @change="onFileChange">
</div>

</template>

<script>
export default {
  props:{
    value:{},
    label:{type:String},
    type: {type:String, default: 'file' },
  },
  data(){
    return{
      uploadedImage: '',
    }
  },
  methods:{
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    // アップロードした画像を表示
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  }
}
</script>