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
          <div className="mb-3 col-12 col-md-6 col-lg-6">
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
        </div>
      </form>
    </div>
  );
};

export default Form;
