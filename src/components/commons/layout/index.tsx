import Footer from "./footer/footer.container";
import Header from "./header/header.container"
import Banner from "./banner/banner.presenter";
import { useRouter } from "next/router";
interface LayoutProps{
    children: JSX.Element;
}
export default function Layout(props:LayoutProps){
    const router = useRouter()
    const HIDDEN_BANNER = ['/review/new',`/review/${router.query.reviewId}/edit`,'/joinus','/signup']
    const HIDDEN_HEADER = ['/joinus','/signup']
    const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath)
    const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath)
    return(
        <>
            {!isHiddenHeader && <Header />}
            {!isHiddenBanner && <Banner />}
             <div style={{marginTop:"130px"}} >{props.children}</div>
            <Footer />
        </>
    )
}