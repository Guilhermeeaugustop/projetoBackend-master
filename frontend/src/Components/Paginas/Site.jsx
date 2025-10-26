import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaRoute, FaSearch } from "react-icons/fa";
import paris from "../../assets/Paris.jpg";
import roma from "../../assets/Roma.jpg";
import tokyo from "../../assets/Tokyo.jpg";
import Rj from "../../assets/Rj.jpg";
import Praga from "../../assets/Praga.jpg";
import "./Site.css";

const DESTINOS = [
  { id: 1, nome: "Paris", img: paris },
  { id: 2, nome: "Roma", img: roma },
  { id: 3, nome: "Tokyo", img: tokyo },
  { id: 4, nome: "Rio de Janeiro", img: Rj },
  { id: 5, nome: "Praga", img: Praga },
];

export default function Site() {
  const [q, setQ] = useState("");

  const lista = useMemo(() => {
    const t = q.trim().toLowerCase();
    return t ? DESTINOS.filter((d) => d.nome.toLowerCase().includes(t)) : DESTINOS;
  }, [q]);

  return (
    <div className="bg-light min-vh-100">
      {/* 🔹 NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <FaRoute className="me-2" />
            TripWay
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Minhas Viagens</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Criar roteiro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Explorar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Ajustes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 🔹 CABEÇALHO */}
      <header className="text-center py-5 bg-white shadow-sm">
        <h1 className="display-5 fw-bold text-primary mb-3">TripWay</h1>
        <p className="lead text-secondary">
          O mundo é enorme e está cheio de aventuras esperando por você.<br />
          Nós ajudamos a montar o itinerário, mas quem vive a jornada é você.
        </p>
      </header>

      {/* 🔹 BARRA DE PESQUISA */}
      <div className="container my-4">
        <div className="input-group shadow-sm">
          <span className="input-group-text bg-white">
            <FaSearch className="text-secondary" />
          </span>
          <input
            type="search"
            className="form-control"
            placeholder="Pesquisar destinos"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>

      {/* 🔹 GRID DE DESTINOS */}
      <div className="container pb-5">
        <div className="row g-4">
          {lista.map((d) => (
            <div key={d.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={d.img}
                  className="card-img-top"
                  alt={d.nome}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{d.nome}</h5>

                  <div className="d-flex align-items-center gap-2 mt-3">
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      style={{ maxWidth: "45%" }}
                    />
                    <span className="text-muted">→</span>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      style={{ maxWidth: "45%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 BOTÃO */}
        <div className="text-end mt-4">
          <button className="btn btn-primary px-4 py-2 fw-semibold shadow-sm">
            Gerar roteiro
          </button>
        </div>
      </div>

      {/* 🔹 SEÇÃO INFORMATIVA */}
      <section className="container bg-white shadow-sm rounded-3 p-4 mb-5">
        <h2 className="fw-bold text-primary">Bem-vindo ao TripWay</h2>
        <p className="text-secondary">
          A aplicação visa ser uma ferramenta interativa e colaborativa que auxilia os usuários
          a montar e gerenciar roteiros de viagem de forma completa. Seu foco é integrar todas as
          informações cruciais de uma viagem em um só lugar.
        </p>
        <ul className="text-secondary">
          <li><b>Itinerários:</b> organize atividades por dia e visualize em mapa.</li>
          <li><b>Integrações:</b> rotas (Directions) e clima (OpenWeather).</li>
          <li><b>Colaboração:</b> compartilhe por link e edite em conjunto.</li>
        </ul>
      </section>
    </div>
  );
}
