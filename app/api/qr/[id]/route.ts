// app/api/qr/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import QRCode from 'qrcode'
import users from '@/data/users.json'

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const user = users.find((u) => u.id === params.id)
  if (!user) return NextResponse.json({ message: 'Not found' }, { status: 404 })

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/user?id=${user.id}`
  const qr = await QRCode.toDataURL(url)
  return NextResponse.json({ ...user, qr })
}
