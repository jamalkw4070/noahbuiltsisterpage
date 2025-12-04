import React from "react";
import "./index.css";

export default function App() {
  const testimonials = [
{
      type: "video",
      url: "https://www.youtube.com/embed/RCoROxb8w_w?si=xY_09EohruutE9Jr",
      name: "A BETTER WAY FORWARD",
      text: "If you are seeking a better way forward and you sincerely want to learn how to take control of your financial future. You are now at the right place at the right time. The NoahBuilt team provides you with everything you need to create your own powerful cash-flow(s) that can be a huge benefit to you and your family for many years to come."
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/7D-Kzw61h2U?si=pdMZb61fynPis-b4",
      name: "FACTS VS FICTION",
      text: "Your financial future is 100% YOUR RESPONSIBILITY, REAL ESTATE is proven to be the most powerful wealth builder in recorded history, Residential Real Estate is the Simplist & Fasted way for average individuals/ families to start taking control. Everyone is already involved in Real Estate in some way. Noah Built coursework shows you exactly how to begin moving from paying rent or mortgage to creating your own monthly CASH FLOW."
    },
        {
      type: "video",
      url: "https://www.youtube.com/embed/gRKxZzmpC5s?si=N8iD2tYw_lqFULIH",
      name: "EVERY FAMILY HAS AT LEAST ‘ONE’",
      text: "You are here because you already understand that life is uncertain, however you also understand that there are always great opportunities for people who are willing to learn better ways and apply best practices. At NoahBuilt, we believe that every family/community has at least one ‘special’ or uniquely gifted individual who can embrace what we are offering. By doing so, take a leadership role, and help create a better future for themselves, their family, and the people they care about. Right now you should ask yourself one simple question: ARE YOU THE ONE, if not then who in your family is that “special person”."
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/Y548UNEiy9Q?si=VmT7CJ2gRHU9Z-T7",
      name: "ABOUT OUR INTRODUCTORY OFFER",
      text: "As we introduce our training into the marketplace, our strategy is logical, strategic and constrained. NoahBuilt coursework is only available to a limited number of people in your area and for a limited period of time. We are only looking for people who are a good fit for what we offer. If you are ready to enroll, click Get Started (below). If you are not quite ready, we invite you to learn more by taking our 30 minute FREE CRASH COURSE (below)."
    },
    {
   type: "price",
  name: "FREE CRASH COURSE \n(30 minutes)",
  text: "Learn The Key Elements & Meet Personal Coaches \n(Instant access)",
  link: "/crashcourse",
  buttonText: "Learn More"
},
{
  type: "price",
  name: "GET STARTED NOW!",
  text: "YES, I have reviewed the terms of service and I’m ready to begin learning how to create a better way forward for me and my loved ones. To be clear, I fully understand that I can opt out at any time. I also  understand that my enrollment comes with NOAH’S 30-DAY 100% IRONCLAD, SATISFACTION GUARANTEE –Meaning, if for any reason I am not 100% delighted with NoahBuilt.com’s Coursework,& Personal Coaching, my entire payment will be promptly refunded with no questions asked.",
  link: "https://square.link/u/5mJdJo1h",
  buttonText: "Get Started"
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
  <h1
  style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: "3.15rem",   // ← make bigger here
    fontWeight: "700"
  }}
>
  NoahBuilt.com
</h1>


  <img
    src="homelogo.png"
    alt="Logo"
    style={{
      width: "70px",
      height: "auto",
      margin: "10px auto"
    }}
  />

  <p
    className="subtitle"
    style={{
      fontFamily: "'Poppins', sans-serif",
      whiteSpace: "pre-line"
    }}
  >
    CASH-FLOW COURSEWORK
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

      <h3
  style={{
    fontFamily: "'Raleway', sans-serif",
    whiteSpace: "pre-line",
    color: "#000"
  }}
>
  {t.name}
</h3>

<p style={{ whiteSpace: "pre-line", color: "#000" }}>
  {t.text}
</p>


      {t.type === "price" && (
  <>
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
  {t.buttonText ?? "Get Started"}
</button>


    {t.link.includes("square.link") && (
      <p style={{ marginTop: "10px" }}>
        <a
  href="/tos.html"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    color: "green",
    textDecoration: "underline",
    fontSize: "0.9rem"
  }}
>
  View Terms & Policies
</a>

      </p>
    )}
  </>
)}

    </div>
  );
})}

      </main>
<div style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px" }}>
  <img 
    src="/creditcards.jpeg"
    alt="Second Logo"
    style={{ width: "120px", height: "auto" }}
  />
</div>

      <footer className="footer" style={{ textAlign: "center", marginTop: "40px", padding: "20px 0", color: "#000" }}>
        <p>© {new Date().getFullYear()} Noah Built / Space In My Place</p>
      </footer>
    </div>
  );
}
