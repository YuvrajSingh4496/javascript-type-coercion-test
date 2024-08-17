
type CheckboxProps = {
  value: boolean,
  onChange?: (value: boolean) => void 
};

function Checkbox(props: CheckboxProps) {
  const {
    value,
    onChange
  } = props;

  function switchValue() {
    if (onChange) {
      onChange(!value);
    }
  }

  return (
    <input  className="" type="checkbox" onChange={switchValue} value={Number(value)} checked={value} />
  )
}

export default Checkbox;