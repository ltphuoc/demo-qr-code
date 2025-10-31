import { NextRequest, NextResponse } from 'next/server'
import QRCode from 'qrcode'
import users from '@/data/users.json'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params // 👈 cần await ở đây

  const user = users.find((u) => u.id === id)
  if (!user) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 })
  }

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/user?id=${id}`
  const qr = await QRCode.toDataURL(url)

  return NextResponse.json({ ...user, qr })
}
