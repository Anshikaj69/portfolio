import Projects from '@/components/main/Projects';
import Hero from '../components/main/hero'
import Skills from '../components/main/Skills'

export default function Home() {
  return (
   <main className="h-full w-full">
    <div className="flex flex-col gap-20 h-[840px]">
      <Hero></Hero>
      <Skills></Skills>
      <Projects/>
    </div>
    </main>
  );
}
