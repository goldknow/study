import Home from "@/views/Home"
import About from "@/views/About"
import Contact from "@/views/Contact"

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