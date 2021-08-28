import { GoogleSpreadsheet } from 'google-spreadsheet'
import credencials from '../../credencials.json'

const doc = new GoogleSpreadsheet('1pKdoiDM6VcIU4qplGcQcytF009dvcco6TCrICH4yhBQ')

export default async (req, res) => {

  await doc.useServiceAccountAuth(credencials)
  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[2]

  await sheet.loadCells('A2:B5')

  const empresa = sheet.getCell(1, 1)
  const mostrarPromocao = sheet.getCell(4, 0)
  const msgPromocao = sheet.getCell(4, 1)

  res.end(JSON.stringify({
    empresa: empresa.value,
    showCoupon: mostrarPromocao.value === 'verdadeiro',
    message: msgPromocao.value
  }))
}