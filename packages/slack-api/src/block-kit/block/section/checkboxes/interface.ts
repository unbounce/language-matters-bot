export interface Interface {
  text: string
  options: [Option]
  actionId: string
}

export interface Option {
  text: string
  description: string
  value: string
}