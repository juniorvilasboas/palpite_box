import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div className='pt-12'>
      <PageTitle title='Home' />
      <p className='mt-4 text-center'>
        O restaurante {' '}
        {!data && <b>empresa.nome</b>}
        {data &&
          <b>
            {data.empresa}
          </b>
        }
        {' '}sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className=' text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-12 py-4 font-bold rounded-xl shadow-lg hover:shadow'>Dar opinião ou sugestões</a>
        </Link>
      </div>
      {!data && <p className='m-12 mx-auto text-center'>Carregando...</p>}
      {data && data.showCoupon &&
        <p className='m-12 text-center'>
          {data.message}
        </p>
      }
    </div>
  )
}

export default Index