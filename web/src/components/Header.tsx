import { Plus } from 'phosphor-react'
import logoImage from '../assets/logo.svg'

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />

      <button
        type="button"
        className="border border-violet-500 rounded-lg px-6 py-4 flex items-center gap-3 hover:border-4 hover:border-double hover:border-violet-400 hover:bg-violet-500 hover:text-background"
      >
        <Plus size={20} />
        Novo hábito
      </button>
    </div>
  )
}