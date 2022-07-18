<template>
    <section id="landing " >
        <div class="row min-vh-100 bg-gradient">
            <img :src="this.$store.state.profiles[0].url" alt="joel"/>
        </div>
        <div class="row">
            <div class="wrapper col-md bg-transparent">
              <div class="row d-flex justify-content-center align-content-center">
                <div class="col-md-10 typing-wrapper">
                  <h2 class="display-2">I'am</h2>
                  <h2 class="display-2 typing">{{letter}}</h2>
                </div>
              </div>
            </div>        
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
        
    }
  },
  methods: {
    /*funcTyping: () =>{
        if(cnt > jobTitle.length ){
            // reset cnt
            this.cnt = 0;
            console.log("star over");
        }
        title = jobTitle[this.cnt];
        letter = title.length > 0 ? title.slice(0, ++index):
        title = jobTitle[cnt];
        //
        // document.querySelector('.typing').innerText = letter;
        if(letter.length == title.length) {
            cnt++;
            index = 0;
        }
        setTimeout(funcTyping, 200);
    }*/
  },
  mounted() {
   // this.funcTyping();
  }
}
</script>

<style scoped>
    /* Landing */
    #landing img{
        scroll-margin: 1px;
        box-shadow: 2vw 2vw 3vw rgba(159, 158, 155, 0.3),
        1vw 2vw 2vw rgba(174, 174, 168, 0.4);
    }
    /* Typing animation */
    .typing-wrapper {
        display: flex
    }
    /* h2.typing */
    .typing {
        margin-left: .2em;
        position: relative;
    }
    .typing::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 90%;
        border-right: 1px solid green;
        background-color: rgb(103, 119, 119);
        animation: typing-animation 1s infinite;
    }
    /* typing - animation */
    @keyframes typing-animation {
        0%{
            opacity: 0;
        }   
        100% {
            opacity: 1;
        }
    }
</style>