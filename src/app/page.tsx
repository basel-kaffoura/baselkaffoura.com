import { Suspense } from 'react'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { CV } from '@/components/sections/CV'
import { Certificates } from '@/components/sections/Certificates'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      {/* Suspense boundaries let React hydrate the navbar first and each section on its own. */}
      <main>
        <Suspense><Hero /></Suspense>
        <Suspense><About /></Suspense>
        <Suspense><Skills /></Suspense>
        <Suspense><Projects /></Suspense>
        <Suspense><CV /></Suspense>
        <Suspense><Certificates /></Suspense>
        <Suspense><Contact /></Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
