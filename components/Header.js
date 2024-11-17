import Link from 'next/link'

export default function Header() {
  return (
    <header className='border-solid border-b border-indigo-600 p-2'>
         <Link href="/" className='mr-4'>Index</Link>
         <Link href="/about" className='mr-4'>About</Link>
    </header>
  );
}
