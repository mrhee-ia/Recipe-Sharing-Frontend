import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import CardContainer from './components/CardContainer'

function App() {

  return (
    <>
      <MainLayout>
        {/* Main Feed */}
        <CardContainer/>
      </MainLayout>
    </>
  )
}

export default App
