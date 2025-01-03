import Head from "next/head";
import { MypageEditPresenter } from "./myPageEdit.types";
import * as S from './myPageEdit.style'
import {Img} from '../myPage/myPage.style'

export default function MyPageEditUI(props:MypageEditPresenter){
    const tilteArr = ['displayName','email','phoneNumber']
    console.log(props.getUserInfo?.photoUrl,props.image)
    return(
        <>
            <Head>
            <meta name="description" content="내 포트폴리오가 번번히 떨어지는 이유가 궁금하다면? 핏!해봐." />
                <meta name="veiwport " content="width=device-width, initial-scale=1.0" />
                <title> 내정보 수정 | fitable</title>
            </Head>
                <S.Title> 회원정보 수정 </S.Title>
                <S.Container>
                    <S.MiniWrapTop>
                        <S.ProfileImg> 프로필</S.ProfileImg>
                        <S.ResultImg>
                            { props.getUserInfo?.photoUrl ? <Img src={ props.image.length > 0 ? props.image[props.image.length-1] : props.getUserInfo?.photoUrl } /> : <Img src={ props.image.length > 0 ? props.image[props.image.length-1] : '/noneimg.jpeg'}/> }
                        </S.ResultImg>
                        <S.ImgWrap>
                            <S.ImgInput htmlFor="photoURL"> upload </S.ImgInput>
                            <input id="photoURL" type="file" onChange={props.uploadImage} hidden/>
                        </S.ImgWrap>
                    </S.MiniWrapTop>
                    { tilteArr.map((item,index)=>(
                            <S.MiniWrap key={index}>
                            <S.H1><S.Span>*</S.Span> {item==='email' && '이메일'}{item==='displayName' && '이름'}{item==='phoneNumber' && '전화번호'}</S.H1>
                            <S.Input id={item} type="text" onChange={props.onChangeInput} defaultValue={item==='phoneNumber' ? props.getUserData?.[0]?.[item] : props.getUserInfo?.[item]}/>
                            </S.MiniWrap>
                        )) }
                    <S.BtWrap>
                        <S.SubmitBt onClick={props.onClickUpdateProfile}>수정하기</S.SubmitBt>
                        <S.CancelBt onClick={props.routerhook('/mypage')}>취소하기</S.CancelBt>
                    </S.BtWrap>
                </S.Container>
        </>
    )
}