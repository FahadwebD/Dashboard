import React from 'react'
import { Main } from './common/Main'
import { Sidebar } from './common/Sidebar'
import '../../style/style.css'
import { ContentHeader } from './common/ContentHeader'
export const TheLayout = () => {
  return (
    
      <div className="s-layout">

<Sidebar></Sidebar>
<main className="s-layout__content">
  <ContentHeader></ContentHeader>
  <Main/>
</main>
    </div>
  )
}
