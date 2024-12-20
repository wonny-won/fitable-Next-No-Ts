# [ 🌱fitable ]
**↗️ 방문하기**(https://fitable.online/)

---

# 💡 Background

온라인/인프런 멘토링 중 수강생들이 가장 많은 요청을 하기도 했고, 많은 도움이 되었다는 것에 아이디어를 얻어 **나의 포트폴리오와 이력서를 피드백해주는 사이트 🌱fitable이 탄생하게 되었습니다.**

### 아이템 설명

개발자의 포트폴리오를 페이지 단위와 기능단위로 나눠 한페이지 또는 기능 하나의 코드에 대한 피드백을 받을 수 있도록 합니다.
또한 전체 페이지를 빠르게 훑고, 전반적 방향성에 대한 피드백 또한 받을 수 있습니다.
이외에도 이력서 관련한 피드백을 받을 수 있습니다.

### 서비스 목표

1. 내 포트폴리오 코드 또는 이력서를 첨삭받고 더 나은 방향성으로 포트폴리오 혹은 이력서를 발전시키는 것.
2. 서비스 이용자들이 해당 프로그램에 대한 리뷰를 남겨 다른 사람들과 공유할 수 있는 것.

### 주요 이용자

이직 또는 취업을 원하는 신입 혹은 주니어 개발자

---

# 🛠 Development

### ✨ **Front-end ✨**

**유지보수, 확장, 보안, 성능, 안정성** 5가지를 최우선으로 고려한 프로젝트 입니다.
- **유지보수 / 확장성** <br/>
    1. **유지보수를 고려해 기능 함수 단위로 파일을 분리해 개발** <br/>
    컨테이너 부분은 함수단위로 분리해 코드량을 최대한 줄이며 해당 함수 파일로 찾아가 부분 수정이 빠르게 이뤄질 수 있도록 개발.
        <img width="710" alt="스크린샷 2023-05-22 오전 12 19 18" src="https://github.com/wonny-won/fitable/assets/97152701/f74aa07f-d37d-48a4-af51-85be77429ff4"> <br/><br/>
    2. **재사용,유지보수성을 고려해 공통 함수, 컴포넌트 commons에 개발** <br/>
    공통적으로 사용되는 함수와 컴포넌트는 commons로 분리해두어 재사용성을 높이고 부분 수정이 빠르게 이뤄질 수 있도록 개발.<br/> <br/>
    3. **당장은 재용되지 않지만 나중에라도 재사용 가능성이 있는 함수는 확장성을 고려해 공통으로 분리** <br/>
    payment나 pagination같은 훗날 재사용 가능성이 높은 다양한 쿼리나 함수를 공통으로 빼둠으로써 확장성을 고려해 개발.<br/><br/>
    
- **보안성**
    1. **XSS 공격 대비를 위한 dompurify이용.**<br/>
    react-quill 이용시 XSS공격을 대비해 dompurify를 이용.<br/>
       <img width="1140" alt="스크린샷 2023-05-22 오전 12 29 02" src="https://github.com/wonny-won/fitable/assets/97152701/9d3ab7f8-e9ad-4d1d-bdb9-483cc3ddd93f"><br/><br/>
    2. **유저 데이터 보호를 위해 브라우저 스토리지에 토큰저장 X**<br/>
    로그인 데이터를 브라우저 스토리지에 넣지 않아 토큰노출의 위험성을 줄임. <br/>
        - 로그인 부분은 refreshToken 로직으로 업데이트 할 예정. <br/><br/>

- **프로젝트 성능**
    1. **이미지 업로드 최적화**<br/>
스토리지의 찌거기를 최소화 하기위해 fileReader를 사용 및 스토리지에 업로드 하는 함수를 분리해 게시글 작성 혹은 수정시에 스토리지에 업로드 되도록 개발.<br/>
       <img width="611" alt="스크린샷 2023-05-22 오전 12 31 26" src="https://github.com/wonny-won/fitable/assets/97152701/c57ca056-afeb-4fa8-a276-429661248460">
       <img width="626" alt="스크린샷 2023-05-22 오전 12 31 54" src="https://github.com/wonny-won/fitable/assets/97152701/cd5219f0-4fc9-4680-acb5-6dbe70444def"> <br/><br/>
    2. **react-query를 이용한 캐시이용 및 백/프론트 데이터 분리**<br/>
       react-query를 이용해 백엔드 데이터와 프론트 데이터를 분리하고 캐시를 통해 캐시에서 프레쉬한 캐시를 먼저 받아올 수 있도록 개발.<br/>

    3. **SEO를 위한 시멘틱 태그 적용**<br/>
       검색엔진 최적화를 위한 시멘틱 태그를 적용해 개발하고자 노력(완벽한 마크업은 아니기에 노력중)<br/>

    4. **상황에 따른 비제어 / 제어 컴포넌트 선택**<br/>
        - 리뷰 등록페이지 <br/>
          → 글자수가 많고, 오류가 나도 크게 문제가 되지 않는 페이지이기 때문에 비제어 컴포넌트 선택
          [ 결과 ] 빈번한 재렌더 제거<br/>
        - 결제, 회원가입, 로그인 페이지<br/>
          → 데이터에 오류가 나면 안되는 민감한 페이지들이라고 생각해 제어 컴포넌트 선택<br/>
          [ 결과 ] 데이터가 변경 될 때마다 재렌더를 통해 정확한 전달<br/>
    5. **유저 및 개발 운영체제 통일을 위한 도커 사용**<br/>
    - 도커 빌드시 최적화를 위한 명령어 배치<br/>
        - 도커 빌드시 캐시를 먼저 이용한다는 점을 고려해 운영체제, 노드, 패키지 매니저, package.json 관련 명령어는 상단에 배치<br/>
        - 결과적으로 첫 빌드시엔 145.3s 에서 두번째 빌드(소스코드 변경시)에선 49.8s에서 빌드완료
### ✨ Tech Stack

- Front-end
    - TypeScript, Next.js
    - FireBase, react-query
    - react-hook-form, yup, react-quill, dompurify, react-slick, antd, import(portone)
    - AWS[S3,EC2],docker

### ✨ Features & Screens
1. **메인 화면**
<img width="1271" alt="스크린샷 2023-05-22 오후 4 36 11" src="https://github.com/wonny-won/fitable/assets/97152701/f067992e-e1a9-439a-a840-042bf5618e21"><br/><br/>

2. **신청서 작성 화면** 
    - 결제기능 적용
      - 비로그인 유저 결제 불가
      - 결제 후 결제 데이터 마이페이지에서 확인 가능
    - 결제시 결제금액의 5% 적립금이 적립될 수 있도록 구현<br/>
<img width="865" alt="스크린샷 2023-05-22 오후 4 38 34" src="https://github.com/wonny-won/fitable/assets/97152701/0d04eaaa-b01e-4461-aa72-b96f01b3f036"><br/><br/>

3. **리뷰 리스트 페이지** 
    - [도움돼요]를 가장 많이 받은 상위 3개 리뷰 순위 적용 및 명예의 전당 입성
    - 모든 리뷰 확인 가능<br/>
<img width="868" alt="스크린샷 2023-05-22 오후 4 41 24" src="https://github.com/wonny-won/fitable/assets/97152701/a0ed2074-8b12-4ee0-8471-046350b5c438"><br/><br/>

4. **리뷰 디테일 페이지** 
    - 특정 게시글 데이터 확인가능
    - 도움돼요 / 도움안돼요 기능<br/>
<img width="396" alt="스크린샷 2023-05-22 오후 4 41 35" src="https://github.com/wonny-won/fitable/assets/97152701/49227941-2138-4dfb-a749-587eca8d2f28"><br/><br/>

5. **리뷰 등록 & 수정 페이지**
    - 프로그램 관련 이미지 업로드, 한줄평, 상세리뷰, 별점(수정 불가), 썸네일 미리보기(명예의 전당 기준) 기능<br/>
<img width="400" alt="스크린샷 2023-05-22 오후 4 41 51" src="https://github.com/wonny-won/fitable/assets/97152701/757ab183-8ae5-4fc7-b81e-83dc5b23d30d"><br/><br/>

6. **마이 페이지**
    - 내 기본 정보 확인 및 결제 / 리뷰 정보 확인
    - 회원정보 수정가능
    - 리뷰 작성, 수정, 삭제
    - 리뷰 작성은 결제한 사람만 작성할 수 있도록 권한분기
    - 리뷰 수정, 삭제 기능을 마이페이지에  배치해 작성자만 수정,삭제 할 수 있도록 구현
    - 결제 정보 수정 및 보기
    - 피드백시 원하는 방향성 / 파일 업로드 수정<br/>
    <img width="818" alt="스크린샷 2023-05-22 오후 4 42 21"  src="https://github.com/wonny-won/fitable/assets/97152701/d2d6544f-dc20-4da0-962b-9ee1ed8d5105">
    <img width="730" alt="스크린샷 2023-05-30 오전 12 44 33" src="https://github.com/wonny-won/fitable/assets/97152701/57f86223-b87f-494c-aad6-2f31c93aac05"><br/><br/>

7. **로그인 / 회원가입 페이지**
    - 로그인 / 회원가입 기능
    - validation 적용 완료<br/>
<img width="862" alt="스크린샷 2023-05-22 오후 4 42 40" src="https://github.com/wonny-won/fitable/assets/97152701/d60b4fad-a54d-470b-9ed5-dfae6d1aa884"><br/><br/>

---

# 🏹 Trouble Shooting & Future Schedule

### 1️⃣ 중.꺾.마! 이겨낸 trouble들

[fitable 트러블 슈팅 모음](https://www.notion.so/fitable-32d624a01c2e4447bcecf1fd7f2f8d31)

### 2️⃣ fitable은 ver.2를 준비중!

[fitable 미래계획 ](https://www.notion.so/fitable-9d8b0873bb9c437e8fa6ae6c5c1d5b11)

---

# ✅ Result

- ver.1
    - 배포 주소 : [https://fitable.online/](https://fitable.online/)
    - 깃허브 : [https://github.com/wonny-won/fitable](https://github.com/wonny-won/fitable)
