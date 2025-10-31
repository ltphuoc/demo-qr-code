'use client'
import usersData from '@/data/users.json'
import { useState } from 'react'

const mapName = {
  '1': 'Liên Thắng',
  '5': 'Nẽ Châu',
}

export default function Home() {
  const [activeRegion, setActiveRegion] = useState<'1' | '5'>('1')
  const regions = Object.keys(usersData) as ['1', '5']

  return (
    <div className="p-6">
      {/* Tabs header */}
      <div className="flex gap-2 mb-6">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-4 py-2 rounded-lg border transition ${
              activeRegion === region
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            Vùng {mapName[region]}
          </button>
        ))}
      </div>

      {/* List users */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {usersData[activeRegion].map((user) => (
          <div key={user.id} className="border rounded-lg p-3 text-center shadow-sm hover:shadow-md">
            <p className="font-semibold text-gray-800">{user.name}</p>
            <img src={`/qrcodes/${user.id}.png`} alt={user.name} className="w-32 h-32 mx-auto my-2" />
            <p className="text-sm text-gray-600">{user.phone || 'Chưa có số'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
