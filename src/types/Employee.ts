import type { ShiftPeriod } from "./Shift";

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
  daysOff: Date[];
}
