'use client'

import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

export default function UserPage() {
  const params = useSearchParams()
  const id = params.get('id')

  const { data, isLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetch(`/api/user?id=${id}`).then((r) => r.json()),
    enabled: !!id,
  })

  if (isLoading) return <p className="p-4">Đang tải...</p>
  if (!data || data.message) return <p className="p-4">Không có user</p>

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-2">Tên khách hàng: {data.name}</h1>
      <p>Mã đối tượng: {data.id}</p>
      <p>Số điện thoại: {data.phone || 'không có'}</p>
    </div>
  )
}
