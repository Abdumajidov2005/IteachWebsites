import { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";

// Saytda berilgan ta'lim afzalliklari
const corePillars = [
  {
    icon: Sparkles,
    title: "100% Amaliy ta'lim va Real loyihalar",
    desc: "Quruq nazariyadan holi darslar. Har bir talaba o'z portfoliosi uchun 0 dan boshlab startupgacha bo'lgan real loyihalar yaratadi.",
  },
  {
    icon: GraduationCap,
    title: "Tajribali amaliyotchi mentorlar",
    desc: "Sohada ko'p yillik amaliy tajribaga ega yetakchi mutaxassislar nazorati, muntazam code review va individual yondashuv.",
  },
  {
    icon: Briefcase,
    title: "Karyera ko'magi va ishga joylashish",
    desc: "Eng yaxshi bitiruvchilarga nufuzli milliy va xalqaro IT kompaniyalarda amaliyot o'tash hamda ishga kirish imkoniyati taqdim etiladi.",
  },
  {
    icon: Award,
    title: "\"Kelajak kasblari\" davlat granti",
    desc: "Yoshlar ishlari agentligining davlat granti orqali 6 oygacha o'qish to'lovini qoplab berish imkoniyati mavjud.",
  },
];

function Companies() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section
      id="about"
      className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 font-sans text-slate-900 scroll-mt-24"
    >
      <div className="mx-auto max-w-[1200px] bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-100 space-y-12">
        
        {/* ASOSIY BLOK: BIZ HAQIMIZDA (Tavsif va interaktiv kartochka) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Chap ustun: Markaz haqida batafsil ma'lumot */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-50 text-emerald-700 font-semibold text-xs tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                BIZ HAQIMIZDA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Zamonaviy kasblar markazi —{" "}
              <span className="text-emerald-600">iTeach Academy</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              <strong>iTeach Academy</strong> — Farg'ona shahrida dasturlash, dizayn, 
              raqamli marketing va sun'iy intellekt bo'yicha yuqori sifatli ta'lim 
              beruvchi professional markaz. Biz yoshlarga nafaqat zamonaviy IT bilimlarni, 
              balki mehnat bozorida eng yuqori talabga ega bo'lgan amaliy ko'nikmalar va 
              real loyihalar yaratish tajribasini taqdim etamiz.
            </p>

            {/* Saytdagi asosiy afzalliklar ro'yxati */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  0 dan boshlab startupgacha bo'lgan amaliy ta'lim
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Haftada 3 kun, 2 soatdan zamonaviy sinfxonalar
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  Sohada faoliyat yurituvchi amaliyotchi mentorlar
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700">
                  "Kelajak kasblari" davlat granti orqali o'qish
                </span>
              </div>
            </div>

            {/* Harakatga chaqiruvchi tugmalar */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-700 hover:-translate-y-0.5 active:translate-y-0"
              >
                Kurslarni ko'rish
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#blog"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:bg-white hover:border-emerald-500 hover:text-emerald-600"
              >
                Bepul konsultatsiya
              </a>
            </div>
          </div>

          {/* O'ng ustun: Interaktiv Missiya va Qadriyatlar kartochkasi */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-7 sm:p-8 shadow-2xl overflow-hidden border border-slate-800">
              {/* Orqa fon nur effekti */}
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <Target className="w-5 h-5" />
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-white">Bizning Maqsadimiz</h4>
                      <p className="text-xs text-white/60">Farg'ona, Sayligoh 18/2</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    Professional ta'lim
                  </span>
                </div>

                {/* Tab tugmalari */}
                <div className="flex rounded-xl bg-white/10 p-1 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setActiveTab("mission")}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                      activeTab === "mission"
                        ? "bg-emerald-500 text-white shadow-md"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Missiyamiz
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("format")}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                      activeTab === "format"
                        ? "bg-emerald-500 text-white shadow-md"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Ta'lim formati
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("career")}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                      activeTab === "career"
                        ? "bg-emerald-500 text-white shadow-md"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Karyera
                  </button>
                </div>

                {/* Tab mazmuni */}
                <div className="min-h-[140px] flex flex-col justify-center">
                  {activeTab === "mission" && (
                    <div className="space-y-3 animate-fadeIn">
                      <h5 className="font-bold text-emerald-400 text-sm">
                        O'zbekistonda kuchli IT mutaxassislar avlodini shakllantirish
                      </h5>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Har bir talabaga zamonaviy texnologiyalarni amaliyotga bog'lagan holda 
                        tushuntirish, xalqaro talablarga mos kadrlar tayyorlash va yoshlarning 
                        yuqori daromadli kasb egallashlariga ko'maklashish.
                      </p>
                    </div>
                  )}

                  {activeTab === "format" && (
                    <div className="space-y-3 animate-fadeIn">
                      <h5 className="font-bold text-emerald-400 text-sm">
                        Qulay sharoitlar va zamonaviy dars metodikasi
                      </h5>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Haftada 3 kun, 2 soatdan maxsus sinfxonalarda darslar olib boriladi. 
                        Dars yozuvlari maxsus guruhda saqlanadi, har bir mavzu amaliy 
                        loyihalar va mentor nazorati orqali mustahkamlanadi.
                      </p>
                    </div>
                  )}

                  {activeTab === "career" && (
                    <div className="space-y-3 animate-fadeIn">
                      <h5 className="font-bold text-emerald-400 text-sm">
                        Rezyume, intervyu va nufuzli IT korxonalariga yo'llanma
                      </h5>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Kursni muvaffaqiyatli bitirgan o'quvchilarga sertifikat beriladi hamda 
                        ular mahalliy va xalqaro IT kompaniyalarga stajirovka yoki to'liq 
                        ishga tavsiya qilinadi.
                      </p>
                    </div>
                  )}
                </div>

                {/* Pastki ko'rsatkich tasdig'i */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Rasmiy sertifikat beriladi
                  </span>
                  <span className="font-semibold text-emerald-400">
                    Farg'ona shahar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEGA AYNAN ITEACH? (Saytda ta'riflangan asosiy afzalliklar) */}
        <div className="pt-8 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-2">
              Afzalliklarimiz
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Nima uchun aynan iTeach ni tanlashadi?
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Zamonaviy IT ta'limining har bir bosqichi talaba natijasi va real karyerasiga yo'naltirilgan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex gap-4 p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-emerald-500/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-slate-900">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Companies;
