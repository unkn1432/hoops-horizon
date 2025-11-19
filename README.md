// app/page.tsx  ←  replace everything in this file
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <h1 className="text-6xl font-black mb-4">Hoops Horizon</h1>
      <p className="text-2xl mb-2 text-center max-w-2xl">
        The only tool that instantly tells you:
      </p>
      <ul className="text-xl mb-8 space-y-2">
        <li>✓ Exact NIL value of any international prospect</li>
        <li>✓ Whether he’s actually NCAA eligible</li>
        <li>✓ Which U.S. programs he fits best</li>
      </ul>
      <div className="space-y-4">
        <Button 
          size="lg" 
          className="text-xl px-12 py-6 bg-orange-600 hover:bg-orange-500"
          onClick={() => window.location.href = "https://tally.so/r/3XOZ5P"}
        >
          Get Free Beta Access (200 spots)
        </Button>
        <p className="text-sm opacity-75">Zero cost • Mid-majors welcome • Live in 7 days</p>
      </div>
    </main>
  )
}
