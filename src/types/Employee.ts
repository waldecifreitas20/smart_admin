export type EmployeeTeam = "eCall" | "RSA";

export const EmployeeTeam = {
  eCall: "eCall",
  RSA: "RSA",
} as const;

export type Employee = {
  edv: string;
  name: string;
  team: EmployeeTeam;
  shift: ShiftPeriod;
  customShift?: {
    in: string;
    out: string;
  }
  daysOff: Date[];
}

export type ShiftPeriod = "T1" | "T2" | "T3" | "Custom";