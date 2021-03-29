<template>
<section class="cont">
   <p>커스텀 인풋 세트를 만들어주세요. (Input 은 text, password, email 로 묶어 주시고 각각의 컴포넌트로 구현, selectbox와 textarea 포함)</p>



   <input-custom
    
   ></input-custom>
</section>
</template>

<script>
import InputCustom from './InputCustom.vue'
export default {
   components: {
      InputCustom
   },
   name: 'Style'
}
</script>

<style lang="scss" scoped>
.cont {
   display: block;
   background-color: #d6f3f7;
}
</style>
