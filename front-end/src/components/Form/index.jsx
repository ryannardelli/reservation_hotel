import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { generateYears } from '../../utils/generateYears';
import { generateDays } from '../../utils/generateDays';
import { sendReservation } from '../../utils/sendReservation';
import { useState } from 'react';
import P from 'prop-types';

const years = generateYears(1900, 2099);
const days = generateDays();

export const Form = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    typeRoom: null,
    numberGuest: null,
    dateArrival: null,
    hourArrival: null,
    turn: 'AM',
    dayDeparture: null,
    monthDeparture: null,
    yearDeparture: null,
    freePickup: true,
    specialRequest: null,
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await handleSubmit(formData);
  };

  return (
    <div className="container">
      <form autoComplete="off" onSubmit={onSubmitHandler}>
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
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
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
              value={formData.lastName}
              placeholder="Insira seu sobrenome"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
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
              value={formData.email}
              placeholder="Insira seu email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3 col-12 col-md-6 col-lg-6">
            <label htmlFor="typeRoom" className="form-label">
              Tipo de quarto
            </label>
            <select
              className="form-select"
              id="typeRoom"
              required
              value={formData.typeRoom}
              onChange={(e) =>
                setFormData({ ...formData, typeRoom: e.target.value })
              }
            >
              <option value="" disabled selected>
                Selecione o tipo de quarto
              </option>
              <option value="Individual">Quarto Individual</option>
              <option value="Duplo">Quarto Duplo</option>
              <option value="Suíte">Suíte</option>
              <option value="Familiar">Quarto Familiar</option>
              <option value="Presidencial">Suíte Presidencial</option>
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
              value={formData.numberGuest}
              onChange={(e) =>
                setFormData({ ...formData, numberGuest: e.target.value })
              }
            />
          </div>

          <div className="col-12 mb-3 fw-bold">
            Data e hora de chegada <span className="optional">*</span>
          </div>

          <div className="col-12 mb-3 col-md-4 col-md-4">
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.dateArrival}
              onChange={(e) =>
                setFormData({ ...formData, dateArrival: e.target.value })
              }
            />
          </div>

          <div className="col-8 mb-3 col-md-4 col-md-4">
            <input
              type="time"
              className="form-control"
              name="hour"
              value={formData.hourArrival}
              onChange={(e) =>
                setFormData({ ...formData, hourArrival: e.target.value })
              }
            />
          </div>

          <div className="col-4 mb-3 col-md-2 col-md-2">
            <select
              id="hourSelected"
              className="form-select"
              value={formData.turn}
              onChange={(e) =>
                setFormData({ ...formData, turn: e.target.value })
              }
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <div className="col-12 mb-3 fw-bold">
            Data de partida <span className="optional">*</span>
          </div>

          <div className="col-12 col-md-4 col-lg-4 mb-3">
            <select
              id="selectedDay"
              className="form-select"
              value={formData.dayDeparture}
              onChange={(e) =>
                setFormData({ ...formData, dayDeparture: e.target.value })
              }
            >
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
            <select
              id="selectedMonth"
              className="form-select"
              value={formData.monthDeparture}
              onChange={(e) =>
                setFormData({ ...formData, monthDeparture: e.target.value })
              }
            >
              <option value="" disabled selected>
                Mês
              </option>
              <option value="Janeiro">Janeiro</option>
              <option value="Fevereiro">Fevereiro</option>
              <option value="Março">Março</option>
              <option value="Abril">Abril</option>
              <option value="Maio">Maio</option>
              <option value="Junho">Junho</option>
              <option value="Julho">Julho</option>
              <option value="Agosto">Agosto</option>
              <option value="Setembro">Setembro</option>
              <option value="Outubro">Outubro</option>
              <option value="Novembro">Novembro</option>
              <option value="Dezembro">Dezembro</option>
            </select>
          </div>

          <div className="col-12 col-md-4 col-lg-4 mb-3">
            <select
              id="selectedYear"
              className="form-select"
              value={formData.yearDeparture}
              onChange={(e) =>
                setFormData({ ...formData, yearDeparture: e.target.value })
              }
            >
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

          <div className="col-12 mb-2 fw-bold">Gostaria de coleta grátis?</div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="free-pickup_yes"
                    name="free-pickup"
                    value={true}
                    checked={formData.freePickup === true}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        freePickup: e.target.value === 'true',
                      })
                    }
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
                    value={true}
                    checked={formData.freePickup === false}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        freePickup: e.target.value === 'false',
                      })
                    }
                  />
                  <label className="form-check-label" htmlFor="free-pickup_no">
                    Não. Obrigado, mas eu não quero coleta grátis.
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="requestEspecial" className="form-label">
              {' '}
              Pedido Especial <span className="optional">*</span>
            </label>
            <textarea
              className="form-control"
              id="requestSpecial"
              name="requestSpecial"
              rows="6"
              placeholder="Digite seu texto aqui"
              value={formData.specialRequest}
              onChange={(e) =>
                setFormData({ ...formData, specialRequest: e.target.value })
              }
            ></textarea>
          </div>

          <button
            type="submit"
            id="btn-reservation"
            className="btn btn-success mb-4"
          >
            Fazer Reserva
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  handleSubmit: P.func.isRequired,
};

export default Form;
