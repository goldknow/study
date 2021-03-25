import Home from "@/components/Home"
import About from "@/components/About"
import Contact from "@/components/Contact"

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
        path:'/Contact',
        component : Contact
    }
]

export default router