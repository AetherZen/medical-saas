'use client' // Error boundaries must be Client Components
 
export default function GlobalError({ error, reset }) {
  return (  
    // global-error must include html and body tags
    <html>
      <body className="flex flex-col items-center justify-center min-h-dvh">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <button onClick={() => reset()} className="underline">Try again</button>
      </body>
    </html>
  )
}