import React, { useEffect } from 'react'
import Modal from './Modal';
import ModalSignUp from './ModalSignUp';
import ModalLogin from './ModalLogin';
import styles from './Modal.module.scss';
function ModalMain({ openValue, ChangeOpen, contentNum }: {
   openValue: boolean,
   ChangeOpen: (val: boolean) => void
   contentNum?: number
}) {
   const [content, setContent] = React.useState<number>(0)

   useEffect(() => {
      if (contentNum) {
         setContent(contentNum)
      }
   }, [contentNum])
   const CloseModal = (): void => {
      ChangeOpen(false)
   }
   return (
      <>
         <Modal open={openValue} onClose={CloseModal} >
            {content === 0 && <Content setValue={(el: number) => setContent(el)} />}
            {content === 1 && <ModalSignUp />}
            {content === 2 && <ModalLogin />}
         </Modal>

      </>

   )
}
export default ModalMain


const Content = ({ setValue }: any) => {
   return (
      <div className={styles.content_main}>
         <h1 className={styles['modal-register']}>To order please login or register</h1>
         <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.signup}`} onClick={() => setValue(1)}>Sign up</button>
            <button className={`${styles.button} ${styles.login}`} onClick={() => setValue(2)}>Log in</button>
         </div>
         <div className={styles.icons}>
            <div className={styles.icon}>
               <img src="/Facebook.svg" alt="Facebook" />
            </div>
            <div className={styles.icon}>
               <img src="/Google.svg" alt="Google" />
            </div>
         </div>
      </div>
   )
}