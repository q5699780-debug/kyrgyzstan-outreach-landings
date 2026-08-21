import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark' | 'color';
}

/**
 * REDCAR DETAILING (Ош)
 * Красный щит с аэродинамической литерой R и скоростными линиями
 */
export const RedcarLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <path d="M12 8L36 4L48 18V42L36 56L12 52L4 30L12 8Z" fill="#E59B24" />
    <path d="M16 12L34 9L44 20V40L34 51L16 48L9 30L16 12Z" fill="#07090D" />
    <path d="M20 18H32C36.4183 18 40 21.5817 40 26C40 30.4183 36.4183 34 32 34H26V44H20V18ZM26 23V29H32C33.6569 29 35 27.6569 35 26C35 24.3431 33.6569 23 32 23H26Z" fill="#E59B24" />
    <path d="M30 32L39 44H33L25 32H30Z" fill="#FFFFFF" />
    <text x="60" y="29" fill="#FFFFFF" fontFamily="monospace" fontSize="22" fontWeight="900" letterSpacing="2">REDCAR</text>
    <text x="60" y="44" fill="#E59B24" fontFamily="monospace" fontSize="10" fontWeight="700" letterSpacing="4">DETAILING OSH</text>
  </svg>
);

/**
 * DR. ATAZHANOV CLINIC (Ош)
 * Швейцарский медицинский крест и эстетическая корона зуба
 */
export const AtazhanovLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" rx="10" fill="#005B64" />
    {/* Swiss Cross */}
    <rect x="24" y="16" width="8" height="28" rx="2" fill="#FFFFFF" />
    <rect x="14" y="26" width="28" height="8" rx="2" fill="#FFFFFF" />
    {/* Subtle Dental Arc */}
    <path d="M19 40C24 44 32 44 37 40" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    <text x="62" y="27" fill="#0E1724" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" letterSpacing="1">DR. ATAZHANOV</text>
    <text x="62" y="43" fill="#005B64" fontFamily="sans-serif" fontSize="9.5" fontWeight="600" letterSpacing="2.5">SWISS DENTAL SURGERY • OSH</text>
  </svg>
);

/**
 * ALAKOL GUEST HOUSE (Каракол)
 * Заснеженный пик Ала-Куль и ветви тянь-шаньской ели
 */
export const AlakolLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#121E17" stroke="#2ECC71" strokeWidth="2" />
    {/* Mountain peaks */}
    <path d="M14 42L28 18L42 42H14Z" fill="#1E824C" />
    <path d="M28 18L35 30L42 42H28L28 18Z" fill="#155D36" />
    <path d="M28 18L24 25L28 27L32 25L28 18Z" fill="#FFFFFF" />
    {/* Little Fir */}
    <path d="M28 34L25 39H31L28 34Z" fill="#2ECC71" />
    <text x="62" y="27" fill="#FFFFFF" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" letterSpacing="1.5">ALAKOL</text>
    <text x="62" y="43" fill="#2ECC71" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">ALPINE CHALET • KARAKOL</text>
  </svg>
);

/**
 * MARSHAL GROUP (Бишкек)
 * Монументальная золотая литера M с архитектурными осями
 */
export const MarshalLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 270 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" rx="6" fill="#090A0D" stroke="#C99700" strokeWidth="2" />
    <path d="M15 42V18L28 32L41 18V42M28 32V42" stroke="#E5B53A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="Cinzel, Georgia, serif" fontSize="18" fontWeight="800" letterSpacing="3">MARSHAL</text>
    <text x="60" y="43" fill="#C99700" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">ARCHITECTURE & BUILD • BISHKEK</text>
  </svg>
);

/**
 * TOO.KG EXPEDITIONS (Тянь-Шань)
 * Роза ветров и внедорожный протектор 4x4
 */
export const TooKgLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#070B07" stroke="#27AE60" strokeWidth="2" />
    <path d="M28 10L32 26H24L28 10Z" fill="#2ECC71" />
    <path d="M28 50L24 34H32L28 50Z" fill="#1E824C" />
    <path d="M10 30L26 26V34L10 30Z" fill="#1E824C" />
    <path d="M50 30L34 34V26L50 30Z" fill="#2ECC71" />
    <circle cx="28" cy="30" r="4" fill="#FFFFFF" />
    <text x="62" y="27" fill="#FFFFFF" fontFamily="monospace" fontSize="20" fontWeight="900" letterSpacing="1">TOO.KG</text>
    <text x="62" y="43" fill="#2ECC71" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">4X4 EXPEDITIONS</text>
  </svg>
);

/**
 * МАШХУРА МЕБЕЛЬ (Ош)
 * Геометрическая золотая литера М мебельного ателье
 */
export const MashhuraLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" rx="8" fill="#16161A" stroke="#D4A373" strokeWidth="2" />
    <path d="M16 40V20L28 30L40 20V40" stroke="#D4A373" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="28" cy="38" r="2" fill="#D4A373" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="Georgia, serif" fontSize="17" fontWeight="700" letterSpacing="2">МАШХУРА</text>
    <text x="60" y="43" fill="#D4A373" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">МЕБЕЛЬНОЕ АТЕЛЬЕ • ОШ</text>
  </svg>
);

/**
 * LUAR BANQUET HALL (Кант)
 * Королевская корона с кристаллами
 */
export const LuarLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 250 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#1A1410" stroke="#D97706" strokeWidth="2" />
    <path d="M16 38L18 22L24 28L28 18L32 28L38 22L40 38H16Z" fill="#F59E0B" />
    <circle cx="28" cy="16" r="2" fill="#FEF3C7" />
    <circle cx="18" cy="20" r="1.5" fill="#FEF3C7" />
    <circle cx="38" cy="20" r="1.5" fill="#FEF3C7" />
    <text x="62" y="27" fill="#1A1410" fontFamily="Cinzel, Georgia, serif" fontSize="22" fontWeight="900" letterSpacing="4">LUAR</text>
    <text x="62" y="43" fill="#B45309" fontFamily="Cinzel, sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="3">GRAND PALACE • KANT</text>
  </svg>
);

/**
 * ORTO ASIA PALACE (Ош)
 * Восточный купол Шелкового Пути
 */
export const OrtoAsiaLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 270 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" rx="10" fill="#1F0D12" stroke="#F59E0B" strokeWidth="2" />
    <path d="M28 14C20 22 18 28 18 36H38C38 28 36 22 28 14Z" fill="#F59E0B" />
    <rect x="25" y="36" width="6" height="6" fill="#F59E0B" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="Georgia, serif" fontSize="18" fontWeight="800" letterSpacing="2">ORTO ASIA</text>
    <text x="60" y="43" fill="#F59E0B" fontFamily="Georgia, serif" fontSize="9.5" fontWeight="700" letterSpacing="3">SILK ROAD PALACE • OSH</text>
  </svg>
);

/**
 * ZETO RESORT (Чолпон-Ата)
 * Лазурные волны озера Иссык-Куль
 */
export const ZetoLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" rx="10" fill="#0C4A6E" />
    <path d="M14 22H42L22 38H42" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 42C20 40 24 44 28 42C32 40 36 44 42 42" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
    <text x="60" y="27" fill="#0F172A" fontFamily="sans-serif" fontSize="20" fontWeight="900" letterSpacing="2">ZETO<tspan fill="#0284C7">.</tspan></text>
    <text x="60" y="43" fill="#0284C7" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">LAKEFRONT VILLAS • CHOLPON-ATA</text>
  </svg>
);

/**
 * ADAT BARBERSHOP (Бишкек)
 * Скрещенные опасные бритвы джентльменского клуба
 */
export const AdatLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#0E0E10" stroke="#D97706" strokeWidth="2" />
    <path d="M16 18L40 42M16 26L32 42M40 18L16 42M40 26L24 42" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    <circle cx="28" cy="30" r="3" fill="#FEF3C7" />
    <text x="62" y="27" fill="#FFFFFF" fontFamily="Cinzel, Georgia, serif" fontSize="20" fontWeight="900" letterSpacing="4">ADAT</text>
    <text x="62" y="43" fill="#F59E0B" fontFamily="Cinzel, sans-serif" fontSize="9" fontWeight="700" letterSpacing="3">GENTLEMEN'S CLUB • BISHKEK</text>
  </svg>
);

/**
 * DELMAR (Кара-Балта)
 * Цветочный венок ресторан-парка
 */
export const DelmarLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#07241A" stroke="#FACC15" strokeWidth="2" />
    <path d="M20 18H28C34.6274 18 40 23.3726 40 30C40 36.6274 34.6274 42 28 42H20V18ZM26 24V36H28C31.3137 36 34 33.3137 34 30C34 26.6863 31.3137 24 28 24H26Z" fill="#FACC15" />
    <circle cx="20" cy="18" r="2.5" fill="#4ADE80" />
    <circle cx="20" cy="42" r="2.5" fill="#4ADE80" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="Georgia, serif" fontSize="18" fontWeight="800" letterSpacing="3">D'ELMAR</text>
    <text x="60" y="43" fill="#FACC15" fontFamily="Georgia, serif" fontSize="9" fontWeight="700" letterSpacing="2.5">GARDEN RESTAURANT • KARA-BALTA</text>
  </svg>
);

/**
 * TORO AUTO 4X4 (Каракол)
 * Мощный внедорожный щит Toro
 */
export const ToroLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 270 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <path d="M10 10H46L50 32L28 52L6 32L10 10Z" fill="#18181D" stroke="#EA580C" strokeWidth="2.5" />
    <path d="M16 22L28 14L40 22V32L28 40L16 32V22Z" fill="#EA580C" />
    <text x="28" y="32" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontSize="13" fontWeight="900">4x4</text>
    <text x="62" y="27" fill="#FFFFFF" fontFamily="monospace" fontSize="20" fontWeight="900" letterSpacing="2">TORO<tspan fill="#EA580C">.AUTO</tspan></text>
    <text x="62" y="43" fill="#EA580C" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">4X4 ARMOR • KARAKOL</text>
  </svg>
);

/**
 * NEOSTYLE ARCHITECTURE (Бишкек)
 * Авангардная архитектурная монограмма N
 */
export const NeoStyleLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" fill="#08090C" stroke="#FFFFFF" strokeWidth="2" />
    <path d="M16 42V18L40 42V18" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="square" />
    <line x1="6" y1="30" x2="50" y2="30" stroke="#52525B" strokeWidth="1" strokeDasharray="2 2" />
    <text x="62" y="27" fill="#FFFFFF" fontFamily="monospace" fontSize="20" fontWeight="900" letterSpacing="3">NEOSTYLE</text>
    <text x="62" y="43" fill="#A1A1AA" fontFamily="monospace" fontSize="9.5" fontWeight="600" letterSpacing="3">ARCHITECTURE • BISHKEK</text>
  </svg>
);

/**
 * AMANAT TUNING (Бишкек)
 */
export const AmanatLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <polygon points="12,12 44,12 36,48 4,48" fill="#DC2626" />
    <path d="M18 20H38L32 40H12L18 20Z" fill="#08080A" />
    <path d="M22 25L32 25L28 35L18 35L22 25Z" fill="#DC2626" />
    <text x="56" y="27" fill="#FFFFFF" fontFamily="monospace" fontSize="20" fontWeight="900" letterSpacing="2">AMANAT</text>
    <text x="56" y="43" fill="#DC2626" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">PERFORMANCE TUNING</text>
  </svg>
);

/**
 * BARKYBAEV CLINIC (Ош)
 */
export const BarkybaevLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#0F172A" stroke="#1D4ED8" strokeWidth="2" />
    <rect x="24" y="16" width="8" height="28" rx="2" fill="#38BDF8" />
    <rect x="14" y="26" width="28" height="8" rx="2" fill="#38BDF8" />
    <text x="60" y="27" fill="#0F172A" fontFamily="Georgia, serif" fontSize="17" fontWeight="800" letterSpacing="1.5">БАРКЫБАЕВ</text>
    <text x="60" y="43" fill="#1D4ED8" fontFamily="sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="2">ЦЕНТР ХИРУРГИИ • ОШ</text>
  </svg>
);

/**
 * GOLD STROY KG (Бишкек)
 */
export const GoldStroyLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" rx="4" fill="#0F1115" stroke="#E5A93C" strokeWidth="2" />
    <path d="M12 40L28 16L44 40H12Z" stroke="#E5A93C" strokeWidth="2.5" />
    <path d="M28 16V40" stroke="#E5A93C" strokeWidth="2" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="Cinzel, serif" fontSize="19" fontWeight="900" letterSpacing="2">GOLD STROY</text>
    <text x="60" y="43" fill="#E5A93C" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">DEVELOPMENT • BISHKEK</text>
  </svg>
);

/**
 * DESTINATION KARAKOL (Каракол)
 */
export const DestinationKarakolLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 290 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#091510" stroke="#10B981" strokeWidth="2" />
    <path d="M14 40L28 18L42 40H14Z" fill="#10B981" />
    <path d="M28 18L35 28L42 40H28L28 18Z" fill="#059669" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="monospace" fontSize="17" fontWeight="900" letterSpacing="1">DESTINATION</text>
    <text x="60" y="43" fill="#10B981" fontFamily="monospace" fontSize="9.5" fontWeight="800" letterSpacing="3">KARAKOL ADVENTURE</text>
  </svg>
);

/**
 * MEBEL HOUSE (Ош)
 */
export const MebelHouseLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" rx="8" fill="#141416" stroke="#E0A96D" strokeWidth="2" />
    <path d="M14 22H42V38H14V22Z" stroke="#E0A96D" strokeWidth="2.5" />
    <path d="M14 38V44M42 38V44" stroke="#E0A96D" strokeWidth="2.5" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontSize="18" fontWeight="800" letterSpacing="1.5">MEBEL HOUSE</text>
    <text x="60" y="43" fill="#E0A96D" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="2.5">DESIGN & LIVING • OSH</text>
  </svg>
);

/**
 * SALTANAT (Джалал-Абад)
 */
export const SaltanatLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#1A080C" stroke="#F59E0B" strokeWidth="2" />
    <path d="M16 38L20 22L28 30L36 22L40 38H16Z" fill="#F59E0B" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="Cinzel, serif" fontSize="19" fontWeight="900" letterSpacing="3">SALTANAT</text>
    <text x="60" y="43" fill="#F59E0B" fontFamily="Cinzel, sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="2.5">GRAND HALL • JALAL-ABAD</text>
  </svg>
);

/**
 * DEUTSCH SAMARA AKADEMIE (Ош)
 */
export const DeutschSamaraLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 290 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" rx="6" fill="#0A1128" stroke="#FFC72C" strokeWidth="2" />
    <path d="M12 16H44V24H12V16Z" fill="#000000" />
    <path d="M12 24H44V32H12V24Z" fill="#DC2626" />
    <path d="M12 32H44V40H12V32Z" fill="#FFC72C" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="sans-serif" fontSize="17" fontWeight="800" letterSpacing="1">DEUTSCH SAMARA</text>
    <text x="60" y="43" fill="#FFC72C" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="2">AUSBILDUNG • OSH</text>
  </svg>
);

/**
 * NOMAD HOUSE TALAS (Талас)
 */
export const NomadTalasLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#121611" stroke="#22C55E" strokeWidth="2" />
    <path d="M14 38C14 26 22 18 28 18C34 18 42 26 42 38H14Z" fill="#22C55E" />
    <circle cx="28" cy="24" r="3" fill="#121611" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="Georgia, serif" fontSize="18" fontWeight="800" letterSpacing="1.5">NOMAD HOUSE</text>
    <text x="60" y="43" fill="#22C55E" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="2.5">BESH-TASH • TALAS</text>
  </svg>
);

/**
 * KUTMAN MEBEL (Ош)
 */
export const KutmanLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <rect x="6" y="8" width="44" height="44" rx="8" fill="#0D1117" stroke="#0284C7" strokeWidth="2" />
    <path d="M16 16V44M16 30L36 16M16 30L36 44" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="monospace" fontSize="19" fontWeight="900" letterSpacing="2">KUTMAN</text>
    <text x="60" y="43" fill="#0284C7" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">B2B MEBEL • OSH</text>
  </svg>
);

/**
 * DOS TOUR KG (Бишкек)
 */
export const DosTourLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', size = 40 }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} height={size}>
    <circle cx="28" cy="30" r="24" fill="#0F1216" stroke="#F59E0B" strokeWidth="2" />
    <path d="M28 10L32 26H24L28 10Z" fill="#F59E0B" />
    <path d="M28 50L24 34H32L28 50Z" fill="#D97706" />
    <path d="M10 30L26 26V34L10 30Z" fill="#D97706" />
    <path d="M50 30L34 34V26L50 30Z" fill="#F59E0B" />
    <text x="60" y="27" fill="#FFFFFF" fontFamily="monospace" fontSize="20" fontWeight="900" letterSpacing="2">DOS TOUR</text>
    <text x="60" y="43" fill="#F59E0B" fontFamily="monospace" fontSize="9.5" fontWeight="700" letterSpacing="3">4X4 EXPEDITIONS KG</text>
  </svg>
);

/**
 * BRAND LOGO MAPPER
 */
export const BrandLogo: React.FC<{ slug: string; className?: string; size?: number }> = ({ slug, className, size }) => {
  switch (slug) {
    case 'redcar-detailing':
      return <RedcarLogo className={className} size={size} />;
    case 'dr-atazhanov-clinic':
      return <AtazhanovLogo className={className} size={size} />;
    case 'alakol-guest-house':
      return <AlakolLogo className={className} size={size} />;
    case 'marshal-group':
      return <MarshalLogo className={className} size={size} />;
    case 'too-kg-expeditions':
      return <TooKgLogo className={className} size={size} />;
    case 'mashhura-mebel':
      return <MashhuraLogo className={className} size={size} />;
    case 'luar-banquet-hall':
      return <LuarLogo className={className} size={size} />;
    case 'orto-asia-palace':
      return <OrtoAsiaLogo className={className} size={size} />;
    case 'zeto-resort':
      return <ZetoLogo className={className} size={size} />;
    case 'adat-barbershop':
      return <AdatLogo className={className} size={size} />;
    case 'delmar-kara-balta':
      return <DelmarLogo className={className} size={size} />;
    case 'toro-auto-karakol':
      return <ToroLogo className={className} size={size} />;
    case 'neostyle-architecture':
      return <NeoStyleLogo className={className} size={size} />;
    case 'amanat-tuning':
      return <AmanatLogo className={className} size={size} />;
    case 'barkybaev-clinic':
      return <BarkybaevLogo className={className} size={size} />;
    case 'goldstroy-kg':
      return <GoldStroyLogo className={className} size={size} />;
    case 'destination-karakol':
      return <DestinationKarakolLogo className={className} size={size} />;
    case 'mebelhouse-osh':
      return <MebelHouseLogo className={className} size={size} />;
    case 'saltanat-jalalabad':
      return <SaltanatLogo className={className} size={size} />;
    case 'deutsch-samara-osh':
      return <DeutschSamaraLogo className={className} size={size} />;
    case 'nomad-talas':
      return <NomadTalasLogo className={className} size={size} />;
    case 'kutman-mebel-osh':
      return <KutmanLogo className={className} size={size} />;
    case 'dostour-kg':
      return <DosTourLogo className={className} size={size} />;
    default:
      return null;
  }
};

