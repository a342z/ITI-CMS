export class Prescription {
  constructor(
    public _id: number,
    public doctor: Number,
    public patient: number,
    public medicine: number,
    public date: Date
  ) {}
}
