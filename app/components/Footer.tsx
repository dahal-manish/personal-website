import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto pt-6 pb-6">
      <div className="w-2/3 mx-auto px-4">
        <nav className="flex text-gray-600">
          <Link 
            href="mailto:danish.mahal10@gmail.com" 
            className="hover:text-black transition-colors"
          >
            Email
          </Link>
          <span className="mx-2">/</span>
          <Link 
            href="https://www.linkedin.com/in/manish-dahal/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </Link>
          <span className="mx-2">/</span>
          <Link 
            href="https://danishmahal.substack.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Substack
          </Link>
        </nav>
      </div>
    </footer>
  );
}

