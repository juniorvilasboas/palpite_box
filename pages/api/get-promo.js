import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {

  await doc.useServiceAccountAuth({
    client_email: process.env.SHEET_CLIENT_EMAIL,
    private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
  })
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