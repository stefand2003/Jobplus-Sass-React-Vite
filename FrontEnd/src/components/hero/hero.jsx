import React from 'react'
import './hero.scss'
import Form from '../search/search'

export default function hero() {
  return (
    <div className="hero hero--bgimg">
      <div className="hero__wrap">
        <h1>Connecting candidates to their dream jobs</h1>
        <Form />
      </div>
    </div>
  )
}
