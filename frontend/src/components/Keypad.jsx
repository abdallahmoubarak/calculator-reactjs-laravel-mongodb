import Button from "./Button";

export default function Keypad({ value, setValue }) {
  return (
    <>
      <div className="keypad">
        {keys.map((key, i) => (
          <div key={i}>
            <Button
              text={key.text}
              color={key.color}
              cls={key.cls}
              onClick={() => setValue((value += key.value))}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .keypad {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 60rem;
          margin: auto;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

const keys = [
  {
    text: "(",
    color: "gray",
    value: "(",
  },
  {
    text: ")",
    color: "gray",
    value: ")",
  },
  {
    text: "mc",
    color: "gray",
  },
  {
    text: "m+",
    color: "gray",
  },
  {
    text: "m-",
    color: "gray",
  },
  {
    text: "mr",
    color: "gray",
  },
  {
    text: "C",
    color: "gray",
  },
  {
    text: "+/-",
    color: "gray",
  },
  {
    text: "%",
    color: "gray",
  },
  {
    text: "÷",
    color: "#ff9f09",
  },
  {
    text: "2nd",
    color: "gray",
  },
  {
    text: "X2",
    color: "gray",
  },
  {
    text: "X3",
    color: "gray",
  },
  {
    text: "Xy",
    color: "gray",
  },
  {
    text: "ex",
    color: "gray",
  },
  {
    text: "10x",
    color: "gray",
  },
  {
    text: "7",
    color: "#aaa",
    value: "7",
  },
  {
    text: "8",
    color: "#aaa",
    value: "8",
  },
  {
    text: "9",
    color: "#aaa",
    value: "9",
  },
  {
    text: "x",
    color: "#ff9f09",
  },
  {
    text: "1/x",
    color: "gray",
  },
  {
    text: "2<x",
    color: "gray",
  },
  {
    text: "3<x",
    color: "gray",
  },
  {
    text: "y<x",
    color: "gray",
  },
  {
    text: "ln",
    color: "gray",
  },
  {
    text: "log10",
    color: "gray",
  },
  {
    text: "4",
    color: "#aaa",
    value: "4",
  },
  {
    text: "5",
    color: "#aaa",
    value: "5",
  },
  {
    text: "6",
    color: "#aaa",
    value: "6",
  },
  {
    text: "-",
    color: "#ff9f09",
  },
  {
    text: "x!",
    color: "gray",
  },
  {
    text: "sin",
    color: "gray",
  },
  {
    text: "cos",
    color: "gray",
  },
  {
    text: "tan",
    color: "gray",
  },
  {
    text: "e",
    color: "gray",
  },
  {
    text: "EE",
    color: "gray",
  },
  {
    text: "1",
    color: "#aaa",
    value: "1",
  },
  {
    text: "2",
    color: "#aaa",
    value: "2",
  },
  {
    text: "3",
    color: "#aaa",
    value: "3",
  },
  {
    text: "+",
    color: "#ff9f09",
  },
  {
    text: "Rad",
    color: "gray",
  },
  {
    text: "sinh",
    color: "gray",
  },
  {
    text: "cosh",
    color: "gray",
  },
  {
    text: "tanh",
    color: "gray",
  },
  {
    text: "pi",
    color: "gray",
  },
  {
    text: "Rand",
    color: "gray",
  },
  {
    text: "0",
    color: "#aaa",
    cls: "flex",
    value: "0",
  },
  {
    text: ".",
    color: "#aaa",
  },
  {
    text: "=",
    color: "#ff9f09",
  },
];
