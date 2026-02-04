
export type ShiftPeriodType = "T1" | "T2" | "T3" | "T4" | "Custom";

export type  ShiftPeriod = {
  type: ShiftPeriodType;
  in: "06:00" | "08:00" | "14:20" | "22:35" | string;
  out: "14:20" | "16:20" | "22:35" | "06:00" | string;
};

export const shifts: ShiftPeriod[] = [
  { type: "T1", in: "06:00", out: "14:20" },
  { type: "T2", in: "08:00", out: "16:20" },
  { type: "T3", in: "14:20", out: "22:35" },
  { type: "T4", in: "22:35", out: "06:00" },
];