"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas";
import { ChevronDown, ChevronRight } from "lucide-react";

export const HomepageForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isFocused, setIsFocused] = useState(false);

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values);
  }

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event: {
    currentTarget: { contains: (arg0: any) => any };
    relatedTarget: any;
  }) => {
    // Check if the blur event is for the input field
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div
                className=" min-h-12 bg-slate-700/70 p-2 flex flex-col items-start justify-center rounded-sm space-y-1"
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={0} // Correctly specify tabIndex as a number
              >
                <FormLabel className="px-3">Email</FormLabel>
                <FormControl className="border-0 outline-none bg-inherit ring-0 focus-visible:ring-0">
                  
                  {isFocused && (
                    <Input
                      placeholder="john.doe@gmail.com"
                      {...field}
                      className="border-0 outline-none ring-0 bg-transparent focus-visible:ring-0"
                    />
                  )}
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=" h-12 w-40" variant="netflix">
          <span>Get Started</span>
          <ChevronRight />
        </Button>
      </form>
    </Form>
  );
};
