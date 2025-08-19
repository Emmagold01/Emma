import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="relative border-b bg-transparent border-[#1E2D3D] h-[64px] px-6 text-[#607B96] flex items-center font-roboto z-20">
      <div className="flex justify-between items-center w-full">
        <h1 className="">Soyooye Emmanuel</h1>

        <ul className="flex border-l border-r border-[#1E2D3D]">
          <li className="border-r border-[#1E2D3D]">
            <Link
              href="/"
              className="block px-8 py-4 hover:text-white transition-colors border-b-2 border-[#FEA55F] text-white"
            >
              _home
            </Link>
          </li>
          <li className="border-r border-[#1E2D3D]">
            <Link
              href="/about"
              className="block px-8 py-4 hover:text-white transition-colors"
            >
              _about-me
            </Link>
          </li>
          <li>
            <Link
              href="/project"
              className="block px-8 py-4 hover:text-white transition-colors"
            >
              _projects
            </Link>
          </li>
        </ul>

        <div className="border-l border-[#1E2D3D]">
          <Link
            href="/contact"
            className="block px-8 py-4 hover:text-white transition-colors"
          >
            _contact-me
          </Link>
        </div>
      </div>
    </nav>
  );
};
