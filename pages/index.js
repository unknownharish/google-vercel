import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt from 'jwt-decode'
import { useRouter } from 'next/router';

export default function Home() {
  let clientId = "541905439347-rfdf9vne1kp6fv0okdg1230o9fi2g70b.apps.googleusercontent.com"

  const router = useRouter()

  async function handler(res) {
    console.log(res);

    let data = jwt(res.credential)
    console.log(data);

    if (data.email_verified) {
      router.push('/Check')
    }

  }




  return (
    <div className={styles.container}>



      <GoogleOAuthProvider clientId={clientId}>

        <GoogleLogin
          onSuccess={handler}
          onError={() => {
            console.log('Login Failed');
          }}



        />

      </GoogleOAuthProvider>


    </div>
  )
}
