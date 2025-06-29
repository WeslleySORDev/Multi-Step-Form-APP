import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

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
});

export default function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      portfolio: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <main className="max-w-[640px] h-screen px-[30px] py-8 border border-zinc-300 mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full"
        >
          <div className="flex flex-1 pb-[42px] pt-[32px] border-y border-[#E5E7EB] items-start w-full">
            <div className="grid grid-cols-1 gap-y-6 gap-x-10 w-full sm:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: João da Silva" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Aqui você colocará seu nome completo.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@email.com" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Aqui você colocará seu email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="24999999999" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Aqui você colocará seu número de telefone.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portifólio/Github Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="github.com/weslleysordev"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Aqui você colocará seu portifolio ou github.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button className="mt-auto cursor-pointer" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
