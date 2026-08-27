export default function Hero({ title, subtitle, photo }) {
  return (
    <header className="hero">
      <h1 className={photo ? 'hero-title with-photo' : 'hero-title'}>
        <span>{title}</span>
        {photo && <img className="hero-profile-photo" src={photo} alt="" />}
      </h1>
      <p>{subtitle}</p>
    </header>
  );
}
