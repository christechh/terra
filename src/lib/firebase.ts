import { initializeApp } from 'firebase/app'
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCgKWEY2alGlmbbTU_zfydx-Jy-_HSMoo4',
  authDomain: 'pinchat-me.firebaseapp.com',
  databaseURL: 'https://pinchat-me.firebaseio.com',
  projectId: 'pinchat-me',
  storageBucket: 'pinchat-me.appspot.com',
  messagingSenderId: '83845336238',
  appId: '1:83845336238:web:3ff0ef49789044ae1ef13f',
  measurementId: 'G-RSX512HZZD'
}

initializeApp(firebaseConfig)

export const sendSMS = (
  phone: string,
  recaptchaVerifier: RecaptchaVerifier
) => {
  return signInWithPhoneNumber(getAuth(), phone, recaptchaVerifier)
}

export const addRecaptcha = (elementId: string, size = 'invisible') => {
  const auth = getAuth()
  return new RecaptchaVerifier(auth, elementId, {
    size,
    callback: () => {}
  })
}
