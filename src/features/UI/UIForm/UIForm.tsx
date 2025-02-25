import { FormEvent, ReactNode } from 'react'

export function UIForm({ children }: { children: ReactNode }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return <form onSubmit={handleSubmit}>{children}</form>
}
