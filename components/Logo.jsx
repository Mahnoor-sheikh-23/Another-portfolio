import Link from 'next/link';
import "./header.css"

const Logo = ({ light = false }) => {
  // determine the text color based on the light props
  const colorClass = light ? "text-white" : "text-primary"; //default to black 
  return (
    <Link href="/" className='logos' >
      <span className={`${colorClass}`}>Mahanoor</span>
    </Link>
  )
}

export default Logo;
