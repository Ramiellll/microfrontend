import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sunglasses } from './components/Sunglasses'
import { QueryClient, QueryClientProvider } from 'react-query'

import './index.scss'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Sunglasses />
  </QueryClientProvider>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
