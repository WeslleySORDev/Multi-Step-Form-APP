import type { UseFormReturn } from "react-hook-form";

export interface FormType {
  form: UseFormReturn<
    {
      fullName: string;
      emailAddress: string;
      phoneNumber: string;
      skillLevel: "beginner" | "intermediate" | "advanced" | "expert";
      challengePreference: (
        | "HTML/CSS/JS"
        | "ReactJs"
        | "AngularJs"
        | "Vue.js"
      )[];
      portfolio?: string | undefined;
    },
    any,
    {
      fullName: string;
      emailAddress: string;
      phoneNumber: string;
      skillLevel: "beginner" | "intermediate" | "advanced" | "expert";
      challengePreference: (
        | "HTML/CSS/JS"
        | "ReactJs"
        | "AngularJs"
        | "Vue.js"
      )[];
      portfolio?: string | undefined;
    }
  >;
}
