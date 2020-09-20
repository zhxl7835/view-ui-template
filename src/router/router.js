import HelloWorld from '@/components/HelloWorld'
export default [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/view/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/view/About')
  },
  {
    path: '/argu/:name',
    name: 'Argu',
    component: () => import('@/view/Argu')
  },
  {
    path:'/parent',
    name:parent,
    component: () => import('@/view/Parent'),
    children:[
      {
        path:'child',
        name:'Child',
        component: () => import('@/view/Child')
      }
    ]
  }
]
