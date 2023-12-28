import { defineStore } from 'pinia'
import {ref, computed} from "vue"
import useAxios from "@/composables/useAxios";
const {loading,error,sendRequest,} = useAxios();

export const useAuthStore = defineStore('auth', ()=>{
    const user = ref(null)
    const isLoggedIn = computed(() => !! user.value)

    async function fetchUser(){
        const data = await sendRequest({
            method: 'get',
            url: "/api/user",
        })
        user.value = data?.value
    }

    async function login(credential){
        await sendRequest({
            method: 'get',
            url: "/sanctum/csrf-cookie",
        })

        const login = await sendRequest({
            method:"POST",
            url:"/api/login",
            data:credential
        })


        if(login?.data?.status) await fetchUser();

        return login;
    }

    async function signup(signupData){
        const singup = await sendRequest("/register")
        console.log(singup)
        // await fetchUser();
        return singup;
    }

    async function logout(){
        await sendRequest("/logout")
        // navigateTo('/')
    }

    return {user, login, signup, isLoggedIn, fetchUser, logout, loading, error}

})