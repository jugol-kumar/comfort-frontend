<!-- CookiePopup.vue -->
<template>
  <div v-if="showPopup" class="cookie-popup">
    <p>We use cookies to improve your experience. By continuing, you agree to our use of cookies.</p>
    <button @click="acceptCookies">Accept</button>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      showPopup: false
    }
  },
  mounted() {
    this.checkCookie();
  },
  methods: {
    checkCookie() {
      const cookieAccepted = this.$cookies.get('cookieAccepted');
      if (!cookieAccepted) {
        this.showPopup = true;
      } else {
        const lastVisit = new Date(this.$cookies.get('lastVisit'));
        const today = new Date();
        const timeDifference = today - lastVisit;
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        if (daysDifference >= 1) {
          this.showPopup = true;
        }
      }
    },
    acceptCookies() {
      const today = new Date();
      const expiryDate = new Date(today);
      expiryDate.setDate(today.getDate() + 1);
      this.$cookies.set('cookieAccepted', true, expiryDate);
      this.$cookies.set('lastVisit', today, expiryDate);
      this.showPopup = false;
    }
  }
}
</script>

<style scoped>
.cookie-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 10px;
}
.cookie-popup button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
