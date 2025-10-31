import fs from 'fs'
import path from 'path'
import QRCode from 'qrcode'

const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/users.json'), 'utf-8'))

// Gộp toàn bộ user từ các vùng
const allUsers = Object.values(data).flat()

const OUTPUT_DIR = path.join(process.cwd(), 'public/qrcodes')
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

for (const u of allUsers) {
  // @ts-expect-error ewqeqw
  const url = `${BASE_URL}/user?id=${u.id}`
  // @ts-expect-error ewqeqw
  const file = path.join(OUTPUT_DIR, `${u.id}.png`)
  await QRCode.toFile(file, url, { width: 300 })
  console.log(`✅ Saved ${file}`)
}

console.log(`🎉 Generated ${allUsers.length} QR codes`)
