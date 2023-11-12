export default function Tailwind() {
  return (
    <div className="containor">
      <h1 className="text-cyan-400">Tailwind CSS</h1>
      <div>
        <p className="font-sans">
          The quick brown fox jumps over the lazy dog.
        </p>
        <p className="font-serif">
          The quick brown fox jumps over the lazy dog.
        </p>
        <p className="font-mono">
          The quick brown fox jumps over the lazy dog.
        </p>
        <p className="underline decoration-wavy">
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
      <button className="mt-5 px-8 py-1 rounded-lg ring-2 ring-blue-500/50">
        Subscribe
      </button>
    </div>
  );
}
