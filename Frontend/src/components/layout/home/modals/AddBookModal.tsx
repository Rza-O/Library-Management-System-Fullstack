import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { bookSchema, type BookFormData } from "@/validation/bookSchema";
import { useAddBookMutation } from "@/redux/api/baseApi";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const AddBookModal = () => {
   const [open, setOpen] = useState(false);
   const [form, setForm] = useState<Omit<BookFormData, "genre"> & { genre: string }>({
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 1,
      image: "",
   });

   const [errors, setErrors] = useState<Partial<Record<keyof BookFormData, string>>>({});

   const [addBook, { isLoading }] = useAddBookMutation();
   const navigate = useNavigate();

   const handleChange = (field: keyof BookFormData, value: string | number) => {
      setForm((prev) => ({ ...prev, [field]: value }));
   };

   const validateAndSubmit = async () => {
      const parsed = bookSchema.safeParse(form);

      if (!parsed.success) {
         const fieldErrors: typeof errors = {};
         parsed.error.errors.forEach((err) => {
            const field = err.path[0] as keyof BookFormData;
            fieldErrors[field] = err.message;
         });
         setErrors(fieldErrors);
         return;
      }

      try {
         await addBook(parsed.data).unwrap();
         setOpen(false);
         toast.success('Book Added Successfully!')
         setForm({
            title: "",
            author: "",
            genre: "",
            isbn: "",
            description: "",
            copies: 1,
            image: "",
         });
         navigate('/all-books')
      } catch (err) {
         toast.error("Uh Oh! Something went wrong!")
         console.error("Failed to add book:", err);
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button className="rounded-2xl shadow-lg hover:shadow-red-600 transition "><Plus />Add Book</Button>
         </DialogTrigger>
         <DialogContent className="bg-black text-white max-w-lg md:max-w-2xl rounded-xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
               <DialogTitle>Add New Book</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
               <div>
                  <Label>Title</Label>
                  <Input value={form.title} onChange={(e) => handleChange("title", e.target.value)} />
                  {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
               </div>
               <div>
                  <Label>Author</Label>
                  <Input value={form.author} onChange={(e) => handleChange("author", e.target.value)} />
                  {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
               </div>
               <div>
                  <Label>Genre</Label>
                  <Select value={form.genre} onValueChange={(value) => handleChange("genre", value)}>
                     <SelectTrigger>
                        <SelectValue placeholder="Select Genre" />
                     </SelectTrigger>
                     <SelectContent>
                        {["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"].map((g) => (
                           <SelectItem key={g} value={g}>{g}</SelectItem>
                        ))}
                     </SelectContent>
                  </Select>
                  {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>}
               </div>
               <div>
                  <Label>ISBN</Label>
                  <Input value={form.isbn} onChange={(e) => handleChange("isbn", e.target.value)} />
                  {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn}</p>}
               </div>
               <div>
                  <Label>Description</Label>
                  <Textarea value={form.description} onChange={(e) => handleChange("description", e.target.value)} />
                  {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
               </div>
               <div>
                  <Label>Copies</Label>
                  <Input
                     type="number"
                     value={form.copies}
                     onChange={(e) => handleChange("copies", parseInt(e.target.value))}
                  />
                  {errors.copies && <p className="text-red-500 text-sm">{errors.copies}</p>}
                  <p className="text-xs text-gray-400 mt-1">
                     Availability: {form.copies > 0 ? "Available" : "Not Available"}
                  </p>
               </div>
               <div>
                  <Label>Image URL</Label>
                  <Input value={form.image} onChange={(e) => handleChange("image", e.target.value)} />
                  {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
               </div>
               <div className="flex justify-end gap-2 mt-4">
                  <DialogClose asChild>
                     <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                  <Button onClick={validateAndSubmit} disabled={isLoading}>
                     {isLoading ? "Saving..." : "Add Book"}
                  </Button>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   );
};
