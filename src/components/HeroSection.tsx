// src/components/HeroSection.tsx
import { useState, useEffect, useRef } from "react";
import shadmehrImg from "../assets/shadmehr.jpg";
import shadmehrImg2 from "../assets/images (3).jpg";
import shadmehrImg3 from "../assets/images (2).jpg";
import shadmehrImg4 from "../assets/images (1).jpg";
import shadmehrImg5 from "../assets/images (4).jpg";
import shadmehrImg6 from "../assets/images (5).jpg";
import shadmehrImg7 from "../assets/img1.jpg";
import shadmehrImg8 from "../assets/img2.jpg";
import shadmehrImg9 from "../assets/img3.jpg";
import shadmehrImg10 from "../assets/img4.jpg";
import shadmehrImg11 from "../assets/img5.webp";  
import shadmehrImg12 from "../assets/img6.webp";  
import shadmehrImg13 from "../assets/img7.jpg";   
import shadmehrImg14 from "../assets/img8.jpg";   
import shadmehrImg15 from "../assets/img9.jpg";   






// ── Types ──────────────────────────────────────────────────────────────────

interface Tour {
  date: string;
  venue: string;
  location: string;
  status: "available" | "sold-out";
  label: string;
}

interface Track {
  title: string;
  meta: string;
  cover: string;
}

// ── SVG Icons ──────────────────────────────────────────────────────────────

const MusicNoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
    <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
    <path d="M9 17v-13h10v13"/>
    <path d="M9 8h10"/>
  </svg>
);

const StarIcon = () => (
  <svg width="30" height="25" viewBox="0 0 24 24" fill="hsl(178,52%,42%)" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const PinIcon = () => (
  <svg width="30" height="25" viewBox="0 0 24 24" fill="hsl(178,52%,42%)" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="30" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="hsl(178,52%,42%)"/>
    <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 1 1-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.223-2.722a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.13-9.965-1.166a.78.78 0 0 1-.973-.519.781.781 0 0 1 .519-.972c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.794c3.532-1.072 9.404-.865 13.115 1.338a.937.937 0 0 1-.955 1.613z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const SoundCloudIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.5 6.5c-3.86 0-7 3.14-7 7s3.14 7 7 7h7.99c2.76 0 5.01-2.25 5.01-5.01 0-2.63-2.04-4.78-4.63-4.99C20.05 7.77 16.63 6.5 12.5 6.5zM2 13v4h1v-4H2zm2-2v6h1v-6H4zm2-1v7h1v-7H6zm2 1v6h1v-6H8z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.12 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

const SkipIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="4,3 14,12 4,21"/><polygon points="13,3 23,12 13,21"/>
  </svg>
);

const EllipsisIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="2"/>
    <circle cx="12" cy="12" r="2"/>
    <circle cx="19" cy="12" r="2"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const VideoPlayIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────

const TOURS: Tour[] = [
  {
    date: "Dec 15",
    venue: "The Wiltern",
    location: "Los Angeles, CA · Doors 8:00pm",
    status: "available",
    label: "Tickets",
  },
  {
    date: "Dec 18",
    venue: "House of Blues",
    location: "Chicago, IL · Doors 7:30pm · GA Available",
    status: "available",
    label: "Tickets",
  },
  {
    date: "Dec 22",
    venue: "Terminal 5",
    location: "New York, NY · Doors 8:00pm · Limited VIP",
    status: "sold-out",
    label: "WaitList",
  },
];

const STATS = [
  { icon: <StarIcon />, title: "Critically Acclaimed", sub: "Manoto, Radio Farda & Persian Channel" },
  { icon: <PinIcon />, title: "Next Show", sub: "Dec 15 · The Wiltern · Los Angeles" },
  { icon: <CheckIcon />, title: "Follow", sub: "Instagram · YouTube · Spotify" },
];

const TRACKS: Track[] = [
  { title: "Mammnoon", meta: "4:32 · produced by Shadmehr Aghili", cover: shadmehrImg2 },
  { title: "Ghazi", meta: "3:58 · feat. Shadmehr Aghili", cover: shadmehrImg3 },
  { title: "Tamasha", meta: "5:12 · live studio take", cover: shadmehrImg4 },
];

const PHOTOS = [
  { src: shadmehrImg11, alt: "Shadmehr promo shot", span: "col-span-1 row-span-2" },
  { src: shadmehrImg9,  alt: "Shadmehr portrait",   span: "col-span-1 row-span-1" },
  { src: shadmehrImg10, alt: "Shadmehr live",       span: "col-span-1 row-span-1" },
  { src: shadmehrImg7,  alt: "Shadmehr on stage",   span: "col-span-1 row-span-1" },
  { src: shadmehrImg12, alt: "Shadmehr studio",     span: "col-span-1 row-span-1" },
  { src: shadmehrImg2, alt: "Shadmehr studio",     span: "col-span-1 row-span-1" },

];


// ── Hooks ──────────────────────────────────────────────────────────────────

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      h: Math.floor(diff / 3_600_000),
      m: Math.floor((diff % 3_600_000) / 60_000),
      s: Math.floor((diff % 60_000) / 1_000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1_000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

// ── Sub-components ─────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Music", "Tour", "Merch", "Press", "Contact"];

  return (
    <nav className="bg-[hsl(178,52%,44%)] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-bold text-lg tracking-widest shrink-0">
          <MusicNoteIcon />
          <span>SHADMEHR</span>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="hover:opacity-75 transition-opacity">{l}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="border border-white rounded-full px-4 py-1.5 text-sm hover:bg-white hover:text-[hsl(178,52%,44%)] transition-colors">
            Subscribe
          </button>
          <button className="bg-white text-[hsl(178,52%,44%)] font-semibold rounded-full px-4 py-1.5 text-sm hover:bg-opacity-90 transition-opacity">
            Buy Tickets
          </button>
        </div>

        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] relative"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span 
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span 
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20 bg-[hsl(178,52%,40%)] px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm hover:opacity-75">{l}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-4">
            <button className="border border-white rounded-full px-4 py-1.5 text-sm flex-1">Subscribe</button>
            <button className="bg-white text-[hsl(178,52%,44%)] font-semibold rounded-full px-4 py-1.5 text-sm flex-1">Buy Tickets</button>
          </div>
        </div>
      )}
    </nav>
  );
}

function CountdownWidget() {
  const target = useRef(new Date(Date.now() + 12 * 3_600_000));
  const { h, m, s } = useCountdown(target.current);
  const pad = (n: number) => String(n).padStart(2, "0");

  const Unit = ({ value, next }: { value: number; next: number }) => (
    <div className="flex flex-col items-center leading-none select-none w-14">
      <span className="font-bold text-[hsl(178,52%,32%)]" style={{ fontSize: "clamp(2rem,5vw,2.6rem)" }}>
        {pad(value)}
      </span>
      <span className="font-bold text-[hsl(178,52%,55%)]" style={{ fontSize: "clamp(1.1rem,2.5vw,1.4rem)" }}>
        {pad(next)}
      </span>
    </div>
  );

  const Sep = () => (
    <span className="font-bold text-[hsl(178,52%,32%)] mx-0.5 -mt-1" style={{ fontSize: "clamp(1.8rem,4vw,2.2rem)" }}>:</span>
  );

  return (
    <div className="bg-[hsl(178,42%,80%)] rounded-2xl p-4 flex flex-col items-center gap-4 w-full md:w-[350px] md:ml-[-90px]">
      <button className="bg-[hsl(220,20%,18%)] text-white text-sm font-semibold px-8 py-2 rounded-xl hover:bg-[hsl(220,20%,28%)] transition-colors w-full max-w-[160px]">
        Start
      </button>

      <div className="flex items-center justify-center gap-1">
        <Unit value={h} next={h} />
        <Sep />
        <Unit value={m} next={m} />
        <Sep />
        <Unit value={s} next={s} />
      </div>

      <div className="flex gap-2">
        {[
          { icon: <EllipsisIcon />, label: "More" },
          { icon: <PlayIcon />, label: "Play" },
          { icon: <SkipIcon />, label: "Skip" },
        ].map(({ icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="bg-[hsl(220,20%,18%)] hover:bg-[hsl(220,20%,28%)] text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  const isSoldOut = tour.status === "sold-out";
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0 gap-3">
      <div className="min-w-0">
        <p className="font-semibold text-[hsl(220,20%,18%)] text-sm">
          {tour.date} — {tour.venue}
        </p>
        <p className="text-xs text-gray-500 truncate">{tour.location}</p>
      </div>
      <button
        className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
          isSoldOut
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-[hsl(178,52%,44%)] hover:bg-[hsl(178,52%,38%)] text-white"
        }`}
        disabled={isSoldOut}
      >
        {tour.label}
      </button>
    </div>
  );
}

function TrackRow({ track, isLight }: { track: Track; isLight?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
        isLight
          ? "bg-white border border-[hsl(200,20%,88%)] shadow-sm"
          : "bg-[hsl(178,45%,88%)]"
      }`}
    >
      <img
        src={track.cover}
        alt={track.title}
        className="w-12 h-12 rounded-lg object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-[hsl(220,20%,16%)] truncate">{track.title}</p>
        <p className="text-xs text-gray-500 truncate">{track.meta}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button className="bg-[hsl(178,52%,44%)] hover:bg-[hsl(178,52%,38%)] text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors">
          Play
        </button>
        <button className="bg-white border border-[hsl(200,20%,88%)] hover:bg-gray-50 text-[hsl(220,20%,18%)] text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors">
          Add
        </button>
      </div>
    </div>
  );
}

function LatestTracksSection() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div>
          <h2 className="font-bold text-[hsl(220,20%,16%)] mb-1">Latest Tracks</h2>
          <p className="text-xs text-gray-500 mb-4">Play the standout songs from Shadmehr Aghili.</p>
          <div className="flex flex-col gap-4 mt-10">
            {TRACKS.map((track, index) => (
              <TrackRow key={track.title} track={track} isLight={index === 1} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="h-[300px] rounded-xl overflow-hidden w-full aspect-[4/5] bg-[hsl(178,38%,80%)]">
            <img
              src={shadmehrImg5}
              alt="Shadmehr Aghili performing"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Exclusive behind-the-scenes content and acoustic versions available with album preorders.
          </p>
        </div>
      </div>
    </div>
  );
}

function VideoSpotlightSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <h2 className="font-bold text-[hsl(220,20%,16%)] mb-1 text-base">Video Spotlight</h2>
        <p className="text-gray-500 mb-4">
          Watch the emotional official video for 'Door Shodi' — directed by Shadmehr Aghili.
        </p>

        <div className="flex gap-4 bg-[hsl(178,38%,90%)] rounded-xl p-4 mt-14 flex-col sm:flex-row items-center justify-center text-center sm:text-left sm:items-start">
          <div className="w-52 h-45 rounded-lg overflow-hidden bg-gray-200 shrink-0 relative">
            <img
              src={shadmehrImg6}
              alt="Vaghti Ke Bad Misham video thumbnail"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                <svg 
                  className="w-5 h-5 text-white ml-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between sm:ml-5">
            <div>
              <h3 className="font-semibold text-base text-[hsl(220,20%,16%)] mb-1">
                Vaghti Ke Bad Misham
              </h3>
              <p className="text-sm text-gray-600 leading-normal mt-3">
                A haunting ballad about heartbreak and the painful realization of losing someone beyond recognition. Shot in Los Angeles.
              </p>
            </div>

            <div className="flex flex-row gap-2 mt-4 flex-wrap justify-center md:justify-start">
              <button className="bg-[hsl(178,52%,44%)] hover:bg-[hsl(178,52%,38%)] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                Watch Full Video
              </button>
              <button className="bg-white border border-gray-200 hover:bg-gray-50 text-[hsl(220,20%,18%)] text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                Behind the Scenes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[hsl(178,38%,86%)] rounded-2xl p-5 flex flex-col gap-5">
        <div>
          <h2 className="font-bold text-[hsl(220,20%,16%)] mb-2">About Shadmehr Aghili</h2>
          <p className="text-xs text-[hsl(220,15%,30%)] leading-relaxed">
            Shadmehr Aghili is an Iranian singer-songwriter and composer, known for his emotional pop ballads and cinematic arrangements. With a career spanning over two decades, he has become one of the most influential voices in Persian music.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm text-[hsl(220,20%,16%)] mb-2">Quick Facts</h3>
          <div className="flex flex-col gap-1.5 text-xs text-[hsl(220,15%,30%)]">
            <div className="flex gap-1">
              <span className="font-semibold text-[hsl(220,20%,14%)]">Origin:</span> Los Angeles, CA
            </div>
            <div className="flex gap-1">
              <span className="font-semibold text-[hsl(220,20%,14%)]">Genres:</span> Pop · Orchestral Pop · Ballad
            </div>
            <div className="flex gap-1">
              <span className="font-semibold text-[hsl(220,20%,14%)]">Active:</span> 1997 — Present
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm text-[hsl(220,20%,16%)] mb-2">Latest Press</h3>
          <p className="text-xs text-[hsl(220,15%,30%)] italic leading-relaxed">
            "Shadmehr's voice carries the weight of a generation."
          </p>
        </div>
      </div>
    </div>
  );
}

function PhotosSection() {
  return (
    <section className="bg-white rounded-2xl p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="font-bold text-[hsl(220,20%,16%)] text-2xl mb-2">Photos</h2>
        <p className="text-sm text-gray-500">
          Capturing Shadmehr's most unforgettable moments — on stage and behind the scenes.
        </p>
      </div>

      {/* Row 1: tall left + wide/two right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Left column — single tall vertical image */}
        <div className="rounded-2xl overflow-hidden h-64 md:h-[356px]">
          <img
            src={shadmehrImg14}
            alt="Shadmehr portrait"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right column — wide top + two small bottom */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden h-[200px]">
            <img
              src={shadmehrImg15}
              alt="Shadmehr live"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-[140px]">
              <img
                src={shadmehrImg2}
                alt="Shadmehr singing"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[140px]">
              <img
                src={shadmehrImg13}
                alt="Shadmehr guitar"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: wide/two left + tall right (mirror of row 1) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left column — wide top + two small bottom */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden h-[200px]">
            <img
              src={shadmehrImg8}
              alt="Shadmehr on stage"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-[140px]">
              <img
                src={shadmehrImg7}
                alt="Shadmehr backstage"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[140px]">
              <img
                src={shadmehrImg9}
                alt="Shadmehr close-up"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right column — single tall vertical image */}
        <div className="rounded-2xl overflow-hidden h-64 md:h-[356px]">
          <img
            src={shadmehrImg10}
            alt="Shadmehr portrait 2"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

    </section>
  );
}



function Footer() {
  return (
    <footer className="bg-[hsl(178,52%,44%)] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 font-bold text-xl tracking-widest mb-4">
              <MusicNoteIcon />
              <span>SHADMEHR</span>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Booking & press: press@shadmehr.com
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <YoutubeIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Tour */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tour</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Upcoming dates</a></li>
              <li><a href="#" className="hover:underline">Tickets</a></li>
              <li><a href="#" className="hover:underline">VIP & Hospitality</a></li>
            </ul>
          </div>

          {/* Music */}
          <div>
            <h3 className="font-bold text-lg mb-4">Music</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Albums</a></li>
              <li><a href="#" className="hover:underline">Singles</a></li>
              <li><a href="#" className="hover:underline">Videos</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Press Kit</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/70">
          <p>© 2026 Shadmehr Aghili · All rights reserved · Shadmehr Management, Los Angeles, CA</p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[hsl(220,14%,96%)] font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">

          <div className="bg-[hsl(178,38%,86%)] rounded-2xl p-5 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6 items-start">

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-[hsl(45,95%,55%)] text-[hsl(220,20%,14%)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    New Album
                  </span>
                  <span className="text-sm text-gray-500">Released March 2026</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-[hsl(220,20%,12%)] leading-tight">
                  DOOR SHODI
                </h1>

                <p className="text-sm text-[hsl(220,15%,35%)] leading-snug max-w-sm">
                  Shadmehr Aghili's emotional single — a haunting pop ballad about heartbreak,
                  distance, and the painful realization that love can change someone beyond recognition.
                </p>

                <div className="flex gap-3 flex-wrap mt-[30px] justify-center md:justify-start">
                  <button className="bg-[hsl(178,52%,44%)] hover:bg-[hsl(178,52%,38%)] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
                    Listen Now
                  </button>
                  <button className="bg-[hsl(178,52%,44%)] hover:bg-[hsl(178,52%,38%)] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
                    Watch Video
                  </button>
                </div>

                <div className="flex gap-2 flex-wrap mt-[10px] justify-center md:justify-start">
                  {[
                    { name: "Spotify", icon: <SpotifyIcon /> },
                    { name: "Apple Music", icon: <AppleIcon /> },
                    { name: "SoundCloud", icon: <SoundCloudIcon /> },
                  ].map((s) => (
                    <button
                      key={s.name}
                      className="flex items-center gap-1.5 bg-[hsl(220,20%,18%)] text-white text-xs font-medium px-3 py-2 rounded-full hover:bg-[hsl(220,20%,28%)] transition-colors"
                    >
                      {s.icon}
                      {s.name}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-7 mt-[70px]">
                  {STATS.map((s) => (
                    <div key={s.title} className="flex items-center gap-3">
                      <div className="w-[40px] h-[40px] rounded-full bg-white/70 flex items-center justify-center shrink-0">
                        {s.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[hsl(220,20%,16%)]">{s.title}</p>
                        <p className="text-xs text-gray-500">{s.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 items-center">
                <CountdownWidget />
                <div className="rounded-2xl overflow-hidden w-full md:w-[350px] md:ml-[-90px] h-[400px]">
                  <img
                    src={shadmehrImg}
                    alt="Shadmehr Aghili"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">

            <div className="bg-[hsl(178,38%,86%)] rounded-2xl p-5">
              <div className="flex justify-between items-center mb-1">
                <h2 className="font-bold text-[hsl(220,20%,16%)]">Get Tickets</h2>
                <a href="#" className="text-[hsl(178,52%,36%)] text-sm font-medium hover:underline">Tour</a>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                Secure your seats for upcoming concerts — limited VIP and general admission available.
              </p>
              {TOURS.map((t) => (
                <TourCard key={t.date + t.venue} tour={t} />
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h2 className="font-bold text-[hsl(220,20%,16%)] mb-1 text-center md:text-left">Follow Shadmehr Aghili</h2>
              <p className="text-xs text-gray-500 mb-4 text-center md:text-left">
                Stay connected for exclusive content, tour announcements, and behind-the-scenes access.
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                {[
                  { icon: <InstagramIcon />, label: "Instagram" },
                  { icon: <YoutubeIcon />, label: "YouTube" },
                  { icon: <TwitterIcon />, label: "Twitter" },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-[hsl(178,38%,86%)] flex items-center justify-center text-[hsl(178,52%,36%)] hover:bg-[hsl(178,38%,80%)] transition-colors"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h2 className="font-bold text-[hsl(220,20%,16%)] mb-3">Merch Spotlight</h2>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[hsl(178,38%,86%)] flex items-center justify-center text-2xl shrink-0">
                  👕
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-[hsl(220,20%,16%)] truncate">"Door Shodi" Tour Tee</p>
                  <p className="text-xs text-gray-500 truncate">Limited Edition · $35</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-[hsl(178,52%,44%)] hover:bg-[hsl(178,52%,38%)] text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 border border-gray-200 hover:bg-gray-50 text-sm font-semibold py-2 rounded-lg transition-colors">
                  View
                </button>
              </div>
            </div>

          </div>
        </div>

        <LatestTracksSection />

        <VideoSpotlightSection />

        <PhotosSection />

      </main>

      <Footer />
    </div>
  );
}
