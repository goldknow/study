<template>
<section class="cont">

    <p class="hide">커스텀 인풋 세트를 만들어주세요. (Input 은 text, password, email 로 묶어 주시고 각각의 컴포넌트로 구현, selectbox와 textarea 포함)</p>

   <div class="inner">
      <form action="">

         <input-style 
            type="text" 
            id="name"
            placeholder="김아라" 
            disabled="disabled"
         ></input-style>

         <input-style 
            type="text" 
            id="id"
            placeholder="아이디를 입력해주세요" 
            v-model.trim="inputText"
         ></input-style>

         <input-style 
            type="password" 
            id="password"
            placeholder="비밀번호를 입력해주세요" 
            v-model.trim="inputPassword"
         ></input-style>
         <!-- label none -->
         <input-style 
            type="password" 
            id="password"
            placeholder="비밀번호를 한번 더 입력해주세요" 
            isHide=true
            v-model.trim="inputPassword2"
         ></input-style>

         <input-style 
            type="email" 
            id="email"
            placeholder="이메일을 입력해주세요" 
            v-model.trim="inputEmail"
         ></input-style>


         <!-- select -->


         <!-- textarea -->
         <textarea-style 
            placeholder="요청사항"
            resize="none"
            maxlength="30"
            v-model="inputMessage"
         ></textarea-style>

      </form>

      <div class="result">
         <h3>RESULT</h3>
         <p>아이디 : {{inputText}}</p>
         <p>비밀번호 : {{inputPassword}}</p>
         <p>비밀번호 확인 : {{inputPassword2}}</p>
         <p>이메일 : {{inputEmail}}</p>
         <p>요청사항 : {{inputMessage}}</p>
      </div>

   </div>



</section>
</template>

<script>
import InputStyle from './InputStyle.vue'
import TextareaStyle from './TextareaStyle.vue'

export default {
    name: 'Style',
    components: {
        InputStyle,
        TextareaStyle
    },
    data() {
        return {
           inputText:'',
           inputPassword:'',
           inputPassword2:'',
           inputEmail:'',
           inputMessage:''
        }
    }
}
</script>

<style lang="scss" scoped>
.cont {
    display: block;
    padding: 50px 0;
    text-align: center;
    background-color: #d6f3f7;

    .inner {
        max-width: 450px;
        margin: auto;

        .result {
            margin-top: 20px;
            padding: 30px;
            background-color: #fff;
            border-radius: 15px;
            text-align: left;

            h3 {
               padding-bottom: 20px;
               color: cadetblue;
               font-weight: 700;
            }

            p+p {
               margin-top: 15px;
            }
        }
    }
}
</style>
