import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Country } from "@/hooks/useCountries";
import { Globe, MapPin } from "lucide-react";

interface InteractiveGlobeProps {
  countries: Country[];
}

// Define region positions on the map (approximate percentages)
const regionPositions: Record<string, { x: number; y: number }> = {
  "Middle East": { x: 58, y: 42 },
  "Europe": { x: 48, y: 28 },
  "Asia Pacific": { x: 78, y: 45 },
  "North America": { x: 22, y: 35 },
};

export const InteractiveGlobe = ({ countries }: InteractiveGlobeProps) => {
  const navigate = useNavigate();
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (country: Country, e: React.MouseEvent) => {
    setHoveredCountry(country);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const handleClick = (country: Country) => {
    navigate(`/countries/${country.slug}`);
  };

  // Group countries by region
  const countriesByRegion = countries.reduce((acc, country) => {
    const region = country.region || "Other";
    if (!acc[region]) acc[region] = [];
    acc[region].push(country);
    return acc;
  }, {} as Record<string, Country[]>);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20 rounded-3xl blur-3xl" />
      
      {/* Globe container */}
      <div className="relative bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-indigo-900/80 rounded-3xl p-8 md:p-12 border border-blue-500/20 backdrop-blur-sm overflow-hidden">
        {/* Animated background dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* World map SVG simplified */}
        <div className="relative aspect-[2/1] min-h-[300px] md:min-h-[400px]">
          {/* Connection lines animation */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet">
            {/* Animated connection lines between regions */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Connection lines */}
            <path
              d="M 22 35 Q 35 25 48 28"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.2"
              className="animate-pulse"
            />
            <path
              d="M 48 28 Q 53 35 58 42"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.2"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <path
              d="M 58 42 Q 68 40 78 45"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.2"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>

          {/* Region markers */}
          {Object.entries(countriesByRegion).map(([region, regionCountries]) => {
            const position = regionPositions[region];
            if (!position) return null;

            return (
              <div
                key={region}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${position.x}%`, top: `${position.y}%` }}
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 w-16 h-16 -m-8 bg-blue-500/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
                
                {/* Region container */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Region dot */}
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 flex items-center justify-center cursor-pointer hover:scale-125 transition-transform duration-300">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                  
                  {/* Country flags on hover */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-1 bg-slate-800/90 rounded-lg p-2 border border-blue-500/30 shadow-xl whitespace-nowrap z-20">
                    {regionCountries.map((country) => (
                      <button
                        key={country.id}
                        onClick={() => handleClick(country)}
                        onMouseEnter={(e) => handleMouseEnter(country, e)}
                        onMouseLeave={handleMouseLeave}
                        className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-blue-600/30 transition-colors text-sm"
                      >
                        <span className="text-lg">{country.flag_emoji}</span>
                        <span className="text-white/80 hidden md:inline">{country.name.split('(')[0].trim()}</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Region label */}
                  <span className="mt-2 text-xs text-blue-200/70 font-medium whitespace-nowrap hidden md:block">{region}</span>
                </div>
              </div>
            );
          })}

          {/* Center globe icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 w-24 h-24 -m-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
              <Globe className="w-16 h-16 text-blue-400/40" />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-center text-blue-200/60 mt-6 text-sm md:text-base">
          Hover over a region to explore our local partners, or click to navigate directly
        </p>
      </div>

      {/* Tooltip */}
      {hoveredCountry && (
        <div
          className="fixed z-50 bg-slate-800 border border-blue-500/30 rounded-xl p-4 shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full -mt-4"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{hoveredCountry.flag_emoji}</span>
            <div>
              <p className="text-white font-semibold">{hoveredCountry.name}</p>
              <p className="text-blue-300 text-sm">{hoveredCountry.partner_name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
