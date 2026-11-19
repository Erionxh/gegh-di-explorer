// Skica të thjeshta për lentet (SVG i vizatuar me dorë, pa imazhe të huaja).
const ink = '#1d2a44', gold = '#b8892b', green = '#2f7d4f', soft = '#efe9da';

export default function LensSketch({ type }) {
  const S = { width: '100%', maxWidth: 420, height: 'auto', display: 'block' };
  switch (type) {
    case 'linguistic':
      return (
        <svg viewBox="0 0 400 200" style={S} role="img" aria-label="Rrënja e vjetër që degëzohet në fjalë">
          <rect x="0" y="0" width="400" height="200" rx="16" fill={soft} />
          <text x="200" y="40" textAnchor="middle" fontSize="20" fill={gold} fontFamily="Georgia">*ǵembʰ- „me kafshu”</text>
          <path d="M200 50 L95 130 M200 50 L200 130 M200 50 L305 130" stroke={ink} strokeWidth="2.5" fill="none" />
          {[[95, 'dhamb'], [200, 'm’dhemb'], [305, 'jámbhati']].map(([x, w]) => (
            <g key={w}><circle cx={x} cy="140" r="8" fill={x === 305 ? ink : green} /><text x={x} y="172" textAnchor="middle" fontSize="18" fill={ink} fontFamily="Georgia">{w}</text></g>
          ))}
          <text x="305" y="192" textAnchor="middle" fontSize="12" fill="#6b7280">sanskritisht</text>
        </svg>
      );
    case 'mouth':
      return (
        <svg viewBox="0 0 400 200" style={S} role="img" aria-label="Goja: e hapur, e mbyllur, buzëqeshje, e ulur">
          <rect width="400" height="200" rx="16" fill={soft} />
          {[[60, 'ha', 'M35 95 Q60 135 85 95 Q60 120 35 95'], [160, 'mbyll', 'M135 105 L185 105'], [255, 'qesh', 'M225 95 Q255 130 285 95'], [345, 'kjaj', 'M320 115 Q345 85 370 115']].map(([x, w, d]) => (
            <g key={w}><circle cx={x} cy="100" r="42" fill="#fff" stroke={ink} strokeWidth="2" /><path d={d} stroke={ink} strokeWidth="3" fill={w === 'ha' ? ink : 'none'} strokeLinecap="round" /><text x={x} y="175" textAnchor="middle" fontSize="18" fill={ink} fontFamily="Georgia">{w}</text></g>
          ))}
        </svg>
      );
    case 'sound':
      return (
        <svg viewBox="0 0 400 200" style={S} role="img" aria-label="Valët e tingullit">
          <rect width="400" height="200" rx="16" fill={soft} />
          <path d="M20 100 Q40 40 60 100 T100 100 T140 100 T180 100" stroke={gold} strokeWidth="3" fill="none" />
          <path d="M200 100 l6 -30 l6 60 l6 -50 l6 40 l6 -30 l6 20 l6 -10" stroke={ink} strokeWidth="3" fill="none" />
          <path d="M290 100 Q330 70 380 100" stroke={green} strokeWidth="3" fill="none" strokeDasharray="4 6" />
          <text x="100" y="170" textAnchor="middle" fontSize="18" fill={ink} fontFamily="Georgia">bubullimë</text>
          <text x="230" y="170" textAnchor="middle" fontSize="18" fill={ink} fontFamily="Georgia">rrjep</text>
          <text x="335" y="170" textAnchor="middle" fontSize="18" fill={ink} fontFamily="Georgia">shuj</text>
        </svg>
      );
    case 'history':
      return (
        <svg viewBox="0 0 400 200" style={S} role="img" aria-label="Vija e kohës së dokumenteve">
          <rect width="400" height="200" rx="16" fill={soft} />
          <line x1="30" y1="100" x2="370" y2="100" stroke={ink} strokeWidth="2.5" />
          {[[60, '1462', 'Formula'], [150, '1555', 'Buzuku'], [240, '1854', 'Hahn'], [330, '1972', 'Kongresi']].map(([x, y, n]) => (
            <g key={y}><circle cx={x} cy="100" r="9" fill={gold} /><text x={x} y="78" textAnchor="middle" fontSize="18" fill={ink} fontFamily="Georgia">{y}</text><text x={x} y="132" textAnchor="middle" fontSize="14" fill="#4b5563">{n}</text></g>
          ))}
        </svg>
      );
    case 'map':
      return (
        <svg viewBox="0 0 400 200" style={S} role="img" aria-label="Harta me pika">
          <rect width="400" height="200" rx="16" fill={soft} />
          <path d="M60 170 L120 60 L170 120 L220 40 L290 140 L340 90" stroke="#9ca3af" strokeWidth="2" fill="none" />
          {[[120, 70, green], [200, 95, ink], [260, 120, gold], [160, 140, green]].map(([x, y, c], i) => (
            <g key={i}><circle cx={x} cy={y} r="10" fill={c} stroke="#fff" strokeWidth="3" /></g>
          ))}
          <text x="120" y="50" textAnchor="middle" fontSize="14" fill={ink}>Mirditë</text>
        </svg>
      );
    case 'dna':
      return (
        <svg viewBox="0 0 400 200" style={S} role="img" aria-label="Spiralja e ADN-së">
          <rect width="400" height="200" rx="16" fill={soft} />
          <path d="M40 60 C100 160 160 -40 220 60 S340 160 380 60" stroke="#8a3b5c" strokeWidth="3" fill="none" />
          <path d="M40 140 C100 40 160 240 220 140 S340 40 380 140" stroke={ink} strokeWidth="3" fill="none" />
          {[70, 110, 150, 190, 230, 270, 310, 350].map((x) => <line key={x} x1={x} y1="80" x2={x} y2="120" stroke={gold} strokeWidth="2" />)}
        </svg>
      );
    case 'archaeology':
      return (
        <svg viewBox="0 0 400 200" style={S} role="img" aria-label="Shtresat e tokës dhe një enë">
          <rect width="400" height="200" rx="16" fill={soft} />
          {[60, 100, 140].map((y, i) => <rect key={y} x="20" y={y} width="360" height="40" fill={['#e5dcc4', '#d8cba8', '#c9b98f'][i]} />)}
          <path d="M190 150 Q180 120 195 108 L205 108 Q220 120 210 150 Z" fill={gold} stroke={ink} strokeWidth="2" />
          <text x="200" y="45" textAnchor="middle" fontSize="16" fill={ink}>shtresa · data · gjetja</text>
        </svg>
      );
    case 'anthropology':
      return (
        <svg viewBox="0 0 400 200" style={S} role="img" aria-label="Kulla dhe guri i kufinit">
          <rect width="400" height="200" rx="16" fill={soft} />
          <rect x="80" y="50" width="80" height="120" fill="#fff" stroke={ink} strokeWidth="2.5" />
          <path d="M72 52 L120 22 L168 52" stroke={ink} strokeWidth="2.5" fill="none" />
          <rect x="105" y="80" width="10" height="16" fill={ink} /><rect x="128" y="80" width="10" height="16" fill={ink} />
          <rect x="110" y="135" width="20" height="35" fill={gold} />
          <path d="M250 170 L262 120 L282 120 L292 170 Z" fill="#9ca3af" stroke={ink} strokeWidth="2" />
          <text x="270" y="105" textAnchor="middle" fontSize="15" fill={ink} fontFamily="Georgia">guri i kufinit</text>
          <line x1="200" y1="170" x2="360" y2="170" stroke={ink} strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      );
    default:
      return null;
  }
}
