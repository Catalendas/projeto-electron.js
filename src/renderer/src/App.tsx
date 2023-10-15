import { Routes } from './Routes'
import './styles/global.css'
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from './lib/react-query'

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes/>
    </QueryClientProvider>
  )

}
