interface WorkerTileProps {
  worker: {
    name: string;
    team: "eCall" | "RSA";
    shiftIn: string;
    shiftOut: string;
  }
}

const bgColors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100", "bg-purple-100", "bg-pink-100"];
const textColors = ["text-blue-700", "text-green-700", "text-yellow-700", "text-red-700", "text-purple-700", "text-pink-700"];

export function WorkerTile(props: WorkerTileProps) {
  const selectedBackground = bgColors[Math.floor(Math.random() * bgColors.length)];
  const selectedTextColor = textColors[Math.floor(Math.random() * textColors.length)];

  return (
    <div className="
    bg-white cursor-pointer
    border border-slate-200 
    p-3 rounded-xl shadow-lg shadow-slate-200
    flex items-center gap-4 
    ">
      <span
        className={`
        block size-12 shrink-0
        ${selectedBackground} ${selectedTextColor}
        rounded-full uppercase
        flex items-center justify-center  
        `}
      >{props.worker.name.substring(0, 2)}</span>

      <span className="flex  items-center justify-between w-full">
        <div>
          <p className="font-bold text-slate-900">{props.worker.name}</p>
          <p className="text-sm text-slate-500">{props.worker.team}</p>
        </div>

        <p className={`
           px-3 py-1 rounded-sm text-xs ${selectedTextColor}
           ${selectedBackground}
          `}>{props.worker.shiftIn} - {props.worker.shiftOut}</p>

      </span>
    </div>
  );
}