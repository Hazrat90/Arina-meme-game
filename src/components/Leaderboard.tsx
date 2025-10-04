export default function Leaderboard() {
const players = [
{ name: "MemeKing", score: 120 },
{ name: "DogeLord", score: 98 },
{ name: "PepeChamp", score: 77 }
];


return (
<div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white p-6">
<h2 className="text-4xl font-bold mb-8">🏆 Leaderboard</h2>
<ul className="space-y-4">
{players.map((p, i) => (
<li key={i} className="flex justify-between bg-white/10 p-4 rounded-lg shadow-md">
<span>{i + 1}. {p.name}</span>
<span className="text-pink-400">{p.score} pts</span>
</li>
))}
</ul>
</div>
);
}
