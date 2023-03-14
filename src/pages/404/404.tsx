import { NavLink } from "@solidjs/router";

function NotFound() {
    return (
        <div style="margin:12rem 0; min-height:50vh">
            <h2>404</h2>
            <NavLink href="/">Retour en zone connue.</NavLink>
        </div>
    )
}

export default NotFound;