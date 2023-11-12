import { Footer } from "../molecules/Footer"
import { Header } from "../molecules/Header"

export const DefaultLayout = (props) => {
    const { children } = props
  return (
    <>
    <Header/>
    {children}
    <Footer />
    </>
  )
}

export default DefaultLayout