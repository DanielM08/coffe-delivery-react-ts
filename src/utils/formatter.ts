export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
})

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
  minimumFractionDigits: 2,
})
