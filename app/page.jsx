"use client"
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

  return (
    <section className="my-10 px-20">
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </main>
    <div className="flex justify-end px-4">
      <input type="text" className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." />
      <button className="px-4 py-2 bg-violet-500 text-white rounded-md ml-4"><FaSearch /></button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
      {posts.map((post) => (<div className="border border-gray-200 p-4">
        <img className="w-full h-48 object-cover mb-4" src={post.image} alt="Post Image"/>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-400">{post.description}</p>
      </div>)
      )}
    </div>
 </section>
  )
}

export default Home

