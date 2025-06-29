import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FormType } from "@/types";

export function StepOne({ form }: FormType) {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <h1 className="font-medium text-2xl">Informações Pessoais</h1>
        <h2 className="text-[#6B7280]">
          Forneça suas informações pessoas para que façamos o melhor possivel.
        </h2>
      </div>
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
                <Input placeholder="github.com/weslleysordev" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Aqui você colocará seu portifolio ou github.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
