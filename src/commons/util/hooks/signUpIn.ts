import { ChangeEvent,useEffect,useState } from "react"
import { loggedInUser } from "../functions/firebaseFunctions"
import { passwordValidation } from "../functions/validation"

// 로그인/회원가입 input 값 끌어오는 함수
export const useGetInputValue = ()=>{
    const [signUpInput, setSignUpInput] = useState({
        email: "",
        password: "",
        passwordCheck:""
    })
    const [passwordBool,setPasswordBool] = useState(false)
    const onChangeInput =(event:ChangeEvent<HTMLInputElement>)=>{
        const signUpInputKey = event.target.id
        setSignUpInput({...signUpInput, [signUpInputKey] :event.target.value})
    }
    // const checkValidation = (event:ChangeEvent<HTMLInputElement>)=>{
    //     const result = passwordValidation(signUpInput.password)
    //     console.log(result)
    // }
    return {
        onChangeInput,
        signUpInput,
        passwordBool
    }
}

// 로그인했는지 확인하는 함수
export const useIsLogInUser = ()=>{
    const [isLoggedInUser,setIsLoggedInUser] = useState(false)
    useEffect(()=>{
        const func = async()=>{
            const result = await loggedInUser()
            if(result){
                setIsLoggedInUser(true)
            }else{
                setIsLoggedInUser(false) 
            }
        }
        func()
    },[isLoggedInUser])
    return isLoggedInUser
}
