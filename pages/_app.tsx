import Layout from '../src/components/commons/layout/index'
import { globalStyles } from '../src/commons/styles/global.style'
import { Global } from '@emotion/react'
import { AppProps } from "next/app";
import 'antd/dist/reset.css';
// 파이어베이스
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth';
import { RecoilRoot } from 'recoil';
import { QueryClient,QueryCache,QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { useIsLogIn } from '../src/commons/util/hooks/isLogin';

const firebaseConfig = {
  apiKey: "AIzaSyCuwMolJgsRl10ms6JJGRXPOcE2ecrgqSU",
  authDomain: "fitable-6e5ac.firebaseapp.com",
  projectId: "fitable-6e5ac",
  storageBucket: "fitable-6e5ac.appspot.com",
  messagingSenderId: "577514647607",
  appId: "1:577514647607:web:a339cb3fe2c1effd5a4fb2",
  measurementId: "G-24STC5SSG5"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const DB = getFirestore(FirebaseApp)
export const storage = getStorage(FirebaseApp)
export const auth:any = getAuth(FirebaseApp)
// export const analytics = getAnalytics(app);


export default function App({Component, pageProps}:AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        retryDelay: 0,
        staleTime: 50 * 1000,
        refetchOnWindowFocus:true,
        refetchOnMount:true
      },
      mutations: {
        retry: 1,
        retryDelay: 0,
      },
    },
  })
  const isLogin = useIsLogIn()

  return (
    <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <Layout isLogin={isLogin}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
    </RecoilRoot>
    )
}
