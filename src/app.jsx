import React from "react";
import "./index.css"; // make sure you create index.css next

export default function App() {
  const testimonials = [
    {
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder
      name: "John Doe",
      text: "Noah Built turned my house project into a dream home!"
    },
    {
      type: "image",
      url: "https://via.placeholder.com/400x250", // placeholder image
      name: "Jane Smith",
      text: "Their team is down to earth, humble, and delivers amazing work."
    },
    {
      type: "text",
      name: "Marcus Lee",
      text: "I trusted them with a major renovation — best decision I ever made."
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Noah Built – Testimonials & Media</h1>
        <p className="subtitle">Down to earth. Humble. Real work.</p>
      </header>

      {/* Testimonials / Media Section */}
      <main className="testimonials">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            {t.type === "video" && (
              <iframe
                className="media"
                width="100%"
                height="200"
                src={t.url}
                title="Testimonial video"
                allowFullScreen
              />
            )}
            {t.type === "image" && (
              <img src={t.url} alt={t.name} className="media" />
            )}
            <h3>{t.name}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Noah Built / Space In My Place</p>
      </footer>
    </div>
  );
}
