interface MemeCardProps {
img: string;
}


export default function MemeCard({ img }: MemeCardProps) {
return (
<div className="w-72 h-72 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-purple-600">
<img src={img} alt="Meme" className="w-full h-full object-cover" />
</div>
);
}
