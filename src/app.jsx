import React from "react";
import "./index.css";

export default function App() {
  const testimonials = [
{
      type: "video",
      url: "https://www.youtube.com/embed/foAQNOcP_Oo?si=rkjWuCggp3fCOhow",
      name: "Noah Built Overview Statement  Box",
      text: "This box is for giving powerful summary statements and telling what Noah Built is all about. Ive attached a place holder video. Note that all videos are interchangable simply by changing the embedded link in the code. When it is time to add the proper promotional/sizzle videos, they must be uploaded to youtube, and I will add them."
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/1R_AiGcUSMM?si=874hgyp8wJnA79TJ",
      name: "Sizzle Box",
      text: "These remaining boxes are for Sizzles. As we discussed they will be for summarzing the corresponding videos attached to the box. "
    },
        {
      type: "video",
      url: "https://www.youtube.com/embed/RE08EFwKyLA?si=fvESHZko9UN8bHi9",
      name: "Sizzle Box",
      text: "These remaining boxes are for Sizzles. As we discussed they will be for summarzing the corresponding videos attached to the box."
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/k1XFWNT7pAM?si=OuguqA0mF3xIFm31",
      name: "Sizzle Box",
      text: "These remaining boxes are for Sizzles. As we discussed they will be for summarzing the corresponding videos attached to the box."
    },
    
    {
      type: "video",
      url: "https://www.youtube.com/embed/1JK0-yoNaWo?si=tZ1wckwplJmrfbnv",
      name: "Sizzle Box",
      text: "These remaining boxes are for Sizzles. As we discussed they will be for summarzing the corresponding videos attached to the box."
    },
    {
      type: "price",
  name: "Need more information?",
  text: "Sign up for our weekly online class where we discuss the course contents and its entails.",
  link: "https://www.spaceinmyplace.com/" // 🔹 your first button's custom link
    },
    {
     type: "price",
  name: "Ready to start learning the craft?",
  text: "Register now below - down to earth, no pressure, just real guidance.",
  link: "https://square.link/u/fKmrCFXZ?src=embed" // 🔹 second button’s existing link
    }
  ];

  return (
    <div
      className="app"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        background: "linear-gradient(to bottom, #fff7ef, #e5d5c0)",
        color: "#000",
        minHeight: "100vh"
      }}
    >
      <header className="header" style={{ textAlign: "center", paddingTop: "20px" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }}>Noah Built: Proof in Practice</h1>
        <p className="subtitle" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Down to earth. Humble. Real work.
        </p>
      </header>

      <main
        className="testimonials"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
          maxWidth: "1000px",
          margin: "40px auto"
        }}
      >
{testimonials.map((t, i) => {
  let extraClass = "";
  if (t.type === "price") extraClass = "price-box";
  if (t.type === "overview") extraClass = "overview-box";

  return (
    <div
      key={i}
      className={`testimonial-card ${extraClass}`}
      style={{
        backgroundColor: "#f7f1eb",
        padding: "20px",
        borderRadius: "12px",
        border: "2px solid green",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
      }}
    >
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

      {t.type === "image" && <img src={t.url} alt={t.name} className="media" />}

      <h3 style={{ fontFamily: "'Raleway', sans-serif", color: "#000" }}>{t.name}</h3>
      <p style={{ color: "#000" }}>{t.text}</p>

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
          onClick={() => window.open(t.link, "_blank")}
        >
          Get Started
        </button>
      )}
    </div>
  );
})}

      </main>

      <footer className="footer" style={{ textAlign: "center", marginTop: "40px", padding: "20px 0", color: "#000" }}>
        <p>© {new Date().getFullYear()} Noah Built / Space In My Place</p>
      </footer>
    </div>
  );
}
