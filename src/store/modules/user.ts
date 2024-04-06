import { defineStore } from 'pinia'

import type { loginForm, loginResponseData } from '../../api/user/type'
import type { UserState } from '../modules/types/types'

import { reqLogin } from '../../api/user'

let useUserStore = defineStore('User', {
    state: ():UserState => {
        return {
            token: localStorage.getItem("TOKEN") || "",
        }
    },
    actions: {
        async userLogin(data:loginForm){
            let res:loginResponseData = await reqLogin(data)
            if(res.code == 200){
                this.token = (res.data.token as string)
                localStorage.setItem('TOKEN', (res.data.token as string))
                return 'success'
            }else {
                return Promise.reject(new Error(res.data.message))
            }
        }
    },
    getters: {

    }
})
export default useUserStore;