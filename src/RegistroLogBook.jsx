import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const GRADOS = [
  "3", "4", "5", "5+",
  "6a", "6a+", "6b", "6b+", "6c", "6c+",
  "7a", "7a+", "7b", "7b+", "7c", "7c+",
  "8a", "8a+", "8b", "8b+", "8c", "8c+",
  "9a", "9a+", "9b", "9b+", "9c",
];

export const TIPOS = ["A vista", "Flash", "Punto rojo"];

export const esquemaRegistro = z
    .object({
        via: z.string().trim().min(2, "El nombre es demasiado corto"),
        sector: z.string().trim().min(2, "El nombre es demasiado corto"),
        grado: z.enum(GRADOS, {message: "Elige un grado de la lista"}),
        tipoEncadene: z.enum(TIPOS, {message: "Tipo de encadene"}),
        fecha: z.string().min(1, "Debe introducir la fecha").refine(
          (fecha) =>  fecha <= new Date().toISOString().slice(0, 10),
          "La fecha no puede ser futura"
        ),
        notas: z.string().max(100, "Maximo 100 caracteres").optional(),
    });

export default function RegistroLogBook(){
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    resolver: zodResolver(esquemaRegistro),
    defaultValues: {via:"", sector: "", grado: "", tipoEncadene: "", fecha: "", notas: ""},
  });

  async function onSubmit(datos) {
    await new Promise((r) => setTimeout(r, 800)); // temporal
    console.log(datos);
  }

  return (
    <form className="logbook" onSubmit={handleSubmit(onSubmit)}>
      <div className="campo">
        <label>
          Via
          <input {...register("via")} aria-invalid={!!errors.via} />
        </label>
        {errors.via && <p role="alert" className="error">{errors.via.message}</p>}
      </div>

      <div className="campo">
        <label>
          Sector
          <input {...register("sector")} aria-invalid={!!errors.sector} />
        </label>
        {errors.sector && <p role="alert" className="error">{errors.sector.message}</p>}
      </div>

      <div className="campo">
        <label>
          Grado
          <select {...register("grado")} aria-invalid={!!errors.grado}>
            <option value="" disabled>Elige...</option>
            {GRADOS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </label>
        {errors.grado && <p role="alert" className="error">{errors.grado.message}</p>}
      </div>

      <div className="campo">
        <label>
          Tipo
          <select {...register("tipoEncadene")} aria-invalid={!!errors.tipoEncadene}>
            <option value="" disabled>Elige...</option>
            {TIPOS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
        {errors.tipoEncadene && <p role="alert" className="error">{errors.tipoEncadene.message}</p>}
      </div>

      <div className="campo">
        <label>
          Fecha
          <input type="date" {...register("fecha")} aria-invalid={!!errors.fecha} />
        </label>
        {errors.fecha && <p role="alert" className="error">{errors.fecha.message}</p>}
      </div>

      <div className="campo">
        <label>
          Notas
          <input type="text" {...register("notas")} aria-invalid={!!errors.notas} />
        </label>
        {errors.notas && <p role="alert" className="error">{errors.notas.message}</p>}
      </div>

      <button className="btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Guardando..." : "ZLAGUEA AHORA"}
      </button>
    </form>
  )
}