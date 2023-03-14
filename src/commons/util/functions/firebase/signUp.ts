import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, DB } from "../../../../../pages/_app"
import { checkEmail, checkPassword, passwordEnglishValidation, passwordValidation } from "../validation"
import { 
    collection,
    addDoc,
 } from "firebase/firestore";

interface JoinusParams {
    email : string;
    password : string;
    passwordCheck:string;
}

export const joinUsEmail = async ({email,password,passwordCheck}:JoinusParams)=>{
    const emailChek = checkEmail(email)
    const passwordcheck = checkPassword(password,passwordCheck)
    const includesNumber = await passwordValidation(password)
    const IncludesEnglish = await passwordEnglishValidation(password)
    let userUID = ""
    let otherDataId = ""
    if(emailChek!==false&&passwordcheck!==false&&includesNumber&&IncludesEnglish){
        try{
            const createUser = await createUserWithEmailAndPassword(auth ,email, password)
            // 회원가입 후 추가적인 유저데이터 넣어주기 - 안정성을 위해 기본 User info와 분리
            userUID = createUser.user.uid;
            const OtherData = {
                [userUID] : {
                    payment : 0,
                    program : '신청하신 프로그램이 없습니다.',
                    point : 0,
                    phoneNumber: ''
                }
            }
            const userOtherData = await addDoc(collection(DB,'user'),OtherData)
            otherDataId = userOtherData.id
            alert("회원가입을 축하드립니다.")
            return {
                userUID,
                otherDataId}
        } catch(error){
            console.log(error)
        }
    }
    return {
        userUID,
        otherDataId
    }
}