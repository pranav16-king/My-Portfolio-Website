import React from 'react';

export default function Certificates() {
  return (
    <>
      <section id="certificates" className="white-bg section-transition section-pad backdrop-blur-lg bg-white/60">
    <div className="container-wide px-2">
      <h2 className="text-4xl font-bold text-center section-head font-poppins fade-up 
               text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600
               drop-shadow-md animate-fade-slide" style={{ animationDelay: '0.1s' }}>
        My <span className="accent-gradient font-extrabold tracking-wide">Certificates</span>
      </h2>

      <div className="overflow-y-auto mt-4 p-2 rounded-xl shadow-inner 
                bg-gradient-to-br from-indigo-600/40 via-purple-600/20 to-cyan-600/10
                border border-theme-border backdrop-blur-xl
                animate-soft-fade" style={{ maxHeight: '800px' }}>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/*  Certificate Card – Cogni-Sphere 2025 Winner (Royal Gold Luxe Theme)  */}
          <div
            className="relative rounded-2xl shadow-2xl p-8 bg-gradient-to-br from-indigo-600 via-[#F7F7FA] to-[#ECECF3] border border-gray-300 overflow-hidden animate-fade-in">

            {/*  Decorative Gold Ribbon  */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#D4AF37] to-[#b8922f]"></div>

            {/*  Award Header  */}
            <div className="flex items-center gap-4 mt-3 animate-floating">
              <div className="text-4xl">🏆</div>
              <div className="flex flex-col">
                <span
                  className="text-2xl font-extrabold bg-gradient-to-r from-[#D4AF37] to-[#b8922f] bg-clip-text text-transparent tracking-wide">
                  1st Prize Winner
                </span>
                <span className="text-lg font-semibold text-[#0C1A3A] tracking-wide">
                  Certificate of Achievement
                </span>
              </div>
            </div>

            {/*  Decorative Divider  */}
            <div className="mt-3 mb-5 flex items-center">
              <div className="flex-grow h-px bg-gray-300"></div>
              <div className="mx-3 text-[#D4AF37] text-xl">✦</div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/*  Institute Details  */}
            <div className="space-y-1 text-center">
              <div className="text-xl font-bold text-[#0C1A3A]">TECH SURYA IT SOLUTION</div>
              <div className="text-sm text-gray-700">IETE | MIT CSN | TM</div>
              <div className="text-sm text-gray-700 font-medium">
                G.S. Mandal's Maharashtra Institute of Technology, Chhatrapati Sambhajinagar
              </div>
              <div className="text-xs italic text-theme-muted">(An Autonomous Institute)</div>
              <div className="text-xs text-gray-600 tracking-wide">Department of Electronics and Computer Engineering</div>
            </div>

            {/*  Certificate Image  */}
            <div
              className="w-full h-44 flex items-center justify-center overflow-hidden rounded-xl my-6 shadow-lg ring-1 ring-gray-300 bg-white animate-shimmer">
              <img loading="lazy" src="certificate_jpg/project compition.png" alt="Certificate" className="w-full h-full object-cover" />
            </div>

            {/*  Description  */}
            <div className="px-1">
              <p className="text-[15px] text-gray-800 leading-relaxed text-justify">
                This <strong className="text-[#0C1A3A]">Certificate of Achievement</strong> is formally awarded to
                <strong className="text-[#0C1A3A]">Pranav Khaire</strong> for securing the
                <strong className="text-[#D4AF37]">First Rank</strong> in
                <strong>"Cogni-Sphere 2025"</strong>, a 2-Day Technical & Non-Technical Project Competition organized by
                the
                <strong>IETE Student Forum</strong>, Department of Electronics and Computer Engineering,
                <strong>MIT Chhatrapati Sambhajinagar</strong>, held on
                <strong>13–14 October 2025</strong>.
              </p>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-gray-300"></div>
              <div className="mx-3 text-[#b8922f] text-xl">◆</div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/*  Signature Section (unchanged except cleaned alignment)  */}
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-[#0C1A3A] text-center mb-4 tracking-wide">Authorized Signatories
              </h3>

              <div className="grid grid-cols-3 gap-6">

                <div className="text-center">
                  <p className="signature text-lg font-semibold italic text-[#0C1A3A]">Dr. Priti Patil</p>
                  <p className="text-xs text-gray-600 mt-1">IETE Faculty Coordinator</p>
                </div>

                <div className="text-center">
                  <p className="signature text-lg font-semibold italic text-[#0C1A3A]">Dr. S. J. Nandedkar</p>
                  <p className="text-xs text-gray-600 mt-1">Head of ECE Department</p>
                </div>

                <div className="text-center">
                  <p className="signature text-lg font-semibold italic text-[#0C1A3A]">Dr. N. G. Patil</p>
                  <p className="text-xs text-gray-600 mt-1">Director</p>
                </div>

              </div>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-gray-300"></div>
              <div className="mx-3 text-[#D4AF37] text-xl">✦</div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/*  Updated Authorization Section ONLY  */}
            <div className="flex flex-col text-xs text-gray-700 leading-relaxed px-1">
              <span><strong>Status:</strong> WINNER</span>
              <span><strong>Rank:</strong> 1st Prize</span>
              <span><strong>Event:</strong> Cogni-Sphere 2025</span>
              <span><strong>Issued By:</strong> MIT Chhatrapati Sambhajinagar</span>
              <span><strong>Date Issued:</strong> 14 October 2025</span>
              <span><strong>Reference Code:</strong> CS-2025-1ST</span>
            </div>

            {/*  Buttons (unchanged)  */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="/certificate_pdf/Project compition .pdf" target="_blank"
                className="px-5 py-2 text-sm font-semibold text-[#0C1A3A] border-2 border-sky-400 rounded-lg hover:bg-sky-400 hover:text-theme-text transition-all shadow-sm">
                View Certificate
              </a>

              <a href="/certificate_pdf/Project compition .pdf" download
                className="px-5 py-2 text-sm font-semibold text-[#0C1A3A] border-2 border-sky-400 rounded-lg hover:bg-sky-400 hover:text-theme-text transition-all shadow-sm">
                Download
              </a>
            </div>

          </div>





          {/*  Certificate: Sankalpana 2025 – Second Prize Winner  */}
          <div
            className="relative rounded-2xl shadow-2xl p-8 bg-gradient-to-br from-indigo-600 via-[#F7F7FA] to-[#ECECF3] border border-gray-300 overflow-hidden animate-fade-in">

            {/*  Gold Ribbon  */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#D4AF37] to-[#b8922f]"></div>

            {/*  Award Header  */}
            <div className="flex items-center gap-4 mt-3 animate-floating">
              <div className="text-4xl">🏆</div>
              <div className="flex flex-col">
                <span
                  className="text-2xl font-extrabold bg-gradient-to-r from-[#D4AF37] to-[#b8922f] bg-clip-text text-transparent tracking-wide">
                  2nd Prize Winner
                </span>
                <span className="text-lg font-semibold text-[#0C1A3A] tracking-wide">
                  Certificate of Appreciation – Sankalpana 2025
                </span>
              </div>
            </div>

            {/*  Divider  */}
            <div className="mt-3 mb-5 flex items-center">
              <div className="flex-grow h-px bg-gray-300"></div>
              <div className="mx-3 text-[#D4AF37] text-xl">✦</div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/*  Institute Details  */}
            <div className="space-y-1 text-center">
              <div className="text-xl font-bold text-[#0C1A3A]">
                Maharashtra Institute of Technology, Chhatrapati Sambhajinagar
              </div>
              <div className="text-sm text-gray-700">Event: District Level Project Competition</div>
              <div className="text-sm text-gray-700">Issued By: Department of Electrical Engineering</div>
              <div className="text-xs italic text-theme-muted">(An Autonomous Institute)</div>
            </div>

            {/*  Certificate Image  */}
            <div
              className="w-full h-44 flex items-center justify-center overflow-hidden rounded-xl my-6 shadow-lg ring-1 ring-gray-300 bg-white animate-shimmer">
              <img loading="lazy" src="certificate_jpg/sankalpna 2025.jpg" alt="Certificate" className="w-full h-full object-cover" />
            </div>

            {/*  Description  */}
            <div className="px-1">
              <p className="text-[15px] text-gray-800 leading-relaxed text-justify">
                This <strong className="text-[#0C1A3A]">Certificate of Appreciation</strong> is proudly awarded to
                <strong className="text-[#0C1A3A]">Pranav Khaire</strong> for securing the
                <strong className="text-[#b8922f]">Second Prize</strong> in the district-level project competition
                <strong>"Sankalpana 2025"</strong>, held on <strong>15 November 2025</strong> at the
                Department of Electrical Engineering, MIT Chhatrapati Sambhajinagar.
              </p>

              <p className="text-[15px] text-gray-800 leading-relaxed text-justify mt-3">
                Your innovation, technical execution, and creativity have been recognized for showcasing excellent
                problem-solving and engineering abilities.
              </p>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-gray-300"></div>
              <div className="mx-3 text-[#b8922f] text-xl">◆</div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/*  Signature Section  */}
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-[#0C1A3A] text-center mb-4 tracking-wide">Authorized Signatories
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs text-gray-700">

                <div>
                  <p className="signature text-lg font-semibold italic text-[#0C1A3A]">Prof. Sonali Sabnis</p>
                  <p className="mt-1">Event Coordinator</p>
                </div>

                <div>
                  <p className="signature text-lg font-semibold italic text-[#0C1A3A]">Prof. G. D. Karanjgaokar</p>
                  <p className="mt-1">Event Coordinator</p>
                </div>

                <div>
                  <p className="signature text-lg font-semibold italic text-[#0C1A3A]">Dr. S. M. Badave</p>
                  <p className="mt-1">Head of Department</p>
                </div>

                <div>
                  <p className="signature text-lg font-semibold italic text-[#0C1A3A]">Dr. N. G. Patil</p>
                  <p className="mt-1">Director</p>
                </div>

              </div>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-gray-300"></div>
              <div className="mx-3 text-[#D4AF37] text-xl">✦</div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/*  ✔ Updated Authorization Section (Winner Theme Rules)  */}
            <div className="flex flex-col text-xs text-gray-700 leading-relaxed px-1">
              <span><strong>Status:</strong> WINNER</span>
              <span><strong>Rank:</strong> 2nd Prize</span>
              <span><strong>Event:</strong> Sankalpana 2025 – District Level Competition</span>
              <span><strong>Issued By:</strong> Department of Electrical Engineering, MIT</span>
              <span><strong>Date Issued:</strong> 15 November 2025</span>
              <span><strong>Reference Code:</strong> SAN-2025-2ND</span>
            </div>

            {/*  Buttons (unchanged)  */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="/certificate_pdf/2 nd rank  Sankalpana 2025.pdf" target="_blank"
                className="px-5 py-2 text-sm font-semibold text-[#0C1A3A] border-2 border-sky-400 rounded-lg hover:bg-sky-400 hover:text-theme-text transition-all shadow-sm">
                View Certificate
              </a>

              <a href="/certificate_pdf/2 nd rank  Sankalpana 2025.pdf" download
                className="px-5 py-2 text-sm font-semibold text-[#0C1A3A] border-2 border-sky-400 rounded-lg hover:bg-sky-400 hover:text-theme-text transition-all shadow-sm">
                Download
              </a>
            </div>

          </div>
<div
  className="relative rounded-2xl shadow-2xl p-8 bg-gradient-to-br from-indigo-600 via-[#F0F8FF] to-[#E6F4FF] border border-sky-200 overflow-hidden animate-fade-in">

  {/*  Sky Header Ribbon  */}
  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]"></div>

  {/*  Participation Header  */}
  <div className="flex items-center gap-4 mt-3">
    <div className="text-4xl">🎓</div>

    <div className="flex flex-col">
      <span className="text-2xl font-extrabold text-[#0284C7] tracking-wide">
        Certificate of Participation
      </span>

      <span className="text-lg font-semibold text-[#0C1A3A] tracking-wide">
        HackFusion 3 – National Hackathon
      </span>
    </div>
  </div>

  {/*  Divider  */}
  <div className="mt-3 mb-5 flex items-center">
    <div className="flex-grow h-px bg-sky-200"></div>
    <div className="mx-3 text-[#0284C7] text-xl">✦</div>
    <div className="flex-grow h-px bg-sky-200"></div>
  </div>

  {/*  Organizer Details  */}
  <div className="space-y-1 text-center">
    <div className="text-xl font-bold text-[#0C1A3A]">
      Google Developer Groups – SGGSIET Nanded
    </div>

    <div className="text-sm text-gray-700">
      Organized by SWAG Devs Club
    </div>

    <div className="text-sm text-gray-700">
      Event: HackFusion 3 Hackathon
    </div>

    <div className="text-xs italic text-theme-muted">
      27–28 February & 1 March 2026
    </div>
  </div>

  {/*  Certificate Image  */}
  <div
    className="w-full h-44 flex items-center justify-center overflow-hidden rounded-xl my-6 shadow-lg ring-1 ring-sky-200 bg-white hover:shadow-xl transition">

    <img loading="lazy" src="certificate_jpg/hackfusion.png"
      alt="HackFusion Certificate"
      className="w-full h-full object-cover" />
  </div>

  {/*  Description  */}
  <div className="px-1">
    <p className="text-[15px] text-gray-800 leading-relaxed text-justify">
      This <strong className="text-[#0284C7]">Certificate of Participation</strong>
      is awarded to
      <strong className="text-[#0C1A3A]">Pranav Samadhan Khaire</strong>
      for successfully participating in the national level hackathon
      <strong>"HackFusion 3"</strong> held at
      <strong>SGGS Institute of Engineering & Technology, Nanded</strong>.
    </p>

    <p className="text-[15px] text-gray-800 leading-relaxed text-justify mt-3">
      The event recognized innovation, collaboration, and technical excellence
      demonstrated through problem-solving and creative engineering solutions.
    </p>
  </div>

  {/*  Divider  */}
  <div className="mt-6 mb-4 flex items-center">
    <div className="flex-grow h-px bg-sky-200"></div>
    <div className="mx-3 text-[#0284C7] text-xl">◆</div>
    <div className="flex-grow h-px bg-sky-200"></div>
  </div>

  {/*  Signature Section  */}
  <div className="mt-2">
    <h3 className="text-sm font-semibold text-[#0284C7] text-center mb-4 tracking-wide">
      Authorized Signatories
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-xs text-gray-700">

      <div>
        <p className="signature text-lg font-semibold italic text-gray-800">
          Dr. J. M. Waghmare
        </p>
        <p className="mt-1">Faculty Coordinator</p>
      </div>

      <div>
        <p className="signature text-lg font-semibold italic text-gray-800">
          Dr. S. B. Dethe
        </p>
        <p className="mt-1">Dean Student Affairs</p>
      </div>

      <div>
        <p className="signature text-lg font-semibold italic text-gray-800">
          Dr. Manesh Kokare
        </p>
        <p className="mt-1">Director – SGGSIE&T</p>
      </div>

    </div>
  </div>

  {/*  Divider  */}
  <div className="mt-6 mb-4 flex items-center">
    <div className="flex-grow h-px bg-sky-200"></div>
    <div className="mx-3 text-[#0284C7] text-xl">✦</div>
    <div className="flex-grow h-px bg-sky-200"></div>
  </div>

  {/*  Authorization Section (Participation Theme Rules)  */}
  <div className="flex flex-col text-xs text-gray-700 leading-relaxed px-1">
    <span><strong>Status:</strong> PARTICIPATION</span>
    <span><strong>Signed By:</strong> Event Coordinator</span>
    <span><strong>Issued By:</strong> GDG On Campus – SGGSIET Nanded</span>
    <span><strong>Reference Code:</strong> HACKFUSION-3-2026</span>
    <span><strong>Date Issued:</strong> 1 March 2026</span>
  </div>

  {/*  Buttons  */}
  <div className="flex justify-center gap-4 mt-8">

    <a href="/certificate_pdf/hackfusion.pdf" target="_blank"
      className="px-5 py-2 text-sm font-semibold text-[#0284C7] border-2 border-sky-400 rounded-lg hover:bg-sky-400 hover:text-theme-text transition-all shadow-sm">
      View Certificate
    </a>

    <a href="/certificate_pdf/hackfusion.pdf" download
      className="px-5 py-2 text-sm font-semibold text-[#0284C7] border-2 border-sky-400 rounded-lg hover:bg-sky-400 hover:text-theme-text transition-all shadow-sm">
      Download
    </a>

  </div>

</div>

          {/*  Certificate Card – Smart India Hackathon 2025 (Participation Theme)  */}
          <div
            className="relative rounded-2xl shadow-2xl p-8 bg-gradient-to-br from-indigo-600 via-[#F3F7FF] to-[#E6EEFF] border border-blue-200 overflow-hidden animate-fade-in">

            {/*  Blue Ribbon  */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF]"></div>

            {/*  Header  */}
            <div className="flex items-center gap-4 mt-4">
              <div className="text-4xl">🎟️</div>
              <div className="flex flex-col">
                <span
                  className="text-2xl font-extrabold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent tracking-wide">
                  Certificate of Appreciation
                </span>
                <span className="text-lg font-semibold text-[#0C1A3A] tracking-wide">
                  Smart India Hackathon 2025 – Internal Hackathon
                </span>
              </div>
            </div>

            {/*  Divider  */}
            <div className="mt-3 mb-5 flex items-center">
              <div className="flex-grow h-px bg-blue-300"></div>
              <div className="mx-3 text-blue-700 text-xl">✦</div>
              <div className="flex-grow h-px bg-blue-300"></div>
            </div>

            {/*  Institute Info  */}
            <div className="space-y-1 text-center">
              <div className="text-xl font-bold text-[#0C1A3A]">
                G.S. Mandal’s MIT, Chhatrapati Sambhajinagar
              </div>
              <div className="text-sm text-gray-700">Under Ministry of Education, Government of India</div>
              <div className="text-sm text-gray-700">Supported by AICTE & MoE’s Innovation Cell</div>
              <div className="text-xs italic text-theme-muted">Dated: 24 September 2025</div>
            </div>

            {/*  Certificate Image  */}
            <div
              className="w-full h-44 flex items-center justify-center overflow-hidden rounded-xl my-6 shadow-lg ring-1 ring-blue-200 bg-white animate-shimmer">
              <img loading="lazy" src="certificate_jpg/SIH.png" alt="SIH Certificate" className="w-full h-full object-cover" />
            </div>

            {/*  Description  */}
            <p className="text-[15px] text-gray-800 leading-relaxed text-justify">
              This <strong className="text-[#1E40AF]">Certificate of Appreciation</strong> is awarded to
              <strong className="text-[#1E40AF]">Pranav Samadhan Khaire</strong> for successfully participating in the
              <strong>Smart India Hackathon 2025 – Internal Hackathon</strong>.
              The event encourages innovation, problem-solving capabilities, and technology-driven solutions.
            </p>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-blue-200"></div>
              <div className="mx-3 text-blue-700 text-xl">◆</div>
              <div className="flex-grow h-px bg-blue-200"></div>
            </div>

            {/*  Signature Section  */}
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-[#0C1A3A] text-center mb-4 tracking-wide">Authorized Signatories
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-xs text-gray-700">

                <div>
                  <p className="signature text-lg font-semibold italic text-[#1E40AF]">Dr. Prachi Deshpande</p>
                  <p className="mt-1">SPOC – SIH</p>
                </div>

                <div>
                  <p className="signature text-lg font-semibold italic text-[#1E40AF]">Dr. Nilesh Patil</p>
                  <p className="mt-1">Director</p>
                </div>

                <div>
                  <p className="signature text-lg font-semibold italic text-[#1E40AF]">MoE's Innovation Cell</p>
                  <p className="mt-1">National Initiative</p>
                </div>

              </div>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-blue-200"></div>
              <div className="mx-3 text-blue-700 text-xl">✦</div>
              <div className="flex-grow h-px bg-blue-200"></div>
            </div>

            {/*  ✔ Updated Authorization Section (Participation/Recognition Theme Rules)  */}
            <div className="flex flex-col text-xs text-gray-700 leading-relaxed px-1">
              <span><strong>Status:</strong> PARTICIPATION</span>
              <span><strong>Issued By:</strong> Maharashtra Institute of Technology, Chhatrapati Sambhajinagar</span>
              <span><strong>Signed By:</strong> SPOC – SIH & Director, MIT</span>
              <span><strong>Event:</strong> Smart India Hackathon 2025 – Internal Hackathon</span>
              <span><strong>Date Issued:</strong> 24 September 2025</span>
              <span><strong>Reference Code:</strong> SIH-INT-2025</span>
            </div>

            {/*  Buttons  */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="certificate_pdf/Smart India Havcketon.pdf" target="_blank"
                className="px-5 py-2 text-sm font-semibold text-[#1E40AF] border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-theme-text transition-all shadow-sm">
                View Certificate
              </a>

              <a href="certificate_pdf/Smart India Havcketon.pdf" download
                className="px-5 py-2 text-sm font-semibold text-[#1E40AF] border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-theme-text transition-all shadow-sm">
                Download
              </a>
            </div>

          </div>

          {/*  Certificate Card – TCS iON Career Edge (Completion – Royal Lavender Pro Theme)  */}
          <div
            className="relative rounded-2xl shadow-xl p-8 bg-gradient-to-br from-indigo-600 via-purple-50 to-purple-100 border border-purple-200 overflow-hidden animate-fade-in">

            {/*  Lavender–Indigo Header Bar  */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 to-indigo-600"></div>

            {/*  Header  */}
            <div className="flex items-center gap-4 mt-4 animate-floating">
              <div className="text-4xl">🟣</div>
              <div className="flex flex-col">
                <span
                  className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
                  Certificate of Achievement ⭐
                </span>
                <span className="text-lg font-semibold text-[#6D28D9] tracking-wide">
                  TCS iON Career Edge – Young Professional
                </span>
              </div>
            </div>

            {/*  Decorative Divider  */}
            <div className="mt-3 mb-5 flex items-center">
              <div className="flex-grow h-px bg-purple-200"></div>
              <div className="mx-3 text-purple-600 text-xl">✦</div>
              <div className="flex-grow h-px bg-purple-200"></div>
            </div>

            {/*  Issuing Institute  */}
            <div className="space-y-1 text-center">
              <div className="text-xl font-bold text-[#4B0082]">Tata Consultancy Services (TCS iON)</div>
              <div className="text-sm text-gray-700">Completion Certificate</div>
              <div className="text-xs text-gray-600 tracking-wide">Certificate ID: 240640-29228129-1016</div>
              <div className="text-xs italic text-theme-muted">Issued on 10 November 2025</div>
            </div>

            {/*  Certificate Image  */}
            <div
              className="w-full h-44 flex items-center justify-center overflow-hidden rounded-xl my-6 shadow-lg ring-1 ring-purple-300 bg-white animate-shimmer">
              <img loading="lazy" src="certificate_jpg/TCS.png" alt="Certificate" className="w-full h-full object-cover" />
            </div>

            {/*  Description  */}
            <div className="px-1">
              <p className="text-[15px] text-gray-800 leading-relaxed text-justify">
                This <strong className="text-[#6D28D9]">Certificate of Achievement</strong> is proudly awarded to
                <strong className="text-[#6D28D9]">Pranav Khaire</strong> for successfully completing the
                <strong>TCS iON Career Edge – Young Professional</strong> program offered by
                <strong>Tata Consultancy Services</strong>.
                <br /><br />
                The course included essential modules such as:
                <em>Communication Skills, Presentation Skills, Soft Skills, Career Guidance, Resume Writing,
                  Group Discussion, Interview Skills, Business Etiquette, Effective Email Writing, Telephone Etiquette,
                  Accounting Fundamentals, IT Foundation Skills, and an Overview of Artificial Intelligence.</em>
              </p>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-purple-200"></div>
              <div className="mx-3 text-purple-600 text-xl">◆</div>
              <div className="flex-grow h-px bg-purple-200"></div>
            </div>

            {/*  Authorized Signature (Lavender Pro structure)  */}
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-[#6D28D9] text-center mb-4 tracking-wide">Authorized Signatory 🟣
              </h3>

              <div className="grid grid-cols-3 gap-6">
                <div></div>
                <div className="text-center">
                  <p className="signature text-lg font-semibold italic text-[#4B0082]">Mehul Mehta</p>
                  <p className="text-xs text-gray-600 mt-1">Global Delivery Head – TCS iON</p>
                </div>
                <div></div>
              </div>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-purple-200"></div>
              <div className="mx-3 text-purple-600 text-xl">✦</div>
              <div className="flex-grow h-px bg-purple-200"></div>
            </div>

            {/*  Authorization Block (Completion Theme Rules)  */}
            <div className="flex flex-col text-xs text-gray-700 leading-relaxed px-1">
              <span><strong>Status:</strong> COMPLETED</span>
              <span><strong>Signed By:</strong> Instructor / Program Lead</span>
              <span><strong>Issued By:</strong> Tata Consultancy Services (TCS iON)</span>
              <span><strong>Certificate ID:</strong> 240640-29228129-1016</span>
              <span><strong>Date:</strong> 10 November 2025</span>
            </div>

            {/*  Bottom Info Grid  */}
            <div className="grid grid-cols-2 gap-4 text-[13px] px-1 mt-5">

              <div className="space-y-1">
                <p className="text-[#6D28D9] font-semibold">Start Date</p>
                <p className="text-gray-700">27 Oct 2025</p>
              </div>

              <div className="space-y-1">
                <p className="text-[#6D28D9] font-semibold">Completion Date</p>
                <p className="text-gray-700">10 Nov 2025</p>
              </div>

            </div>

            {/*  Buttons  */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="/certificate_pdf/Pranav_Khaire_TCS ION  Certificate.pdf" target="_blank"
                className="px-5 py-2 text-sm font-semibold text-[#6D28D9] border-2 border-purple-500 rounded-lg hover:bg-purple-600 hover:text-theme-text transition-all shadow-sm">
                View Certificate
              </a>

              <a href="/certificate_pdf/Pranav_Khaire_TCS ION  Certificate.pdf" download
                className="px-5 py-2 text-sm font-semibold text-[#6D28D9] border-2 border-purple-500 rounded-lg hover:bg-purple-600 hover:text-theme-text transition-all shadow-sm">
                Download
              </a>
            </div>

          </div>
          {/*  Certificate Card – SEBI Investor Awareness Test (Participation – SkyFresh Minimal Theme)  */}
          <div
            className="relative rounded-2xl shadow-2xl p-8 bg-gradient-to-br from-indigo-600 via-[#F0F8FF] to-[#E6F4FF] border border-sky-200 overflow-hidden animate-fade-in">

            {/*  Sky Header Bar  */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7]"></div>

            {/*  Header  */}
            <div className="flex items-center gap-4 mt-4 animate-floating">
              <div className="text-4xl">🔵</div>
              <div className="flex flex-col">
                <span
                  className="text-2xl font-extrabold bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent tracking-wide">
                  Certificate of Participation ⭐
                </span>
                <span className="text-lg font-semibold text-[#0284C7] tracking-wide">
                  SEBI Investor Awareness Test
                </span>
              </div>
            </div>

            {/*  Decorative Divider  */}
            <div className="mt-3 mb-5 flex items-center">
              <div className="flex-grow h-px bg-sky-200"></div>
              <div className="mx-3 text-sky-600 text-xl">✦</div>
              <div className="flex-grow h-px bg-sky-200"></div>
            </div>

            {/*  Issuing Institute  */}
            <div className="space-y-1 text-center">
              <div className="text-xl font-bold text-sky-900">SEBI & NISM</div>
              <div className="text-sm text-gray-700">Participation Certificate</div>
              <div className="text-xs text-gray-600 tracking-wide">Enrollment No: NISM20250000318816-001</div>
              <div className="text-xs italic text-theme-muted">Issued on 01 December 2025</div>
            </div>

            {/*  Certificate Image  */}
            <div
              className="w-full h-44 flex items-center justify-center overflow-hidden rounded-xl my-6 shadow-lg ring-1 ring-sky-300 bg-white animate-shimmer">
              <img loading="lazy" src="certificate_jpg/sebi.png" alt="Certificate" className="w-full h-full object-cover" />
            </div>

            {/*  Description  */}
            <div className="px-1">
              <p className="text-[15px] text-gray-800 leading-relaxed text-justify">
                This <strong className="text-[#0284C7]">Certificate of Participation</strong> is awarded to
                <strong className="text-[#0284C7]">Pranav Samadhan Khaire</strong> for successfully completing the
                <strong>SEBI Investor Awareness Test</strong>, conducted by
                <strong>Securities and Exchange Board of India</strong> in collaboration with
                <strong>National Institute of Securities Markets</strong>.
              </p>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-sky-200"></div>
              <div className="mx-3 text-sky-600 text-xl">◆</div>
              <div className="flex-grow h-px bg-sky-200"></div>
            </div>

            {/*  Authorized Signature  */}
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-[#0284C7] text-center mb-4 tracking-wide">Authorized Signatory 🔵
              </h3>

              <div className="grid grid-cols-3 gap-6">
                <div></div>
                <div className="text-center">
                  <p className="signature text-lg font-semibold italic text-gray-700">Shashikumar Valsakumar</p>
                  <p className="text-xs text-gray-600 mt-1">Executive Director – SEBI</p>
                </div>
                <div></div>
              </div>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-sky-200"></div>
              <div className="mx-3 text-sky-600 text-xl">✦</div>
              <div className="flex-grow h-px bg-sky-200"></div>
            </div>

            {/*  Authorization Block  */}
            <div className="flex flex-col text-xs text-gray-700 leading-relaxed px-1">
              <span><strong>Status:</strong> PARTICIPATION</span>
              <span><strong>Signed By:</strong> Issuer / Program Coordinator</span>
              <span><strong>Issued By:</strong> SEBI & NISM</span>
              <span><strong>Reference Code:</strong> NISM2025-IA</span>
              <span><strong>Date Issued:</strong> 01 December 2025</span>
            </div>

            {/*  Bottom Info Grid  */}
            <div className="grid grid-cols-2 gap-4 text-[13px] px-1 mt-5">
              <div className="space-y-1">
                <p className="text-[#0284C7] font-semibold">Mode</p>
                <p className="text-gray-700">Online Assessment</p>
              </div>
              <div className="space-y-1">
                <p className="text-[#0284C7] font-semibold">Category</p>
                <p className="text-gray-700">Financial Literacy</p>
              </div>
            </div>

            {/*  Buttons  */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="/certificate_pdf/sebi investor.pdf"
                className="px-5 py-2 text-sm font-semibold text-[#0284C7] border-2 border-sky-500 rounded-lg hover:bg-sky-600 hover:text-theme-text transition-all shadow-sm">
                View Certificate
              </a>
              <a href="/certificate_pdf/sebi investor.pdf" download
                className="px-5 py-2 text-sm font-semibold text-[#0284C7] border-2 border-sky-500 rounded-lg hover:bg-sky-600 hover:text-theme-text transition-all shadow-sm">
                Download
              </a>
            </div>

          </div>
          {/*  Certificate Card – YUVA AI for ALL (Completion – Royal Lavender Pro Theme)  */}
          <div
            className="relative rounded-2xl shadow-xl p-8 bg-gradient-to-br from-indigo-600 via-purple-50 to-purple-100 border border-purple-200 overflow-hidden animate-fade-in">

            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 to-indigo-600"></div>

            <div className="flex items-center gap-4 mt-4 animate-floating">
              <div className="text-4xl">🟣</div>
              <div className="flex flex-col">
                <span
                  className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
                  Certificate of Completion ⭐
                </span>
                <span className="text-lg font-semibold text-[#6D28D9] tracking-wide">
                  YUVA AI for ALL
                </span>
              </div>
            </div>

            <div className="mt-3 mb-5 flex items-center">
              <div className="flex-grow h-px bg-purple-200"></div>
              <div className="mx-3 text-purple-600 text-xl">✦</div>
              <div className="flex-grow h-px bg-purple-200"></div>
            </div>

            <div className="space-y-1 text-center">
              <div className="text-xl font-bold text-[#4B0082]">IndiaAI & Intellipaat</div>
              <div className="text-sm text-gray-700">Completion Certificate</div>
              <div className="text-xs text-gray-600 tracking-wide">Certificate ID: 31679-8640-291470</div>
              <div className="text-xs italic text-theme-muted">Issued on 21 December 2025</div>
            </div>

            <div
              className="w-full h-44 flex items-center justify-center overflow-hidden rounded-xl my-6 shadow-lg ring-1 ring-purple-300 bg-white animate-shimmer">
              <img loading="lazy" src="certificate_jpg/Yuva ai for all.png" alt="Certificate" className="w-full h-full object-cover" />
            </div>

            <div className="px-1">
              <p className="text-[15px] text-gray-800 leading-relaxed text-justify">
                This <strong className="text-[#6D28D9]">Certificate of Completion</strong> is awarded to
                <strong className="text-[#6D28D9]">Pranav Khaire</strong> for successfully completing the
                <strong>YUVA AI for ALL</strong> online program.
                <br /><br />
                The participant demonstrated curiosity, initiative, and commitment toward developing
                future-ready skills in Artificial Intelligence.
              </p>
            </div>

            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-purple-200"></div>
              <div className="mx-3 text-purple-600 text-xl">◆</div>
              <div className="flex-grow h-px bg-purple-200"></div>
            </div>

            <div className="mt-2">
              <h3 className="text-sm font-semibold text-[#6D28D9] text-center mb-4 tracking-wide">Authorized Signatory 🟣
              </h3>

              <div className="grid grid-cols-3 gap-6">
                <div></div>
                <div className="text-center">
                  <p className="signature text-lg font-semibold italic text-[#4B0082]">Diwakar Chittora</p>
                  <p className="text-xs text-gray-600 mt-1">CEO – Intellipaat</p>
                </div>
                <div></div>
              </div>
            </div>

            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-purple-200"></div>
              <div className="mx-3 text-purple-600 text-xl">✦</div>
              <div className="flex-grow h-px bg-purple-200"></div>
            </div>

            <div className="flex flex-col text-xs text-gray-700 leading-relaxed px-1">
              <span><strong>Status:</strong> COMPLETED</span>
              <span><strong>Signed By:</strong> Instructor / Program Lead</span>
              <span><strong>Issued By:</strong> IndiaAI & Intellipaat</span>
              <span><strong>Certificate ID:</strong> 31679-8640-291470</span>
              <span><strong>Date:</strong> 21 December 2025</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-[13px] px-1 mt-5">
              <div className="space-y-1">
                <p className="text-[#6D28D9] font-semibold">Mode</p>
                <p className="text-gray-700">Online</p>
              </div>
              <div className="space-y-1">
                <p className="text-[#6D28D9] font-semibold">Domain</p>
                <p className="text-gray-700">Artificial Intelligence</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <a href="/certificate_pdf/Yuva ai for all 1.pdf"
                className="px-5 py-2 text-sm font-semibold text-[#6D28D9] border-2 border-purple-500 rounded-lg hover:bg-purple-600 hover:text-theme-text transition-all shadow-sm">
                View Certificate
              </a>
              <a href="/certificate_pdf/Yuva ai for all 1.pdf" download
                className="px-5 py-2 text-sm font-semibold text-[#6D28D9] border-2 border-purple-500 rounded-lg hover:bg-purple-600 hover:text-theme-text transition-all shadow-sm">
                Download
              </a>
            </div>

          </div>
          {/*  Certificate Card – TCS iON Career Edge IT Primer (Completion – Royal Lavender Pro Theme)  */}
          <div
            className="relative rounded-2xl shadow-xl p-8 bg-gradient-to-br from-indigo-600 via-purple-50 to-purple-100 border border-purple-200 overflow-hidden animate-fade-in">

            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 to-indigo-600"></div>

            <div className="flex items-center gap-4 mt-4 animate-floating">
              <div className="text-4xl">💻</div>
              <div className="flex flex-col">
                <span
                  className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
                  Certificate of Achievement ⭐
                </span>
                <span className="text-lg font-semibold text-[#6D28D9] tracking-wide">
                  TCS iON Career Edge – IT Primer
                </span>
              </div>
            </div>

            <div className="mt-3 mb-5 flex items-center">
              <div className="flex-grow h-px bg-purple-200"></div>
              <div className="mx-3 text-purple-600 text-xl">✦</div>
              <div className="flex-grow h-px bg-purple-200"></div>
            </div>

            <div className="space-y-1 text-center">
              <div className="text-xl font-bold text-[#4B0082]">Tata Consultancy Services (TCS iON)</div>
              <div className="text-sm text-gray-700">Completion Certificate</div>
              <div className="text-xs text-gray-600 tracking-wide">Certificate ID: B739-29228129-1016</div>
              <div className="text-xs italic text-theme-muted">Issued on 21 December 2025</div>
            </div>

            <div
              className="w-full h-44 flex items-center justify-center overflow-hidden rounded-xl my-6 shadow-lg ring-1 ring-purple-300 bg-white animate-shimmer">
              <img loading="lazy" src="certificate_jpg/tcs ion it premier.png" alt="Certificate" className="w-full h-full object-cover" />
            </div>

            <div className="px-1">
              <p className="text-[15px] text-gray-800 leading-relaxed text-justify">
                This <strong className="text-[#6D28D9]">Certificate of Achievement</strong> is awarded to
                <strong className="text-[#6D28D9]">Pranav Khaire</strong> for successfully completing the
                <strong>TCS iON Career Edge – IT Primer</strong> course.
                <br /><br />
                The program covered <em>IT Industry Overview, Job Tools, Basics of Industry Elements,
                  Trending Technologies, Career Planning, and Growth Opportunities</em>.
              </p>
            </div>

            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-purple-200"></div>
              <div className="mx-3 text-purple-600 text-xl">◆</div>
              <div className="flex-grow h-px bg-purple-200"></div>
            </div>

            <div className="mt-2">
              <h3 className="text-sm font-semibold text-[#6D28D9] text-center mb-4 tracking-wide">
                Authorized Signatory 🟣
              </h3>

              <div className="grid grid-cols-3 gap-6">
                <div></div>
                <div className="text-center">
                  <p className="signature text-lg font-semibold italic text-[#4B0082]">Mehul Mehta</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Global Delivery Head – TCS iON
                  </p>
                </div>
                <div></div>
              </div>
            </div>

            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-purple-200"></div>
              <div className="mx-3 text-purple-600 text-xl">✦</div>
              <div className="flex-grow h-px bg-purple-200"></div>
            </div>

            <div className="flex flex-col text-xs text-gray-700 leading-relaxed px-1">
              <span><strong>Status:</strong> COMPLETED</span>
              <span><strong>Signed By:</strong> Program Lead</span>
              <span><strong>Issued By:</strong> Tata Consultancy Services (TCS iON)</span>
              <span><strong>Certificate ID:</strong> B739-29228129-1016</span>
              <span><strong>Date:</strong> 21 December 2025</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-[13px] px-1 mt-5">
              <div className="space-y-1">
                <p className="text-[#6D28D9] font-semibold">Start Date</p>
                <p className="text-gray-700">07 Dec 2025</p>
              </div>
              <div className="space-y-1">
                <p className="text-[#6D28D9] font-semibold">End Date</p>
                <p className="text-gray-700">21 Dec 2025</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <a href="/certificate_pdf/TCS iON Career Edge - IT Primer.pdf"
                className="px-5 py-2 text-sm font-semibold text-[#6D28D9] border-2 border-purple-500 rounded-lg hover:bg-purple-600 hover:text-theme-text transition-all shadow-sm">
                View Certificate
              </a>
              <a href="/certificate_pdf/TCS iON Career Edge - IT Primer.pdf" download
                className="px-5 py-2 text-sm font-semibold text-[#6D28D9] border-2 border-purple-500 rounded-lg hover:bg-purple-600 hover:text-theme-text transition-all shadow-sm">
                Download
              </a>
            </div>

          </div>

          {/*  Certificate: Microsoft – SOAR (AI to be Aware)  */}
          <div
            className="relative rounded-2xl shadow-2xl p-8 bg-gradient-to-br from-indigo-600 via-[#F2F4FF] to-[#E8EBFF] border border-indigo-200 overflow-hidden animate-fade-in">

            {/*  Header  */}
            <div className="flex items-center gap-4 mt-4">
              <div className="text-4xl">📝</div>
              <div className="flex flex-col">
                <span
                  className="text-2xl font-extrabold bg-gradient-to-r from-[#1E3A8A] to-[#5B21B6] bg-clip-text text-transparent tracking-wide">
                  Microsoft – SOAR: AI to be Aware
                </span>
                <span className="text-lg font-semibold text-[#0C1A3A] tracking-wide">
                  Skill India • NCVET • AI Competency Certification
                </span>
              </div>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-indigo-200"></div>
              <div className="mx-3 text-indigo-700 text-xl">◆</div>
              <div className="flex-grow h-px bg-indigo-200"></div>
            </div>

            {/*  Certificate Details  */}
            <div className="space-y-1 text-center">
              <div className="text-xl font-bold text-[#1E3A8A]">Skill Competency Certificate</div>
              <div className="text-sm text-gray-700">Issued on: 28 October 2025</div>
              <div className="text-xs text-gray-600 tracking-wide">Certificate No.: 2025102751612780-141424</div>
            </div>

            {/*  Certificate Image  */}
            <div
              className="w-full h-44 flex items-center justify-center overflow-hidden rounded-xl my-6 shadow-lg ring-1 ring-indigo-200 bg-white">
              <img loading="lazy" src="/certificate_jpg/SKILL MICROSOFT.png" className="w-full h-full object-cover"
                alt="Microsoft Certificate" />
            </div>

            {/*  Description  */}
            <p className="text-[15px] text-gray-800 leading-relaxed text-justify px-1">
              This <strong className="text-[#1E3A8A]">Skill Competency Certificate</strong> is awarded to
              <strong className="text-[#1E3A8A]">Pranav Samadhan Khaire</strong> for completing the
              <strong>SOAR – AI to be Aware</strong> program under the
              <strong>Skill India Mission</strong>, assessed through the Embedded Assessment Framework and
              recognised by <strong>NCVET</strong>.
            </p>

            <p className="text-[15px] text-gray-800 leading-relaxed text-justify px-1 mt-3">
              The program carries a duration of <strong>20 Hours</strong> and is mapped to
              <strong>NSQF Level 2</strong>, certifying foundational knowledge in AI awareness and digital
              understanding.
            </p>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-indigo-200"></div>
              <div className="mx-3 text-indigo-700 text-xl">✦</div>
              <div className="flex-grow h-px bg-indigo-200"></div>
            </div>

            {/*  Authorized Signatory  */}
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-[#1E3A8A] text-center mb-4 tracking-wide">Authorized Signatory 🟣
              </h3>

              <div className="grid grid-cols-3 gap-6">
                <div></div>
                <div className="text-center">
                  <p className="signature text-lg font-semibold italic text-[#4338CA]">Manju Dhasmana</p>
                  <p className="text-xs text-gray-600 mt-1">India Senior Director – CSR, Microsoft</p>
                </div>
                <div></div>
              </div>
            </div>

            {/*  Divider  */}
            <div className="mt-6 mb-4 flex items-center">
              <div className="flex-grow h-px bg-indigo-200"></div>
              <div className="mx-3 text-indigo-700 text-xl">◆</div>
              <div className="flex-grow h-px bg-indigo-200"></div>
            </div>

            {/*  Authorization Block  */}
            <div className="flex flex-col text-xs text-gray-700 leading-relaxed px-1">
              <span><strong>Status:</strong> COMPLETED</span>
              <span><strong>Signed By:</strong> Microsoft Program Lead</span>
              <span><strong>Issued By:</strong> Microsoft • Skill India • NCVET</span>
              <span><strong>Certificate ID:</strong> 2025102751612780-141424</span>
              <span><strong>Date:</strong> 28 October 2025</span>
            </div>

            {/*  Bottom Grid  */}
            <div className="grid grid-cols-2 gap-4 text-[13px] px-1 mt-5">
              <div className="space-y-1">
                <p className="text-[#1E3A8A] font-semibold">Start Date</p>
                <p className="text-gray-700">08 Oct 2025</p>
              </div>
              <div className="space-y-1">
                <p className="text-[#1E3A8A] font-semibold">Completion Date</p>
                <p className="text-gray-700">28 Oct 2025</p>
              </div>
            </div>

            {/*  Buttons  */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="/certificate_pdf/skill india  microsoft.pdf" target="_blank"
                className="px-5 py-2 text-sm font-semibold text-[#1E3A8A] border-2 border-indigo-500 rounded-lg hover:bg-indigo-600 hover:text-theme-text transition-all shadow-sm">
                View Certificate
              </a>

              <a href="/certificate_pdf/skill india  microsoft.pdf" download
                className="px-5 py-2 text-sm font-semibold text-[#1E3A8A] border-2 border-indigo-500 rounded-lg hover:bg-indigo-600 hover:text-theme-text transition-all shadow-sm">
                Download
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}