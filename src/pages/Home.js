import { useNavigate } from "react-router-dom";
import aboutIcon from "../icons/ben.png";
import notebookIcon from "../icons/defter.png";
import closetIcon from "../icons/dolap.png";
import background from "../icons/apple-bakground.png";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  // Sayfa yüklendiğinde kaydırma çubuklarını gizle
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.margin = "0";
    document.documentElement.style.overflow = "hidden";
    return () => {
      // Bileşen kapandığında eski haline döndür
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "'Courier New', monospace",
      }}
    >
      {/* Sol üstte ikonlar */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "25px" }}>
        <DesktopIcon
          icon={aboutIcon}
          label="About me"
          onClick={() => navigate("/about")}
        />
        <DesktopIcon
          icon={notebookIcon}
          label="my notebooks"
          onClick={() => navigate("/notebook")}
        />
        <DesktopIcon
          icon={closetIcon}
          label="my closet"
          onClick={() => navigate("/closet")}
        />
      </div>

      {/* Alt görev çubuğu */}
      <div
        style={{
          backgroundColor: "#c0c0c0",
          borderTop: "2px solid #fff",
          borderBottom: "2px solid #404040",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "40px",
          padding: "0 10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#808080",
            border: "2px solid #dfdfdf",
            color: "#fff",
            padding: "4px 10px",
            fontWeight: "bold",
            boxShadow: "inset 2px 2px #00000055",
          }}
        >
          Start
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "#000",
            backgroundColor: "#bfbfbf",
            padding: "4px 10px",
            borderRadius: "2px",
            border: "1px solid #8f8f8f",
          }}
        >
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </div>
  );
}

function DesktopIcon({ icon, label, onClick }) {
  const iconContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    width: "80px",
    textAlign: "center",
    color: "white",
    textShadow: "1px 1px 2px black",
  };

  return (
    <div
      onClick={onClick}
      style={iconContainer}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={icon}
        alt={label}
        style={{
          width: "64px",
          height: "64px",
          marginBottom: "6px",
          imageRendering: "pixelated",
        }}
      />
      <span style={{ fontSize: "14px" }}>{label}</span>
    </div>
  );
}
