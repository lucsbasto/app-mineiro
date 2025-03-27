// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function isUserVilaAugustaOrACM(user: any) {
  const vilaAugustaAndACMIds = [
    '408dd416-b6bf-422e-a320-485fb0f046d1',
    '408dd416-b6bf-422e-a320-485fb0f046d3',
  ]
  return vilaAugustaAndACMIds.includes(user.id)
}
