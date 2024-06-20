import { Input } from "../Input/Input"
import { Label } from "../Label/Label"
import { FieldContent } from "./Style"


export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    onChangeText,
    value,
}) => {
    return(

        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <Input
                placeholder={placeholder}
                editable={editable}
                onChangeText={onChangeText}
                value={value}
            />

        </FieldContent>

    )
}