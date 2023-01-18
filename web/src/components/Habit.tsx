interface IHeader {
  cabeca: string
}

class Pessoa {}

export function Habit(props: IHeader) {
  return (
    <>
      <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center">
        {props.cabeca}
      </div>
    </>
  )
}
