import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { FormDate, Forms, DataInfo } from './styles';


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );


  return (
    <Forms>
      <FormDate>
        <form onSubmit={() => handleSubmit()} className='form' noValidate>
          <h1>Dados pessoais </h1>
          <div className='form-inputs'>
            <label className='form-label'>Nome completo {errors.username && <p className="error-validation">*{errors.username}</p>}</label>
            <input
              className='form-input'
              type='text'
              name='username'
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>E-mail {errors.email && <p className="error-validation">*{errors.email}</p>}</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='contato@email.com'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-inputs '>
            <h1>Dados do cartão</h1>
            <p className='form-info'>Você não será cobrado agora. Solicitamos os dados do cartão para garantir a reserva e realizar a cobrança em caso de cancelamento 7 dias antes da reserva. </p>
            <div className="titleCard">
            <label className='form-label'>Número do cartão</label>
            <input
              className='form-input '
              type='text'
              name='card'
              placeholder="0000 0000 0000 0000"
            />
            </div>
          </div>

          <div className='form-card'>
            <div className='titleCred'>
              <label className='form-label '>Titular do cartão</label>
              <input
                  className='form-input titleCred-forms '
                  type='text'
                  name='titleCard'
                />
            </div>
            <div>
              <label className='form-label '>Validade</label>
              <input
                  className='form-input card-val'
                  type='text'
                  name='validity'
                  placeholder='00/00'
                />
            </div>
            <div>
              <label className='form-label '>CVC</label>
              <input
                  className='form-input card-val card-cvc'
                  type='text'
                  name='cvc'
                  placeholder='000'
                />
            </div>
          </div>

          <div className='form-inputs parc-form'>
            <label className='form-label'>Número de parcelas</label>
            <input
              className='form-input'
              list="parc"
              name='email'
              placeholder='Selecione o número de parcelas'
            /> 
            <datalist id="parc">
            <option value="1x sem juros" />
            <option value="2x sem juros"/>
            <option value="3x sem juros"/>
            <option value="4x com juros"/>
            <option value="5x com juros"/>
          </datalist>
          </div>
        </form>
      </FormDate>
      <DataInfo>
        <div className="reservation">
          <h1>Dados de sua reserva</h1>
          <h2>Entrada:</h2>
          <p>domingo, 17 de novembro de 2019 a partir das 14:00</p>
          <h2>Saída: </h2>
          <p>segunda-feira, 19 de novembro até 11:00</p>
          <h2>Duração total da hospedagem:</h2>
          <p>2 diárias</p>
        </div>
        <div className='checkout-abs' >
          <div className='abstract'>
            <h1>Resumo do preço</h1>
            <p>Suíte premium<p>R$ 180,00</p></p>
          </div>
          <div className='price'>
            <h2>Preço </h2>
            <p>(para todos os hóspedes)<strong>R$ 180,00</strong></p>
          </div>
        </div>
        <div className='div-btn-input'>
          <button className='form-input-btn' type='submit' onClick={(e) => handleSubmit(e)}>
            Concluir reserva
          </button>
        </div>
      </DataInfo>
    </Forms>
  );
};

export default FormSignup;
