import { 
    Login,
    Base,
    Behavior,
    Model,
    Search,} from "../views"

export const mainRoute = [
    {
        pathname:"/login",
        component:Login
    }
]
export const adminRoute =[
    {
        pathname:'/home/base',
        component:Base
    },
    {
        pathname:'/home/model',
        component:Model
    },
    {
        pathname:'/home/search',
        component:Search
    },
    {
        pathname:'/home/behavior',
        component:Behavior
    }
]