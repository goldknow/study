import Home from "@/views/Home"
import About from "@/views/About"
import Contact from "@/views/Contact"
import Gallery from "@/views/Gallery"

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
    },
    {
        path:'/Gallery',
        component : Gallery
    }
]

export default router