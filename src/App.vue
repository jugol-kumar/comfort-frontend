<template>
  <!-- Page content -->
  <GetInTach/>
  <Header/>
    <main class="min-vh-100">
      <RouterView></RouterView>
    </main>
  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import PreLoader from "@/components/PreLoader.vue";
import GetInTach from "@/components/GetInTachPopup.vue"
import { useAuthStore } from "./stores/useAuthStore";
import { onMounted } from "vue";

const authStore = useAuthStore();

onMounted(async ()=>{
  console.log("app mounted")
  await authStore.fetchUser();
})

</script>