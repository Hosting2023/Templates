import React, { HTMLInputTypeAttribute, useState } from 'react'
import styles from './Input.module.scss'
import OpenedEye from '../../../../public/assets/icons/eye-alt-svgrepo-com.svg'
import ClosedEye from '../../../../public/assets/icons/eye-slash-alt-svgrepo-com.svg'

export const Input = ({
  onChange,
  value,
  placeholder,
  wrong = false,
  type = 'text',
  isLight = false,
  style = {},
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  wrong?: boolean
  type?: HTMLInputTypeAttribute
  isLight?: boolean
  style?: React.CSSProperties
}) => {
  const [view, setView] = useState(false)
  return (
    <div className={styles.password}>
      <input
        className={isLight ? styles.light : styles.dark}
        type={type !== 'password' ? type : view ? 'text' : 'password'}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder ?? ''}
        style={{
          ...style,
          boxShadow: wrong ? 'inset 2px 2px #7b1111, inset -2px -2px  #7b1111' : 'none',
        }}
      />
      {type === 'password' && (
        <div onClick={() => setView(!view)} className={styles.view}>
          {view ? <OpenedEye /> : <ClosedEye />}
        </div>
      )}
    </div>
  )
}
