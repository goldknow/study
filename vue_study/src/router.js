import Home from "@/components/Home"
import About from "@/components/About"
import Style from "@/components/Style"

const router = [
    {
        path:'/',
        component : Home
    },
    {
        path:'/About',
        component : About
    },
    {
        path:'/Style',
        component : Style
    }
]

export default router