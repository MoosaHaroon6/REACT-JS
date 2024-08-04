'use client'

import Count from "./counterApp"



export default function Home() {
  return (
    <>
      <h1>Hello React</h1>
      <Count
        count={5}
        message={'Counter App'}
      />
    </>
  )
}