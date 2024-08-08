import { lastActions } from "../AppKeyboard";

const arrColors = ["red", "green", "black", "pink"];
const arrSizes = [10, 20, 30, 40, 50, 100];
function Colors(props) {
  const handleColorChange = (color) => {
    props.setFondColor(color);
    if (props.applyColorToAll) {
      setTimeout(() => {
        props.changeColorForAll();
      }, 0);
    }
  };

  return (
    <>
      <div className="colors">
        {arrColors.map((color) => {
          return (
            <button
              className={color}
              onClick={() => {
                lastActions.push({
                  text: props.text,
                  color: props.color,
                  size: props.size,
                });
                props.setFondColor(color);
                handleColorChange(color);
              }}
            >
              {color}
            </button>
          );
        })}
      </div>
      <div className="color-mode">
        <button onClick={() => props.setApplyColorToAll(true)}>
          Apply to All
        </button>
        <button onClick={() => props.setApplyColorToAll(false)}>
          Apply to New
        </button>
      </div>
      <div className="sizes">
        {arrSizes.map((size) => {
          return (
            <button
              className={`but${size}`}
              onClick={() => {
                lastActions.push({
                  text: props.text,
                  color: props.color,
                  size: props.size,
                });
                props.setFondSize(size);
              }}
            >
              {size}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Colors;
