import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const skills = [
    ['writing code', 'code.jpg', 200, 'https://github.com/alexduros'],
    ['playing music', 'playing.jpg', 116],
    ['refereeing', 'referee.jpg', 116]
  ]

    return (
      <section className="container flex">
        {skills.map((s, i) => (<div className="flex-1">
          <div key={`skill-${s[0].replace(' ', '-')}`}className="mb-5 flex fex-row justify-center">
            <Image alt={`me ${s[0]}`} src={`/assets/blog/drawings/${s[1]}`} width={s[2]} height={200} />
          </div>
          <h3 className="text-3xl mb-3 leading-snug text-center">
            {s[3]
              ? <a href={s[3]} className="hover:underline">I'm {s[0]}</a>
              : `I'm ${s[0]}`
            }
          </h3>
        </div>
        ))}
      </section>
    )
}