export interface CreateOrderDto {
  //'Every week'
  frequency: string
  //'No allergies'
  allergy: string
  //'Regular cleaning'
  cleaning: string
  //'357 Hasiragorb Way, Vifolk , DEW, 64818'
  address: string
  //'Monday(8:00-11:00, 18:00-20:00), Friday(8:00-11:00)',
  schedule: string
}
