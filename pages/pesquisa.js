import React, { useState } from 'react'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Sugestao: '',
    Nota: 0,
    Indicacao: ''
  })

  const notas = [0, 1, 2, 3, 4, 5]
  const indicacoes = ['Sim', 'Não']
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {

    }
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div className='pt-12'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold my-4 text-2xl'>Criticas e sugestões</h1>
      <p className='text-center my-4'>
        O restaurante {' '}
        {!data && <p>empresa.nome</p>}
        {data &&
          <b>
            {data.empresa}
          </b>
        }
        {' '}sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      {!success &&
        <div className='w-72 mx-auto mt-4'>
          <label className='font-bold'>Seu nome:</label>
          <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='text' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
          <label className='font-bold'>E-mail:</label>
          <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='email' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
          <label className='font-bold'>Whatsapp:</label>
          <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='text' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
          <label className='font-bold'>Sua crítica ou sugestão:</label>
          <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='text' placeholder='Crítica/Sugestão' onChange={onChange} name='Sugestao' value={form.Sugestao} />
          <div>
            <label className='font-bold'>Que nota você daria para o estabelecimento:</label>
            <br />
            <div className=' my-4 mx-auto text-center'>
              <div className='flex'>
                {notas.map(nota =>
                  <label className='block w-1/6 text-center'>
                    {nota} <br />
                    <input type='radio' name='Nota' value={nota} onChange={onChange} />
                  </label>
                )}
              </div>
            </div>
          </div>
          <div>
            <label className='font-bold'>Você indicaria para um amigo:</label>
            <br />
            <div className=' my-4 mx-auto text-center'>
              <div className='flex'>
                {indicacoes.map(indicacao =>
                  <label className='block w-1/2 text-center'>
                    {indicacao} <br />
                    <input type='radio' name='Indicacao' value={indicacao} onChange={onChange} />
                  </label>
                )}
              </div>
            </div>
          </div>

          <div className=' text-center my-12'>
            <button className='bg-blue-400 px-12 py-4 font-bold rounded-xl shadow-lg hover:shadow' onClick={save}>Enviar crítica ou sugestão</button>
          </div>
        </div>
      }
      {success &&
        <div className='w-1/5 mx-auto'>
          <p className='text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica.</p>
          {
            retorno.showCoupon && <div className='text-center border p-4 m-4'>
              Seu cupom: <br />
              <span className='font-bold text-2xl'>{retorno.Cupom}</span>
            </div>
          }
          {
            retorno.showCoupon && <div className='text-center border p-4 m-4'>
              <span className='font-bold'>{retorno.Promo}</span>
              <br />
              <br />
              <span className='italic'>Tire um print ou foto desta tela e apresente ao garçon!</span>
            </div>
          }
        </div>
      }
      {!data && <p className='m-12 text-center'>Carregando...</p>}
      {data && data.showCoupon &&
        <p className='m-12 text-center'>
          {data.message}
        </p>
      }
    </div >
  )
}

export default Pesquisa