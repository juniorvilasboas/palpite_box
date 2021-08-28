import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
  return (
    <div className='pt-12'>
      <h1 className='text-center font-bold my-4 text-2xl'>Criticas e sugestões</h1>
      <p className='text-center'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='w-72 mx-auto mt-4'>
        <label className='font-bold'>Seu nome:</label>
        <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='text' />
        <label className='font-bold'>E-mail:</label>
        <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='text' />
        <label className='font-bold'>Whatsapp:</label>
        <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='text' />
        <label className='font-bold'>Sua crítica ou sugestão:</label>
        <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='text' />
        <label className='font-bold'>Que nota você daria para o estabelecimento:</label>
        <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='text' />
        <label className='font-bold'>Você indicaria para um amigo:</label>
        <input className='bg-blue-100 w-72 p-2 mt-1 mb-2 rounded-md' type='text' />
      </div>
      <div className=' text-center my-12'>
        <Link href='/'>
          <a className='bg-blue-400 px-12 py-4 font-bold rounded-xl shadow-lg hover:shadow'>Enviar crítica ou sugestão</a>
        </Link>
      </div>
      <p className='m-12 text-center'>
        Mensagem do desconto.
      </p>
    </div>
  )
}

export default Pesquisa