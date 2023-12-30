import { defineStore } from 'pinia'
import {ref, computed} from "vue"
import useAxios from "@/composables/useAxios";
const {loading,error,sendRequest,} = useAxios();

export const useAuthStore = defineStore('auth', ()=>{
    const user = ref(null)
    const isLoggedIn = computed(() => !! user.value)

    async function fetchUser(){
        const token = await getLocalStoreage();
        const data = await sendRequest({
            method: 'get',
            url: "/api/user",
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        user.value = data?.data
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

        await setLocalStoreage(login.data?.data?.token)
        user.value = login.data?.data

        return login;
    }

    async function signup(signupData){
        const singup = await sendRequest("/register")
        console.log(singup)
        return singup;
    }

    async function logout(){
        await sendRequest("/logout")
        // navigateTo('/')
    }

    async function setLocalStoreage(token){
        localStorage.setItem('token', token);
    }
    
    async function clearLocalStoreage(){
        localStorage.removeItem('token');
    }
    
    async function getLocalStoreage(){
        return localStorage.getItem('token');
    }


    return {user, login, signup, isLoggedIn, fetchUser, logout, loading, error, getLocalStoreage}

})