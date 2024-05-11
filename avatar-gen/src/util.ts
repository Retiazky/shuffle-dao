export function createRangeInput(desc: string, min: number, max: number, step = 1) {
  const valLabel = document.createElement('p')
  valLabel.style.padding = '0'
  valLabel.style.margin = '0'

  const container = document.createElement('div')
  container.style.display = 'flex'
  container.style.flexDirection = 'row'
  container.style.alignItems = 'center'

  const input = document.createElement('input')
  input.type = 'range'
  input.min = String(min)
  input.max = String(max)
  input.step = String(step)

  const updateLabel = () => valLabel.innerText = String(input.value) + ' ' + desc
  updateLabel()

  input.oninput = updateLabel

  container.appendChild(input)
  container.appendChild(valLabel)
  document.body.appendChild(container)

  return () => Number(input.value)
}