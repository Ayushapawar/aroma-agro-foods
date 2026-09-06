import { useEffect, useState } from "react";
import logoImg from "../../public/images/logo.png";
import "../styles/SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show splash screen for 2.5 seconds, then trigger fade out
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for fade out transition (0.5s) before removing completely
      setTimeout(() => {
        onFinish();
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${isFadingOut ? "fade-out" : ""}`}>
      <div className="splash-screen__content">
        <img 
          src={logoImg} 
          alt="Aroma Agro Foods Logo" 
          className="splash-screen__logo" 
        />
        <h1 className="splash-screen__title">Aroma Agro Foods</h1>
      </div>
    </div>
  );
}
