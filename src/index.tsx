import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Global } from '@emotion/react'
import globalStyles from './styles/globalStyles'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Global styles={globalStyles} />

      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

reportWebVitals()
