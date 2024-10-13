import {Router} from "vue-router";

export default {
    init: function (router: Router) {
        // @ts-ignore
        window.codeChanged = (code) => {
            if (code === 'index') {
                router.replace('/')
            }else if(code === 'detail') {
                router.replace('/detail/:name')
            }
        }
    }
}