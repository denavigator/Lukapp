'use client'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>Welcome to LUKTECH Hub</h1>
      <button onClick={() => router.push('/deals')}>Start</button>
    </div>
  )
    }
