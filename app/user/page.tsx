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

  if (isLoading) return <p className="p-4">Loading...</p>
  if (!data || data.message) return <p className="p-4">User not found</p>

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
      <p className="text-gray-600">ID: {data.id}</p>
      <p className="text-gray-600">Phone: {data.phone || 'N/A'}</p>
    </div>
  )
}
