import { wrapper } from '@/modules/store'
import { Top, Layout, Nav } from "@/components"
import { useEffect, useState } from 'react'
const App = ({ Component, pageProps}) => {
  const [showChild , setShowChild] = useState(false)
  useEffect(()=>{
    setShowChild(true)
  }, [])
  if(!showChild){
    return null
  }
  return (<>
  <Nav/>
    <Top/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default wrapper.withRedux(App)




