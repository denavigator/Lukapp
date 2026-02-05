'use client'
import { useState } from 'react'
import { deals } from '@/data/deals'

export default function Deals() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', ...new Set(deals.map(d => d.category))]

  const filtered = activeCategory === 'All'
    ? deals
    : deals.filter(d => d.category === activeCategory)

  return (
    <div>
      <h1>Services</h1>

      {categories.map(cat => (
        <button key={cat} onClick={() => setActiveCategory(cat)}>{cat}</button>
      ))}

      {filtered.map(d => (
        <div key={d.id}>
          {d.badge && <span>{d.badge}</span>}
          <h3>{d.title}</h3>
          <p>{d.description}</p>
          <a href='https://wa.me/256784008515'>Access Service</a>
        </div>
      ))}
    </div>
  )
    }
