import Vue from 'vue'

import VeeValidate from 'vee-validate'

import zh_TW from 'vee-validate/dist/locale/zh_TW'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_TW',{
    messages:{
        ...zh_TW.messages,
    },
    attributes:{
        veeEmail:'信箱',
        veePwd:'密碼',
        veeRepwd:'確認密碼',
        veebox:'協議'
    }
})

// 自訂義
VeeValidate.Validator.extend('agree',{
    validate:value => value,
    getMessage:field => field + '必須同意'
})