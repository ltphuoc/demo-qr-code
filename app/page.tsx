// app/page.tsx
import users from '@/data/users.json'

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {users.map((u) => (
        <div key={u.id} className="p-4 border rounded-xl text-center">
          <p className="font-semibold mb-2">{u.name}</p>
          <img src={`/qrcodes/${u.id}.png`} alt={u.name} className="w-40 h-40 mx-auto" />
          <p className="text-gray-500 text-sm mt-2">{u.phone || 'N/A'}</p>
        </div>
      ))}
    </div>
  )
}
