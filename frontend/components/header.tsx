import Link from 'next/link'

const Header = () => {
  return (
    <header className="h-12 px-4 flex items-center">
      <Link href={'/'}>Payout System</Link>
    </header>
  )
}

export default Header
