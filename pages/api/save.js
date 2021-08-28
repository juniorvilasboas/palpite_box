import { GoogleSpreadsheet } from 'google-spreadsheet'
import credencials from '../../credencials.json'

const doc = new GoogleSpreadsheet('1pKdoiDM6VcIU4qplGcQcytF009dvcco6TCrICH4yhBQ')

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth(credencials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Sugestao: data.Sugestao,
      Cupom: 'aaa111',
      Promo: 'asdfsadfasdf'
    })
    res.end(req.body)
  } catch (err) {
    console.log(err)
    res.end('error')
  }
}