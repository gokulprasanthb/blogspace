"use client"
import Link from "next/link";
import { useState, useRef, useEffect} from "react";
import { FaSearch } from "react-icons/fa";


const Home = () => {

  const [posts, setPosts] = useState([]);
  const inputRef = useRef("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL+'/posts')
    .then((res) => res.json() )
    .then(res => setPosts(res))
  },[]);

  const searchPost = (e) => {

      if (e.type == 'keydown' && e.key !== 'Enter') {
        return;
    }

    setSearch(true)
       fetch(process.env.NEXT_PUBLIC_API_URL+'/posts?q='+inputRef.current.value)
      .then((res) => res.json() )
      .then(res => setPosts(res))
      .finally(() =>  setSearch(false))
    }

  return (
    <section className="my-10 px-20">
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </main>
    <div className="flex justify-end px-4">
      <input onKeyDown={searchPost} disabled={search} ref={inputRef} type="text" className="px-4 py-2 border text-black border-gray-300 rounded-md" placeholder="Search..." />
      <button onClick={searchPost} disabled={search} className="px-4 py-2 bg-violet-500 text-white rounded-md ml-4">{search?'...':<FaSearch />}</button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
      {posts.map((post) => (
        <Link href={"/post/"+post._id}>
          <div className="border border-gray-200 p-4">
            <img className="w-full h-48 object-cover mb-4" src={post.image} alt="Post Image"/>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400">{post.small_description}</p>
          </div>
        </Link>)
      )}
      {!posts.length > 0 && inputRef.current.value && <h3 className="w-full flex justify-center font-semibold text-xl py-24 pl-10"> No posts matches for your search: {inputRef.current.value}</h3>  }
    </div>
 </section>
  )
}

export default Home

