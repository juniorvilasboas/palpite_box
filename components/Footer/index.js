import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto bg-gray-700 p-4 text-center text-white'>
      Projeto desenvolvido por: <a>Moacyr Santana</a> / {' '}
      <div className='inline'>
        <a href='https://www.linkedin.com/in/moacyrsantana/' target='_blank'>
          <img className='inline rounded-full' src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
        </a> / {' '}
        <a href='https://github.com/juniorvilasboas' target='_blank'>
          <img className='inline rounded-full' src="https://img.shields.io/badge/-Github-000?style=for-the-badge&logo=github&logoColor=white" />
        </a>
        <div className='mt-4 mx-auto'>
          <img className='h-20 inline px-16' src='/logo_semana_fsm.png' />
          <a href='http://serveware.com.br' target='_blank'>
            <img className='h-16 inline px-16' src='/Serveware - Marca.png' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer