import { NextRequest, NextResponse } from 'next/server'
import usersByRegion from '@/data/users.json'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ message: 'Missing id' }, { status: 400 })

  const allUsers = Object.values(usersByRegion).flat() as { id: string; name: string; phone: string }[]

  const user = allUsers.find((u) => u.id === id)
  if (!user) return NextResponse.json({ message: 'Not found' }, { status: 404 })

  return NextResponse.json(user)
}
