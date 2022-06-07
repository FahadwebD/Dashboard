import React from 'react'
import { Main } from './common/Main'
import { Sidebar } from './common/Sidebar'

export const TheLayout = () => {
  return (
    <div>
        <div>
          <Sidebar></Sidebar>
        </div>
        <main>
            <Main/>
        </main>
    </div>
  )
}
