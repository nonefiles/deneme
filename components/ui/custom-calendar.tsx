"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomCalendarProps {
  selected?: Date
  onSelect?: (date: Date) => void
  disabled?: (date: Date) => boolean
  className?: string
}

const TURKISH_MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
]

const TURKISH_DAYS = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]

export function CustomCalendar({ selected, onSelect, disabled, className }: CustomCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // Get first day of month and adjust for Monday start (Turkish standard)
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  const mondayStart = (firstDay.getDay() + 6) % 7 // Convert Sunday=0 to Monday=0
  startDate.setDate(firstDay.getDate() - mondayStart)

  const days = []
  const current = new Date(startDate)

  // Generate 42 days (6 weeks)
  for (let i = 0; i < 42; i++) {
    days.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelected = (date: Date) => {
    return selected && date.toDateString() === selected.toDateString()
  }

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === month
  }

  const isDisabled = (date: Date) => {
    return disabled ? disabled(date) : false
  }

  return (
    <div className={cn("bg-white rounded-2xl shadow-lg border border-[#E5E7EB] p-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPreviousMonth}
          className="h-8 w-8 p-0 hover:bg-[#74966F]/10 rounded-full"
        >
          <ChevronLeft className="h-4 w-4 text-[#74966F]" />
        </Button>

        <h2 className="font-heading text-lg font-semibold text-[#2B4E31]">
          {TURKISH_MONTHS[month]} {year}
        </h2>

        <Button
          variant="ghost"
          size="sm"
          onClick={goToNextMonth}
          className="h-8 w-8 p-0 hover:bg-[#74966F]/10 rounded-full"
        >
          <ChevronRight className="h-4 w-4 text-[#74966F]" />
        </Button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {TURKISH_DAYS.map((day) => (
          <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-[#6B7280] font-body">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => {
          const isCurrentMonthDay = isCurrentMonth(date)
          const isTodayDate = isToday(date)
          const isSelectedDate = isSelected(date)
          const isDisabledDate = isDisabled(date)

          return (
            <button
              key={index}
              onClick={() => !isDisabledDate && onSelect?.(date)}
              disabled={isDisabledDate}
              className={cn(
                "h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200 font-body",
                "hover:bg-[#74966F]/10 focus:outline-none focus:ring-2 focus:ring-[#74966F]/20",
                {
                  // Current month days
                  "text-[#2B4E31]": isCurrentMonthDay && !isSelectedDate && !isTodayDate,
                  // Other month days
                  "text-[#9CA3AF]": !isCurrentMonthDay,
                  // Today
                  "bg-[#74966F]/20 text-[#74966F] font-semibold": isTodayDate && !isSelectedDate,
                  // Selected
                  "bg-[#74966F] text-white font-semibold shadow-md": isSelectedDate,
                  // Disabled
                  "opacity-40 cursor-not-allowed hover:bg-transparent": isDisabledDate,
                  // Hover states
                  "hover:bg-[#74966F] hover:text-white": !isDisabledDate && !isSelectedDate,
                },
              )}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>

      {/* Footer info */}
      <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
        <p className="text-xs text-[#6B7280] text-center font-body">
          Bugün:{" "}
          {new Date().toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  )
}
