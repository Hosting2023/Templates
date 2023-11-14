'use client'
import { AuthForm } from '@/components/AuthForm/AuthForm'
import styles from './page.module.css'
import { Header } from '@/components/Header/Header'
import { Body } from '@/components/Body/Body'
import { OrderProvider } from '@/context/OrderProvider'
import { AuthContext, AuthProvider } from '@/context/AuthProvider'
import { useContext } from 'react'

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   const authProps = await checkIsAuth(ctx)

//   if ('openAuth' in authProps) {
//     return authProps.openAuth
//   }
// }

export default function Home() {
  return (
    <AuthProvider>
      <OrderProvider>
        <main className={styles.main}>
          <Header />
          <Body />
        </main>
      </OrderProvider>
    </AuthProvider>
  )
}
