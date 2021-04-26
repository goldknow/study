import Home from "@/views/Home"
import About from "@/views/About"
import Contact from "@/views/Contact"
import Gallery from "@/views/Gallery"
import Todo from "@/views/Todo"

const router = [
    {
        path:'./',
        component : Home
    },
    {
        path:'./About',
        component : About
    },
    {
        path:'./Contact',
        component : Contact
    },
    {
        path:'./Gallery',
        component : Gallery
    },
    {
        path:'./Todo',
        component : Todo
    }
]

export default router