import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="container flex">
      <div className="flex-1">
        <div className="mb-5">
          <Image alt="me coding" src="/assets/blog/drawings/code.jpg" width={200} height={200} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
          <a href={`https://github.com/alexduros`} className="hover:underline">I'm writing code</a>
        </h3>
      </div>
      <div className="flex-1">
        <div className="mb-5">
          <Image alt="me coding" src="/assets/blog/drawings/playing.jpg" width={116} height={200} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
          I'm playing music
        </h3>
      </div>
      <div className="flex-1">
        <div className="mb-5">
          <Image alt="me coding" src="/assets/blog/drawings/referee.jpg" width={116} height={200} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
          I'm refereeing
        </h3>
      </div>
    </section>
  )
}