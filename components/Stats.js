const STATS = [["7", "modul layanan"], ["10", "aktor sistem"], ["31", "use case"], ["24 jam", "layanan IGD"]];

export default function Stats() {
  return (
    <section>
      <div className="w">
        <div className="stats">
          {STATS.map(([n, l]) => <div className="stat" key={l}><b>{n}</b>{l}</div>)}
        </div>
      </div>
    </section>
  );
}
