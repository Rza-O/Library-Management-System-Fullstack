import { z } from "zod";

export const bookSchema = z.object({
	title: z.string().min(1),
	author: z.string().min(1),
	genre: z.enum(["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"], {
		errorMap: () => ({ message: "Genre is required" }),
	}),
	isbn: z.string().min(1),
	description: z.string().min(10),
	copies: z.number().min(0),
	image: z.string().url(),
});

export type BookFormData = z.infer<typeof bookSchema>;
