"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Official Click-to-Chat URL
  const waUrl = "https://wa.me/919257890600?text=Hi%20MehndiGo%2C%20I%20have%20a%20query%20regarding%20booking%20an%20artist.";

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Visual Tooltip */}
      <div 
        role="tooltip"
        className={`bg-luxury-green border border-luxury-gold/20 text-white px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide shadow-gold absolute right-full mr-3 whitespace-nowrap transition-all duration-300 pointer-events-none transform ${
          showTooltip 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-2"
        }`}
      >
        Chat with Us
      </div>

      {/* Floating Pulsing Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none scale-105" />

      {/* Accessible Anchor link */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MehndiGo on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_10px_35px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        {/* SVG WhatsApp Official Logo */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 md:w-8 md:h-8 fill-current" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.017 14.12 1.01 11.5 1.01c-5.436 0-9.861 4.371-9.865 9.8.001 2.046.541 4.04 1.568 5.828l-.973 3.553 3.641-.954zm10.902-7.53c-.294-.148-1.743-.86-2.012-.958-.269-.098-.465-.148-.66.147-.197.295-.76.958-.931 1.154-.173.197-.346.221-.64.073-.294-.148-1.24-.457-2.363-1.46-1.01-1.009-1.72-2.257-1.917-2.552-.197-.294-.02-.454.127-.601.134-.132.294-.343.441-.515.148-.171.197-.294.294-.49.098-.197.05-.369-.024-.516-.075-.148-.66-1.59-.904-2.179-.24-.576-.48-.497-.66-.506-.17-.008-.367-.01-.565-.01-.197 0-.518.074-.789.369-.27.295-1.03.1008-1.03 2.455 0 2.357 1.716 4.63 1.957 4.954.24.324 3.377 5.16 8.18 7.234 1.142.493 2.032.787 2.723 1.007 1.147.365 2.19.314 3.014.19.917-.137 2.812-1.148 3.205-2.259.393-1.11.393-2.062.275-2.259-.118-.197-.441-.295-.736-.443z" />
        </svg>
      </a>
    </div>
  );
}
