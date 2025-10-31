// app/api/user/route.ts
import { NextRequest, NextResponse } from 'next/server'
import users from '@/data/users.json'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  const user = users.find((u) => u.id === id)
  if (!user) return NextResponse.json({ message: 'Not found' }, { status: 404 })
  return NextResponse.json(user)
}
