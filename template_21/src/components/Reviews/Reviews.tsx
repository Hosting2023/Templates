import React from 'react'
import styles from './Reviews.module.scss'
import { InfoBlock } from '../InfoBlock/InfoBlock'
import Martin from '../../../public/assets/images/martin.png'
import Margaret from '../../../public/assets/images/margaret.png'
import Kevin from '../../../public/assets/images/kevin.png'
import Image from 'next/image'

export const Reviews = () => {
  return (
    <InfoBlock>
      <div className={styles.reviews}>
        {/* Martin */}
        <div className={styles.review}>
          <div className={styles.info}>
            <h3 className={styles.author}>Martin, 34 years</h3>
            <h4 className={styles.comment}>
              I recommend this maid to anyone looking for a reliable and professional cleaner. She
              was very thorough and attentive to details, and my home looks great! I will definitely
              be using her services again
            </h4>
            <div className={styles.picture}>
              <Image src={Martin} alt="Margaret" width={180} height={180} />
            </div>
          </div>
        </div>
        <div className={styles.central}>
          {/* Margaret */}
          <div
            className={styles.review}
            style={{
              boxShadow: '0px -4px 4px 0px #00000040, 0px 4px 4px 0px #00000040',
              margin: 0,
              alignItems: 'flex-start',
              padding: '1rem 0 2rem 4rem',
            }}
          >
            <div className={styles.info}>
              <h3 className={styles.author} style={{ textAlign: 'right' }}>
                Margaret, 30 years
              </h3>
              <h4 className={styles.comment}>
                I was very pleased with the maid{"'"}s work. She was very thorough and polite, and
                did her job in a very professional manner. My home looks impeccable! I will
                definitely be using her services in the future.
              </h4>
              <div className={styles.pictureCentral}>
                <Image src={Margaret} alt="Margaret" width={180} height={180} />
              </div>
            </div>
          </div>
        </div>
        {/* Kevin */}
        <div className={styles.review}>
          <div className={styles.info}>
            <h3 className={styles.author}>Kevin, 48 years</h3>
            <h4 className={styles.comment}>
              The maid was very polite and professional, but I was not completely satisfied with the
              quality of her work. Despite this, I was very grateful for her efforts, and the
              company was very responsive and helped to resolve the issue. I was very pleased with
              their professionalism and responsiveness
            </h4>
            <div className={styles.picture}>
              <Image src={Kevin} alt="Margaret" width={180} height={180} />
            </div>
          </div>
        </div>
      </div>
    </InfoBlock>
  )
}
