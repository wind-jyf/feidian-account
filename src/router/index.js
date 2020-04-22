import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            meta:{title:'登录'},
            component:()=>import('../views/Login/Login.vue')
        },
        {
            path:'/register',
            meta:{title:'注册'},
            component:()=>import('../views/Register/Register.vue')
        },
        {
            path:'/index',
            meta:{title:'账户中心'},
            component:()=>import('../views/Index/Index.vue')
        },
        {
            path:'/person',
            meta:{title:'个人中心'},
            component:()=>import('../views/Person/Person.vue')
        },
        {
            path:'/change',
            meta:{title:'修改基本信息'},
            component:()=>import('../views/Change/Change.vue')
        },
        {
            path:'/operator',
            meta:{title:'管理员中心'},
            component:()=>import('../views/Operator/Operator.vue')
        },
        {
            path:'/audit',
            meta:{title:'审核成员'},
            component:()=>import('../views/Audit/Audit.vue')
        }
    ]
})


router.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    if(to.path=='/index'){
        let token=localStorage.getItem('Authorization');
        if(token===null||token==''||token==undefined){
            console.log(token);
          next('/login')
        }else{
          next();
        }
      }else{
        next()
      }
})

/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
      router.replace(targetPath);
    }
  });
  

export default router