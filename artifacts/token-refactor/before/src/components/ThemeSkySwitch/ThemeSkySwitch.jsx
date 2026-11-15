import "./ThemeSkySwitch.css";

export default function ThemeSkySwitch({ theme, onToggle }) {
  const isNight = theme === "dark";
  const label = isNight ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối";

  return <div className="u021-theme">
    <button className="u021-theme__switch" type="button" role="switch" aria-checked={isNight} aria-label={label} title={label} onClick={onToggle}>
      <img src={`${import.meta.env.BASE_URL}${isNight ? "moon.svg" : "sun.svg"}`} alt="" aria-hidden="true" />
    </button>
  </div>;
}
