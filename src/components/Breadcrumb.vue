<script setup>
    const {data} = defineProps({
        data:{
            type:Object,
            required:true
        }
    })
</script>

<template>
    <nav aria-label="breadcrumb" class="my-4">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/" class="fs-4 primary-color">Home</RouterLink></li>
            <li class="breadcrumb-item active fs-4" aria-current="page">{{ data?.title }}</li>
        </ol>
    </nav>
</template>