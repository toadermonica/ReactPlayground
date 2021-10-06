import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <Link class="nav-bar-element" href="/about">About</Link>
            <Link class="nav-bar-element" href="/">Home</Link>
            <Link class="nav-bar-element" href="/other">Other Stuff!</Link>
        </nav>
    );
}
 
export default NavBar;