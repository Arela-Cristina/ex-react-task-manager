import { Outlet } from "react-router";
import MenuNav from './component/MenuNav'


export default function Index() {

    return (
        <section>
            <MenuNav />
            <Outlet />
        </section>


    )

}