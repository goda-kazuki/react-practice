import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'


export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const [slideshow,setSlideshow]=useState([])
  
  
  
  useEffect(() => {
    const fetchSlideShow=async () => {
      const response = await fetch('https://httpbin.org/json')
      const data = await response.json()
      setSlideshow(data)
    }

    fetchSlideShow()
  },[])
  return <div className="p-2">slideshow {JSON.stringify(slideshow)}</div>
}