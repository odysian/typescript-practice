interface NewButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  color?: string;
}



function NewButton({ text, onClick, disabled, color }: NewButtonProps) {

  // const [isDisabled, setIsDisabled] = useState<boolean>(false);
  return (
    <div>
      <button onClick={onClick} disabled={disabled} style={{ backgroundColor: color }}>
        {text}
      </button>
{/* 
      <button onClick={() => setIsDisabled(true)}>Disable</button>
      <button onClick={() => setIsDisabled(false)}>Enable</button> */}
    </div>
  )
}

export default NewButton;