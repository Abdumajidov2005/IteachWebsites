// ITeach REST API client (landing / public endpoints only).
// Admin panel ishlatadigan autentifikatsiya endpointlariga tegmaydi.

export const API_BASE_URL = "https://iteachapi.pythonanywhere.com";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    let detail;
    try {
      detail = JSON.stringify(await res.json());
    } catch {
      detail = res.statusText;
    }
    throw new Error(`API ${res.status}: ${detail}`);
  }

  // 204 No Content yoki bo'sh javob holati
  if (res.status === 204) return null;
  return res.json();
}

// Paginatsiyali javobdan massivni ajratib oladi ({ results: [...] } yoki [...]).
function toList(data) {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.results)) return data.results;
  return [];
}

export const api = {
  // Bitta so'rovda butun bosh sahifa ma'lumotlari
  getLanding: () => request("/api/landing/"),

  // Public ro'yxatlar
  getCourses: (params = "") =>
    request(`/api/courses/${params}`).then(toList),
  getCourse: (slug) => request(`/api/courses/${slug}/`),
  getCourseCategories: () => request("/api/course-categories/").then(toList),
  getMentors: () => request("/api/mentors/").then(toList),
  getResults: () => request("/api/results/").then(toList),
  getLearningProcess: () => request("/api/learning-process/").then(toList),
  getPartners: () => request("/api/partners/").then(toList),
  getStatistics: () => request("/api/statistics/").then(toList),
  getGraduates: () => request("/api/graduates/").then(toList),
  getTestimonials: () => request("/api/testimonials/").then(toList),
  getFaq: () => request("/api/faq/").then(toList),
  getSettings: () => request("/api/settings/"),
  getHero: () => request("/api/hero/"),

  // Formalar (POST)
  apply: (payload) =>
    request("/api/apply/", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  contact: (payload) =>
    request("/api/contact/", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

export { toList };
