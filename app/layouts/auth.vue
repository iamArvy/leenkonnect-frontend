<script setup lang="ts">
import authImage from '@/assets/images/signup.jpg'
const registerData = {
    title: "Sign Up",
    description: "Enter your details to create an account",
    img: authImage
}

const loginData = {
    title: "Log In",
    description: "Enter your email below to login to your account",
    img: authImage
}
const { name } = useRoute()

const { title, description, img } = name === 'auth-login' ? loginData : registerData

</script>
<template>
    <div class="w-full min-h-screen flex items-center justify-center lg:grid grid-cols-2 bg-[url('/images/signup.jpg')] lg:bg-none bg-cover overflow-hidden"
        :class="`bg-[url('${img}')]`">
        <div class="p-6 rounded-2xl flex flex-col items-center justify-center bg-white bg-opacity-40 m-1">
            <div class="mb-4 text-primary text-center flex flex-col gap-1">
                <h1 class="font-bold text-2xl md:text-[26px] lg:text-[32px]">{{ title }}</h1>
                <p class="text-sm md:text-base lg:text-[18px]">{{ description }}</p>
            </div>
            <slot />
        </div>
        <div
            class="bg-[url('/images/signup.jpg')] h-full hidden lg:flex bg-cover bg-center items-center text-center justify-center">
            <p class="text-white text-[40px] font-bold">Welcome <br /> to <br /> Leenkonnect</p>
        </div>
    </div>
</template>