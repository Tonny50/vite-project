

function money(amountCents) {
  return (
    `$${(amountCents / 100).toFixed(2)}`
  )
}

export default money