const HEAD = (
    <div className="w-[50px] h-[50px] rounded-[100%] border-[10px] border-zinc-900 absolute top-[50px] right-[-20px]"></div>
)
const BODY = (
    <div className="w-[10px] h-[100px] bg-zinc-900 absolute top-[100px] right-0"></div>
)
const RIGHT_ARM = (
    <div className="w-[100px] h-[10px] bg-zinc-900 absolute top-[150px] right-[-100px] rotate-[-30deg] origin-bottom-left"></div>
)
const LEFT_ARM = (
    <div className="w-[100px] h-[10px] bg-zinc-900 absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right"></div>
)
const RIGHT_LEG = (
    <div className="w-[100px] h-[10px] bg-zinc-900 absolute top-[190px] right-[-90px] rotate-[60deg] origin-bottom-left"></div>
)
const LEFT_LEG = (
    <div className="w-[100px] h-[10px] bg-zinc-900 absolute top-[190px] right-[0] rotate-[-60deg] origin-bottom-right"></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
  }
  
  export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
      <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
          style={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
        <div
          style={{
            height: "10px",
            width: "200px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div
          style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div style={{ height: "10px", width: "250px", background: "black" }} />
      </div>
    )
  }
