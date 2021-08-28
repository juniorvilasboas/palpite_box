import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div className='pt-12'>
      <p className='mt-4 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className=' text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-12 py-4 font-bold rounded-xl shadow-lg hover:shadow'>Dar opinião ou sugestões</a>
        </Link>
      </div>
      <p className='m-12 text-center'>
        Mensagem do desconto.
      </p>
    </div>
  )
}

export default Index