import { useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import dayjs from 'dayjs'

import { ProgressBar } from './ProgressBar'
import { HabitList } from './HabitList'

interface HabitDayProps {
    date: Date
    defaultCompleted?: number
    amount?: number
}

export function HabitDay({ date, defaultCompleted = 0, amount = 0 }: HabitDayProps) {
    const [completed, setCompleted] = useState(defaultCompleted)

    const comlpetedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0

    const dayAndMonth = dayjs(date).format('DD/MM')
    const dayOfWeek = dayjs(date).format('dddd')

    function handleCompletedChanged(completed: number) {
        setCompleted(completed)
    }

    return (
        <Popover.Root>
            <Popover.Trigger
                className={clsx('w-10 h-10border-2 rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-green-500', {
                    'bg-zinc-900 border-zinc-800': comlpetedPercentage === 0,
                    'bg-green-900 border-green-500': comlpetedPercentage > 0 && comlpetedPercentage < 20,
                    'bg-green-800 border-green-500': comlpetedPercentage >= 20 && comlpetedPercentage < 40,
                    'bg-green-700 border-green-500': comlpetedPercentage >= 40 && comlpetedPercentage < 60,
                    'bg-green-600 border-green-500': comlpetedPercentage >= 60 && comlpetedPercentage < 80,
                    'bg-green-500 border-green-400': comlpetedPercentage >= 80,
                })}
            />

            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col focus:outline-none focus:ring-2 focus:ring-green-500">
                    <span className="font-semibold text-zinc-400">
                        {dayOfWeek}
                    </span>
                    <span className="mt-1 font-extrabold leading-tight text-3xl">
                        {dayAndMonth}
                    </span>

                    <ProgressBar progress={comlpetedPercentage} />

                    <HabitList date={date} onCompletedChanged={handleCompletedChanged} />

                    <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}
