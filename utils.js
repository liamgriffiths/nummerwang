export const wait = time => new Promise(resolve => setTimeout(resolve, time || 0))

export const random = (min = 0, max = 1000) => Math.floor(Math.random() * (max - min + 1)) + min

export const say = async (text) => new Promise((resolve) => {
  const ssu = new SpeechSynthesisUtterance()
  ssu.lang = 'de-DE'
  ssu.text = text.toString()
  ssu.onend = resolve
  window.speechSynthesis.speak(ssu)
})
