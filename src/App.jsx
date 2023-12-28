import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="bg-charcoalGrey flex items-center justify-center md:h-[100vh]">
          <Routes>
            <Route path="/" element={<Newsletter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
