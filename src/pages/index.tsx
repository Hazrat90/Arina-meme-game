import Link from "next/link";


export default function Home() {
return (
<div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col items-center justify-center text-white">
<h1 className="text-5xl font-extrabold mb-6">🔥 MemeArena 🔥</h1>
<p className="text-lg mb-8 text-pink-400">Battle Memes. Vote. Rule the Arena.</p>
<Link href="/arena">
<button className="px-6 py-3 bg-purple-600 hover:bg-pink-500 rounded-2xl shadow-lg shadow-purple-800 transition-all">
Enter Arena 🚀
</button>
</Link>
</div>
);
}
