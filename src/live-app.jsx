const { academyData } = window;

function App() {
  const coachFallbacks = [
    './public/profesor-gabriel.jpg',
    './public/profesor-gabriel.jpeg',
    './public/profesor-gabriel.webp',
    './public/profesor.png',
    './public/gabriel.png',
    './public/coach-placeholder.svg'
  ];

  const handleCoachImageError = (event) => {
    const currentIndex = Number(event.currentTarget.dataset.fallbackIndex || 0);
    if (currentIndex >= coachFallbacks.length) {
      event.currentTarget.src = './public/coach-placeholder.svg';
      return;
    }
    event.currentTarget.src = coachFallbacks[currentIndex];
    event.currentTarget.dataset.fallbackIndex = String(currentIndex + 1);
  };

  const {
    name,
    tagline,
    description,
    ctaWhatsapp,
    instagram,
    location,
    phone,
    logo,
    heroMedia,
    classes,
    schedule,
    pricing,
    benefits,
    reviews,
    coach
  } = academyData;

  const renderStars = (rating = 5) => '★'.repeat(rating);

  return (
    <div className="page">
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido principal
      </a>
      <div className="logo-band">
        <img className="header-logo" src={logo} alt={`${name} logo`} />
      </div>
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          {heroMedia.map((item, index) =>
            item.type === 'video' ? (
              <video
                key={`${item.src}-${index}`}
                className={`hero-media-item hero-media-item-${index + 1}`}
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                key={`${item.src}-${index}`}
                className={`hero-media-item hero-media-item-${index + 1}`}
                src={item.src}
                alt=""
              />
            )
          )}
          <div className="hero-media-overlay" />
        </div>
        <nav className="nav" aria-label="Navegación principal">
          <p className="brand">Academia de Artes Marciales</p>
          <div className="nav-links">
            <a href="#clases">Clases</a>
            <a href="#horarios">Horarios</a>
            <a href="#precios">Precios</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#profesor">Profesor</a>
            <a href="#resenas">Reseñas</a>
            <a className="nav-link" href={instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <h1>{tagline}</h1>
          <p className="hero-description">{description}</p>
          <p className="location-pill">
            <span className="location-flag" aria-hidden="true">
              🇨🇷
            </span>
            {location}
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={ctaWhatsapp} target="_blank" rel="noreferrer">
              WhatsApp {phone}
            </a>
            <a className="btn btn-ghost" href="#horarios">
              Ver horarios
            </a>
          </div>
        </div>
      </header>

      <main id="contenido-principal">
        <section className="section" id="clases">
          <h2>Clases que ofrecemos</h2>
          <div className="grid cards">
            {classes.map((item) => (
              <article key={item.name} className="card">
                <h3>{item.name}</h3>
                <p className="meta">Nivel: {item.level}</p>
                <p className="meta">Edad: {item.age}</p>
                <p>{item.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="horarios">
          <h2>Horarios</h2>
          <div className="table-wrap">
            <table>
              <caption>Horario semanal de clases</caption>
              <thead>
                <tr>
                  <th>Hora</th>
                  <th>Lunes</th>
                  <th>Martes</th>
                  <th>Miércoles</th>
                  <th>Jueves</th>
                  <th>Viernes</th>
                  <th>Sábado</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.time}>
                    <td>{row.time}</td>
                    <td>{row.lunes}</td>
                    <td>{row.martes}</td>
                    <td>{row.miercoles}</td>
                    <td>{row.jueves}</td>
                    <td>{row.viernes}</td>
                    <td>{row.sabado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" id="precios">
          <h2>Precios</h2>
          <div className="grid pricing">
            {pricing.map((plan) => (
              <article key={plan.plan} className="price-card">
                <h3>{plan.plan}</h3>
                <p className="price">{plan.price}</p>
                <p>{plan.includes}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="beneficios">
          <h2>Nuestros beneficios</h2>
          <div className="grid pricing">
            {benefits.map((item) => (
              <article key={item.title} className="price-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <p className="price">{item.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section instructor" id="profesor">
          <h2>Profesor</h2>
          <div className="instructor-box">
            <div className="coach-layout">
              <div className="coach-photo-wrap">
                <img
                  className="coach-photo"
                  src={coach.photo}
                  alt={`Foto de ${coach.name}`}
                  onError={handleCoachImageError}
                />
              </div>
              <div>
                <h3>{coach.name}</h3>
                <p className="meta">{coach.rank}</p>
                <p>{coach.bio}</p>
                {coach.story?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <ul>
                  {coach.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="resenas">
          <h2>Reseñas</h2>
          <div className="grid cards">
            {reviews.map((review, index) => (
              <article key={`${review.author}-${index}`} className="card review-card">
                <p className="review-stars" aria-label={`${review.rating} estrellas`}>
                  {renderStars(review.rating)}
                </p>
                <p>{review.comment}</p>
                <p className="meta">{review.author}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{name}</p>
        <p>{location}</p>
        <p>{phone}</p>
        <a href={instagram} target="_blank" rel="noreferrer">
          {instagram}
        </a>
      </footer>

      <a
        className="floating-whatsapp"
        href={ctaWhatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={`Escribir por WhatsApp al ${phone}`}
      >
        WhatsApp
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
