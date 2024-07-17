import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div id="carousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../../../src/assets/249ec3bb3cddfb099af8d5d3dac01246.jpg"
              className="d-block w-100 banner"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Julio Promocional</h2>
              <p>
                Encuentra nuestras mejores promociones del mes de Julio solo aca
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../../src/assets/star_wars.jpg"
              className="d-block w-100 banner"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Agosto Promocional</h2>
              <p>
                Se viene Agosto con grandes sorpresas en todos nuestros productos Star Wars (Que la fuerza te acompañe)
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../../src/assets/edge.jpg"
              className="d-block w-100 banner"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Easter Egg</h2>
              <p>
                Dejame una estrella en mi{" "}
                <a href="https://github.com/AlfoVar/vargas-geek">
                  repositorio
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </>
  );
};

export default Banner;
