import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'


export const Route = createFileRoute('/about')({
  component: About,
})

function About() {

  return <div className="p-2">about</div>
}