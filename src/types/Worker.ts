export type WorkerTeam = "eCall" | "RSA";

export const WorkerTeam = {
  eCall: "eCall",
  RSA: "RSA",
} as const;

export type Worker = {
  edv: string; 
  name: string;
  team: WorkerTeam;
  shiftIn: string;
  shiftOut:string;
}