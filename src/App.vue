<template>
  <!-- Page content -->
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
</script>