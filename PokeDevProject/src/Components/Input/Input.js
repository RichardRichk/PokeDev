import { InputText } from "./Style";

export function Input ({
    placeholder,
    editable,
    onChangeText,
    value,
}){
    return(
        <InputText
            placeholder={placeholder}
            editable={editable}
            onChangeText={onChangeText}
            value={value}
        />
    )
}