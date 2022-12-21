import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required()
  }).required();



export default function PokemonForm() {
    const onSubmit = data => console.log(data);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        defaultValues: {
            name: 'default',
        },
        resolver: yupResolver(schema)
      });

    return (
        <div>
            <h1>Pokemon Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>{errors.name?.message}</p>
                <input {...register("name")} />
                <input type="submit" />
            </form>
        </div>
    )
}