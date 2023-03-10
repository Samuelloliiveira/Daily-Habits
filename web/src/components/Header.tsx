import * as Dialog from '@radix-ui/react-dialog'

import { Plus, X } from 'phosphor-react'
import logoImage from '../assets/logo.svg'

import { NewHabitForm } from './NewHabitForm'

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="border border-green-500 rounded-lg px-6 py-4 flex items-center gap-3 hover:border-4 hover:border-double hover:border-green-400 hover:bg-green-500 hover:text-background transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <Plus size={20} />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 p-1 rounded-2xl text-zinc-400 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-green-500">
              <X size={20} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-2xl leading-tight font-extrabold text-center">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

// No react programamos de forma Declarativa
// no tradicional (HTML, JS) usamos a forma Imperativa