export const getRandomEmoji = (): string[] => {
  const e: string[] = [
    '💻',
    '🏛️',
    '🗽',
    '🗼',
    '🎉',
    '⛩️',
    '🛴',
    '🎁',
    '📎',
    '🔑',
    '✈️',
    '🚀',
    '🛸',
    '🪐',
    '🗿',
    '💣',
    '🧭',
    '💿',
    '📷',
    '⚔️',
    '🛎',
    '🎏',
    '🌝',
    '🐱',
    '🤟🏽',
  ]
  return e.sort((a, b) => 0.5 - Math.random())
}