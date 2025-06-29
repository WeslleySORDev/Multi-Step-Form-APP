import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./components/ui/form";
import { Button } from "./components/ui/button";
import { StepOne } from "./screens/StepOne";
import { useState } from "react";

const formSchema = z.object({
  fullName: z
    .string()
    .min(6, "Nome completo precisa ter pelo menos 6 caracteres."),
  emailAddress: z
    .string()
    .email({ message: "Por favor digite um endereço de email válido" }),
  phoneNumber: z
    .string()
    .regex(
      /^\d{10,11}$/,
      "O número de telefone precisa ter 10 ou 11 digitos (ex: 2499999999 or 24999999999)"
    ),
  portfolio: z
    .string()
    .regex(
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/,
      "Por favor digite um url valido do seu portifólio (ex: example.com, www.example.com, https://example.com)"
    )
    .optional(),
  skillLevel: z.enum(["beginner", "intermediate", "advanced", "expert"], {
    errorMap: () => ({ message: "Please select your skill level" }),
  }),
  challengePreference: z
    .array(z.enum(["HTML/CSS/JS", "ReactJs", "AngularJs", "Vue.js"]), {
      required_error: "Please select at least one challenge preference.",
    })
    .min(1, "Please select at least one challenge preference."),
});

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      portfolio: "",
      skillLevel: "beginner",
      challengePreference: undefined,
    },
  });

  const handleNextStep = () => {
    currentStep < 3 ? setCurrentStep(currentStep + 1) : null;
  };

  const handlePreviousStep = () => {
    currentStep > 0 ? setCurrentStep(currentStep - 1) : null;
  };

  const Steps = [<StepOne form={form} />];
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex max-w-[640px] h-screen px-[30px] py-8 border border-zinc-300 mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full h-full"
        >
          <header className="flex gap-[18px] justify-center items-center mb-8">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="flex items-center gap-[18px]">
                {index > 0 ? (
                  <div
                    className={`w-[100px] h-1.5 rounded-[50px] ${
                      currentStep >= index ? "bg-[#FC6C4C]" : "bg-[#E5E7EB]"
                    }`}
                  ></div>
                ) : null}
                <div
                  className={`flex items-center justify-center w-[34px] h-[34px] rounded-full ${
                    currentStep >= index
                      ? "text-white bg-[#FC6C4C]"
                      : "bg-[#E5E7EB]"
                  }`}
                >
                  <span className="font-medium">{index + 1}</span>
                </div>
              </div>
            ))}
          </header>
          <main className="flex flex-col gap-6 flex-1 items-start w-full pb-[42px] pt-[32px] border-y border-[#E5E7EB] ">
            <StepOne form={form} />
          </main>
          <footer className="flex justify-between mt-auto">
            {currentStep > 0 ? (
              <Button
                onClick={handlePreviousStep}
                className="bg-[#FC6C4C] text-white w-[120px] cursor-pointer"
              >
                Voltar
              </Button>
            ) : null}
            {currentStep < 3 ? (
              <Button
                onClick={handleNextStep}
                className="bg-[#FC6C4C] text-white ml-auto w-[120px] cursor-pointer"
              >
                Proxima
              </Button>
            ) : (
              <Button
                className="bg-[#FC6C4C] text-white ml-auto w-[120px] cursor-pointer"
                type="submit"
              >
                Enviar
              </Button>
            )}
          </footer>
        </form>
      </Form>
    </div>
  );
}
