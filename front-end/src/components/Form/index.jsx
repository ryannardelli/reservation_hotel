import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { generateYears } from '../../utils/generateYears';
import { generateDays } from '../../utils/generateDays';

const years = generateYears(1900, 2099);
const days = generateDays();

export const Form = () => {
  return (
    <div className="container">
      <form autoComplete="off">
        <div className="row">
          <div className="mb-3 col-12 col-md-4 col-lg-4">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Insira seu nome"
              required
            />
          </div>

          <div className="mb-3 col-12 col-md-4 col-lg-4">
            <label htmlFor="lastName" className="form-label">
              Sobrenome
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Insira seu sobrenome"
              required
            />
          </div>

          <div className="mb-3 col-12 col-md-4 col-lg-4">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Insira seu email"
              required
            />
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

          <div className="mb-3 col-12 col-md-6 col-lg-4">
            <label htmlFor="number_guess" className="form-label">
              Número de convidados <span className="optional">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="number_guess"
              name="number_guess"
              placeholder="Insira o número de convidados"
            />
          </div>

          <div className="col-12 mb-3 fw-bold">
            Data e hora de chegada <span className="optional">*</span>
          </div>

          <div className="col-12 mb-3 col-md-4 col-md-4">
            <input type="date" className="form-control" name="date" />
          </div>

          <div className="col-8 mb-3 col-md-4 col-md-4">
            <input type="time" className="form-control" name="hour" />
          </div>

          <div className="col-4 mb-3 col-md-2 col-md-2">
            <select id="hourSelected" className="form-select">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <div className="col-12 mb-3 fw-bold">
            Data de partida <span className="optional">*</span>
          </div>

          <div className="col-12 col-md-4 col-lg-4 mb-3">
            <select id="selectedYear" className="form-select">
              <option value="" disabled selected>
                Dia
              </option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12 col-md-4 col-lg-4 mb-3">
            <select id="selectedMouth" className="form-select">
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

          <div className="col-12 col-md-4 col-lg-4 mb-3">
            <select id="selectedYear" className="form-select">
              <option value="" disabled selected>
                Ano
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12 mb-2 fw-bold">
            Gostaria de coleta grátis? <span className="optional">*</span>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="free-pickup_yes"
                    name="free-pickup"
                    value="free-picup-yes"
                    checked
                  />
                  <label className="form-check-label" htmlFor="free-pickup_yes">
                    Sim. Eu gostaria de coleta grátis.
                  </label>
                </div>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="free-pickup_no"
                    name="free-pickup"
                    value="free-picup-no"
                  />
                  <label className="form-check-label" htmlFor="free-pickup_no">
                    Não. Obrigado, mas eu não quero coleta grátis.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
