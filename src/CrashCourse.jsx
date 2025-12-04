import React from "react";

export default function CrashCourse() {
  return (
    <div className="app">

     {/* HEADER */}
<header
  className="header"
  style={{
    textAlign: "center",
    paddingTop: "40px",        // adjust this to move down
    paddingBottom: "80px",     // adjust this to extend height
  }}
>
  <h1
    style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "3rem",         // CHANGE THIS to resize title text
      marginBottom: "20px"
    }}
  >
    NoahBuilt.com
  </h1>

  <p
    className="subtitle"
    style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.3rem",       // CHANGE THIS to resize subtitle
      marginTop: "10px",
      letterSpacing: "2px",
      whiteSpace: "pre-line"
    }}
  >
    CRASH-COURSE
  </p>
</header>


      {/* MAIN CONTENT */}
      <main
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
          display: "grid",
          gap: "20px"
        }}
      >

        {/* VIDEO BOX WITH TEXT SUPPORT */}
        <div
          style={{
            backgroundColor: "#f7f1eb",
            padding: "20px",
            borderRadius: "12px",
            border: "2px solid green",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          {/* TEXT LIKE SIZZLE BOXES */}
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.6rem",
              textAlign: "center",
              whiteSpace: "pre-line",
              marginBottom: "15px",
              fontWeight: "600"
            }}
          >
            FREE CRASH COURSE {"\n"} (30 Minutes)
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              textAlign: "center",
              whiteSpace: "pre-line",
              color: "#444",
              marginBottom: "20px"
            }}
          >
            Learn the key elements & meet personal coaches. {"\n"}
            Instant access — watch now.
          </p>

          <iframe
            width="100%"
            height="450"
            src="YOUR_YOUTUBE_LINK"
            allowFullScreen
            style={{ borderRadius: "12px" }}
          />
        </div>

        {/* ZOOM BOX WITH TEXT SUPPORT */}
        <div
          style={{
            backgroundColor: "#f7f1eb",
            padding: "20px",
            borderRadius: "12px",
            border: "2px solid green",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.6rem",
              textAlign: "center",
              whiteSpace: "pre-line",
              marginBottom: "10px",
              fontWeight: "600"
            }}
          >
            LIVE COACHING SESSION {"\n"} (Zoom)
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              whiteSpace: "pre-line",
              color: "#444",
              marginBottom: "15px"
            }}
          >
            Meet your coaches live. {"\n"}
            Real time Q&A.
          </p>

          <button
            style={{
              marginTop: "15px",
              padding: "12px 24px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.1rem",
              background: "transparent",
              border: "2px solid green",
              borderRadius: "8px",
              color: "green",
              cursor: "pointer",
              fontWeight: "600"
            }}
            onClick={() => window.open("YOUR_ZOOM_LINK", "_blank")}
          >
            Join Zoom Session
          </button>
        </div>
      </main>

       {/* FOOTER */}
      <footer
        className="footer"
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px 0",
          color: "#000"
        }}
      >
        <p>© {new Date().getFullYear()} Noah Built / Space In My Place</p>
      </footer>
    </div>
  );
} 
