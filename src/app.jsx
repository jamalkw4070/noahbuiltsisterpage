import React from "react";
import "./index.css";

export default function App() {
  const testimonials = [
    {
      type: "text",
      name: "Placeholder Box",
      text: "This is the 4th small box to balance the top row."
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      name: "John Doe",
      text: "Noah Built turned my house project into a dream home!"
    },
    {
      type: "image",
      url: "https://via.placeholder.com/400x250",
      name: "Jane Smith",
      text: "Their team is down to earth, humble, and delivers amazing work."
    },
    {
      type: "text",
      name: "Marcus Lee",
      text: "I trusted them with a major renovation — best decision I ever made."
    },
    {
      type: "image",
      url: "https://via.placeholder.com/400x250",
      name: "Alex Johnson",
      text: "Every project feels personal and thoughtful."
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      name: "Samantha K.",
      text: "Transparent, honest, and professional. Highly recommended!"
    },
    {
      type: "price",
      name: "Noah Built Course",
      text: "Learn the craft for only $69 — down to earth, no pressure, just real guidance."
    }
  ];

  return (
    <div className="app" style={{ fontFamily: "'Open Sans', sans-serif", backgroundColor: "#e5d5c0" }}>
      <header className="header" style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }}>Noah Built: Proof in Practice</h1>
        <p className="subtitle" style={{ fontFamily: "'Poppins', sans-serif" }}>Down to earth. Humble. Real work.</p>
      </header>

      <main className="testimonials" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        {testimonials.map((t, i) => {
          let extraClass = "";
          if (i >= 4 && t.type !== "price") extraClass = "full-width"; // last two testimonial boxes full-width
          if (t.type === "price") extraClass = "price-box"; // bottom price box

          return (
            <div key={i} className={`testimonial-card ${extraClass}`} style={{ backgroundColor: "#f7f1eb", padding: "20px", borderRadius: "12px", boxShadow: "0px 2px 6px rgba(0,0,0,0.1)" }}>
              {t.type === "video" && (
                <iframe
                  className="media"
                  width="100%"
                  height="250"
                  src={t.url}
                  title="Testimonial video"
                  allowFullScreen
                />
              )}
              {t.type === "image" && (
                <img src={t.url} alt={t.name} className="media" />
              )}
              <h3 style={{ fontFamily: "'Raleway', sans-serif" }}>{t.name}</h3>
              <p>{t.text}</p>

              {t.type === "price" && (
                <button
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1rem",
                    background: "transparent",
                    border: "2px solid green",
                    borderRadius: "8px",
                    color: "green",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#e0f5e0")}
                  onMouseOut={(e) => (e.target.style.background = "transparent")}
                >
                  Get Started
                </button>
              )}
            </div>
          );
        })}
      </main>

      <footer className="footer" style={{ textAlign: "center", marginTop: "40px", padding: "20px 0" }}>
        <p>© {new Date().getFullYear()} Noah Built / Space In My Place</p>
      </footer>
    </div>
  );
}
