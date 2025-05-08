import { createFileRoute } from '@tanstack/react-router'
import '../index.css'
import { Button } from "@/components/ui/button"

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2 text-3xl">
      <h3>Welcome Home!</h3>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
        <Button variant="destructive">Click me</Button>
        <Button size="sm">Click me</Button>
      </div>
    </div>
    
  )
}