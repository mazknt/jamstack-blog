import Image from "next/image"
import Link from "next/link"
import  HeaderStyle  from "../../../styles/Header/Header.module.css"

export const Header = () => {
    
    return (
        <header className={HeaderStyle.header}>
            <div><Link href="/"><Image width={146.67} height={20} src="/logo.png" /></Link></div>
            <div>
            <ul>
            <Link href="/"><li>HOME</li></Link>
            <Link href="#"><li>WORKS</li></Link>
            <Link href="/member"><li>MEMBER</li></Link>
            <Link href="gears"><li>GEAR</li></Link>
            </ul>
            </div>
        </header>
    )
}