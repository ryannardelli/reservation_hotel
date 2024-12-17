import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export const Form = () => {
  return (
    <div className="container">
      <form autoComplete="off">
        <div className="row">
          <div className="mb-3 col-12 col-md-4 col-lg-4 form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Insira seu nome"
              required
            />
            <label htmlFor="name">Nome</label>
          </div>
          <div className="mb-3 col-12 col-md-4 col-lg-4 form-floating">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Insira seu sobrenome"
              required
            />
            <label htmlFor="lastName">Sobrenome</label>
          </div>
          <div className="mb-3 col-12 col-md-4 col-lg-4 form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Insira seu email"
              required
            />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="mb-3 col-12 col-md-6 col-lg-6">
            <label htmlFor="roomType" className="form-label">
              Tipo de quarto
            </label>
            <select className="form-select" id="roomType">
              <option value="single">Quarto Individual</option>
              <option value="double">Quarto Duplo</option>
              <option value="suite">Suíte</option>
              <option value="family">Quarto Familiar</option>
              <option value="presidential">Suíte Presidencial</option>
            </select>
          </div>
          <div className="mb-3 col-12 col-md-4 col-lg-4">
            <label htmlFor="number_guess" className="form-label">
              Número de convidados <span className="optional">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="number_guess"
              name="number_guess"
              placeholder="Insira o número de convidados"
              required
            />
          </div>
          <div className="col-12 mb-3">
            Data e hora de chegada <span className="optional">*</span>
          </div>
          <div className="col-12 mb-3 col-md-4 col-md-4">
            <input type="date" className="form-control" name="date" required />
          </div>

          <div className="col-8 mb-3 col-md-4 col-md-4">
            <input type="time" className="form-control" name="hour" required />
          </div>

          <div className="col-4 mb-3 col-md-2 col-md-2">
            <select id="hourSelected" className="form-select">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            Data de partida <span className="optional">*</span>
          </div>

          <div className="col-12 col-md-4 col-lg-4 mb-3">
            <select id="selectedMouth" className="form-select" required>
              <option value="" disabled selected>
                Mês
              </option>
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Março</option>
              <option value="4">Abril</option>
              <option value="5">Maio</option>
              <option value="6">Junho</option>
              <option value="7">Julho</option>
              <option value="8">Agosto</option>
              <option value="9">Setembro</option>
              <option value="10">Outubro</option>
              <option value="11">Novembro</option>
              <option value="12">Dezembro</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;