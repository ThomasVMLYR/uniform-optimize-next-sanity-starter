import Link from 'next/link';

const NavMenu2 = () => (
  <ul className="list-reset lg:flex justify-end flex-1 items-center space-x-2 lg:mr-4">
    <li>
      <Link href="/[[...slug]]" as="/">
        <a className="inline-block py-2 px-4 text-black font-bold no-underline">Home</a>
      </Link>
    </li>
    <li>
      <Link href="/[[...slug]]" as="/developers">
        <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
          For Developers
        </a>
      </Link>
    </li>
  </ul>
);

export default NavMenu2;
