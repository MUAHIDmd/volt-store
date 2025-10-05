'use client'
import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full shadow bg-[#021368] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* Left (Logo only) */}
          <Link href="/" className="text-2xl font-bold">
            Avrx <span className="text-yellow-400">Store</span>
          </Link>

          {/* Center Search (desktop only) */}
          <form className="hidden lg:flex items-center bg-white rounded-full overflow-hidden w-1/2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 px-4 py-2 text-slate-800 outline-none"
            />
            <button className="bg-yellow-400 px-4 py-2 text-slate-800 font-semibold">
              <Search size={18} />
            </button>
          </form>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative flex items-center gap-1">
              <ShoppingCart size={22} />
              <span className="hidden lg:inline">Cart</span>
              <span className="absolute -top-2 -right-3 bg-red-500 text-[10px] px-1.5 py-0.5 rounded-full">
                2
              </span>
            </Link>
            <button className="flex items-center gap-1 bg-indigo-500 px-4 py-2 rounded-full hover:bg-indigo-600">
              <User size={18} /> 
              <span className="hidden lg:inline">Login</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
