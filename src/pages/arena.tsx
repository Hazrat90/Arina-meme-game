import MemeCard from "../components/MemeCard";


export default function Arena() {
return (
<div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex flex-col items-center text-white">
<h2 className="text-3xl font-bold mt-6">⚔️ Meme Battle</h2>
<div className="flex gap-8 mt-10">
<MemeCard img="/memes/meme1.jpg" />
<MemeCard img="/memes/meme2.jpg" />
</div>
<div className="flex gap-6 mt-8">
<button className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-xl shadow-lg">Vote Left ✅</button>
<button className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-xl shadow-lg">Vote Right ❌</button>
</div>
</div>
);
}
