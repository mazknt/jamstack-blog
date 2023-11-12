import { Header } from "../molecules/Header"

export const HeaderOnly = (props) => {
    const { children } = props
  return (
    <>
    <Header />
    {children}
    </>
  )
}
