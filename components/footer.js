import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/3">
            Statically Generated with Next.js.
          </h3>
          <div>
            <p>Drawings by <a href="https://www.anouckferri.com/" className="text-center hover:underline lg:w-1/3">Anouck Ferri</a></p>
            <p>Content by <a href="https://www.linkedin.com/in/alexandreduros/" className="text-center hover:underline lg:w-1/3">Alexandre Duros</a></p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/3">
            <a href={`https://github.com/alexduros/blog`} className="mx-3 font-bold hover:underline">
              View on source code on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
