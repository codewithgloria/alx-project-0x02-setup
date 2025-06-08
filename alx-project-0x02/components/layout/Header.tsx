import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">ALX Listing</h1>
        <nav className="space-x-6">
          <Link href="/home" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/posts" className="text-gray-700 hover:text-blue-600">Posts</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;