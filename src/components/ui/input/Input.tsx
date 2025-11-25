import type { FC } from "react";  
import "./Input.css"

type Props = {
    placeholder?: string
    handleInput: Function
    type:
      | "text"
      | "password"
      | "email"
      | "tel"
      | "number"
      | "file"
      | "date"
      | "time"
      | "checkbox"
      | "radio";
    resetMessage: Function
    autocomplete?: "email" | "current-password" | "new-password"
    value: string | boolean | number | Date
    min?: number
    max?: number
}

const Input: FC<Props> = ({
    placeholder,
    handleInput,
    type,
    resetMessage,
    autocomplete,
    value,
    min,
    max
}) => {
    function handleResult(value: string | boolean | number | File) {
        resetMessage()
        handleInput(value)
    }

    const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === "checkbox" || type === "radio") {
            handleResult(e.target.checked)
            return
        }
        if (type === "file" && e.target.files && e.target.files.length > 0) {
            handleResult(e.target.files.item(0)!)
            return
        }
        if (type === "number") {
            handleResult(e.target.value === "" ? 0 : parseFloat(e.target.value))
            return
        }
        handleResult(e.target.value)
    }

    return (
        <input
            autoComplete={autocomplete ?? ""}
            className="input"
            type={type}
            placeholder={placeholder ?? ""}
            value={type !== "file" && typeof value === "string" ? value : undefined}
            checked={type === "checkbox" || type === "radio" ? Boolean(value) : undefined}
            min={type === "number" && min !== undefined ? min : undefined}
            max={type === "number" && max !== undefined ? max : undefined}
            onChange={handleInputEvent}
            onInput={(e) => {
                if (type === "text" || type === "password" || type === "email" || type === "tel" || type === "date" || type === "time") {
                    handleResult((e.target as HTMLInputElement).value)
                }
            }}
        />
    )
}

export default Input
