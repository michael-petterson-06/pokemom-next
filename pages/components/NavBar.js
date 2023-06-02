import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <nav>
          <div>
            <Image 
              src='/images/pokeball.png'
              width='30'
              height= '30'
              alt='Pokemon'                         
            />
            <h1>Pokemom</h1>
          </div>   
          <ul>
            <li>
              <Link href="/"><a>Home</a></Link> 
            </li>
            <li>
              <Link href='/about'><a>Sobre</a></Link>
            </li>
          </ul>
        </nav>
    )
}