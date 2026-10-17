import { useEffect, useState } from "react";
import { Award, Send, Sparkles, User } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { api, API_BASE_URL } from "../../../../api";

const ICONS = [Award, Sparkles];

function resolveImage(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function Mentor() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    let active = true;

    api
      .getMentors()
      .then((data) => {
        if (active) setMentors(data);
      })
      .catch((err) => {
        console.error("Mentorlarni yuklashda xatolik:", err);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="mentors"
      className="bg-white text-slate-900 py-20 px-4 transition-all duration-300"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm hover:bg-emerald-100/50 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            MENTORLAR
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Professional mentorlarimiz
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
            Har bir mentor o'z sohasida yirik tajribaga hamda pedagogik qobiliyatga ega
          </p>
        </div>

        {mentors.length === 0 ? (
          <p className="text-center text-slate-400">
            Hozircha mentorlar qo'shilmagan
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => {
              const Icon = ICONS[index % ICONS.length];
              const image = resolveImage(mentor.image || mentor.photo);
              const name = mentor.name || mentor.full_name;
              const field = mentor.field || mentor.speciality || mentor.position;
              const bio = mentor.bio || mentor.about;

              return (
                <div
                  key={mentor.id}
                  className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all duration-300 shadow-md bg-white flex items-center justify-center">
                      {image ? (
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <User
                          className="w-16 h-16 text-slate-800"
                          strokeWidth={1.5}
                        />
                      )}
                    </div>
                    <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {name}
                  </h3>

                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 mb-4 border border-emerald-500/20">
                    {field}
                  </span>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {bio ||
                      "Ko'p yillik amaliy tajribaga ega bo'lib, o'quvchilarga professional darslar o'tadi va real portfolio ustida ishlashni o'rgatadi."}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-200/60 w-full flex justify-center gap-3">
                    <a
                      href={mentor.linkedin || "#"}
                      target={mentor.linkedin ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white transition-colors"
                    >
                      <LiaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={mentor.telegram || "#"}
                      target={mentor.telegram ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Mentor;