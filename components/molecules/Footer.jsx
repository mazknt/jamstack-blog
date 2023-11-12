import Image from "next/image"
import Link from "next/link"
import  FooterStyle   from "../../styles/Footer/Footer.module.css"
export const Footer = () => {
    
  return (
    <div className={FooterStyle.footerWrapper}>
        <div className={FooterStyle.footerContents}>
            <div className={FooterStyle.footerLeft}>
                <Image width={293.33} height={40} src="/footer_logo.png"/>
                <div className={FooterStyle.snsIcons}>
                    <Image width={30} height={30} src="/mdi_twitter.png"/>
                    <Image width={30} height={30} src="/mdi_instagram.png"/>
                </div>
            </div>
            <ul className={FooterStyle.footerMenuList}>
                <li className={FooterStyle.footerMenu}><Link href="/">HOME</Link></li>
                <li className={FooterStyle.footerMenu}><Link href="#">WORKS</Link></li>
                <li className={FooterStyle.footerMenu}><Link href="/">MEMBER</Link></li>
                <li className={FooterStyle.footerMenu}><Link href="#">GEAR</Link></li>
            </ul>
        </div>
        <div className={FooterStyle.footerCopyRight}>
        <span>©2023 taplicotto. </span>
        </div>
    </div>
  )
}
