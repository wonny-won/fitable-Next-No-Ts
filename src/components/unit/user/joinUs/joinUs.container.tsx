import JoinUsUI from "./joinUs.presenter";
import { useRoutingPageHooks } from "../../../../commons/util/hooks/routing"
import { useGetInputValue } from "../../../../commons/util/hooks/signUpIn";
import { logIn } from "../../../../commons/util/functions/firebaseFunctions";
import { useRecoilState } from "recoil";
import { accessToken } from "../../../../commons/util/recoilAtom/atom";

export default function JoinUs(){
    const [token,setToken] = useRecoilState(accessToken)
    const routing = useRoutingPageHooks()
    const { onChangeInput,signUpInput } = useGetInputValue()
    const onClickLogIn = async ()=>{
        const result = await logIn(signUpInput)
        const accessToken = result?.user?.accessToken
        setToken(accessToken)
    }

    return <JoinUsUI router={routing} 
                     onClickLogIn={onClickLogIn}
                     onChangeInput={onChangeInput}/>
}