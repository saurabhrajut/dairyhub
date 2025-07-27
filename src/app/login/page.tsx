
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Milk } from "lucide-react";


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  age: z.coerce.number().min(10, { message: "You must be at least 10 years old."}).max(100),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender."}),
});

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        localStorage.setItem("dhenu-guide-user", JSON.stringify(values));
        router.push("/");
    } catch (error) {
        console.error("Failed to save user data to localStorage", error);
        // Optionally, show an error message to the user
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Card className="w-full max-w-md shadow-2xl">
            <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                    <Milk className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl">Welcome to DhenuGuide</CardTitle>
                <CardDescription>Please enter your details to continue</CardDescription>
            </CardHeader>
            <CardContent>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Saurabh Rajput" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="25" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Gender</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your gender" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        <Button type="submit" className="w-full">Continue</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  );
}
