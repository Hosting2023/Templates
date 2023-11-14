'use client'
import React, { useContext, useState } from 'react'
import styles from './FilterItem.module.scss'
import { OrderContext } from '@/context/OrderProvider'

export const FilterItem = ({ filter }: { filter: { title: string; values: string[] } }) => {
  const context = useContext(OrderContext)![0]
  const setContext = useContext(OrderContext)![1]

  const handleChoose = (value: string) => {
    setContext((prev: any) => (prev = { ...prev, [filter.title]: value }))
  }
  return (
    <div className={styles.filter}>
      <div className={styles.title}>
        <h3>{filter.title}</h3>
      </div>

      <ul className={styles.options}>
        {filter.values.map((value, index) => (
          <li
            key={index}
            className={value === context[filter.title] ? styles.selected : styles.default}
          >
            <button onClick={() => handleChoose(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
