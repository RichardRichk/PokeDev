import { useEffect, useState } from "react";
import { BoxInput } from "../Components/BoxInput/BoxInput";
import { ContainerForm, ScrollForm } from "./Style";
import { ButtonDefault } from "../Components/Button/Button";
import { api } from "../Services";
import { ImagePoke } from "../Components/Image/Style";

export function Home() {

    const [pokemon, setPokemon] = useState();
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log(data);
    }, [data])

    useEffect(() =>{
        console.log(pokemon);
    }, [pokemon])

    async function LoadPokemon(pokemon) {
        try {
            const response = await (api.get(`${pokemon}/`))

            setData(response.data.sprites)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollForm>
            <ContainerForm>

            <BoxInput
                textLabel= "Qual Pokemon deseja ver ?"
                placeholder="Pokemon"
                editable={true}
                onChangeText={(txt) => {
                    setPokemon(txt.toLowerCase())
                }}
                value={pokemon}
            />

            <ButtonDefault
                text={"Pesquisar "}
                height={"58px"}
                margin={"35px 0px 0px 0px"}
                onPress={() => LoadPokemon(pokemon)}
            />

            {
                data != null ? 
                <>
                    <ImagePoke
                        source={{uri: data.front_default}}
                    />
                </>

                :

                <>
                
                </>
            }

            </ContainerForm>
        </ScrollForm>
    )
}