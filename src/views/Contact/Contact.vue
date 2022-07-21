<template>
  <div class="container">
    <h2 class="display-2">Contact</h2>
    <form class="contact-form form" action="https://formspree.io/f/xeqnyzok" method="POST" target="_blank">
      <div class="row">
        <input class="form-control text-center" type="text" placeholder="Name" required name="firstname" v-model="removeLastChar"
        @focus="focusHandle"/>
      </div>
      <div class="row my-2">
        <input class="form-control text-center" type="text" placeholder="Surname" required name="surname" />
      </div>
      <div class="row">
        <input class="form-control text-center" type="email" placeholder="Email" required name="email"/>
      </div>
      <div class="row my-2">
        <textarea class="text-center" placeholder="Enter your message" name="message"></textarea>
      </div>
      <div class="row">
          <button class="btn btn-primary">Submit
            <i class="bi bi-send-slash-fill"></i>
          </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      removeLastChar: ''
    }
  },
  methods: {
    focusHandle() {
      this.removeLastChar = this.removeLastChar.slice(0, -1);
    }
  }

}
</script>
