import { z } from "zod";
export const createWarehouseFormSchema = z.object({
  warehouseProfileImg: z.instanceof(File),
  name: z
    .string()
    .nonempty("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),
  address: z
    .string()
    .nonempty("Address is required")
    .min(3, "Address must be at least 3 characters")
    .max(100, "Address cannot exceed 100 characters"),
  pincode: z
    .string()
    .nonempty("Pincode is required")
    .min(6, "Pincode must be 6 digits")
    .max(6, "Pincode must be 6 digits"),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password cannot exceed 50 characters"),
  phone: z
    .string()
    .nonempty("Phone is required")
    .min(10, "Phone must be exactly 10 digits")
    .max(10, "Phone must be exactly 10 digits")
    .regex(/^\d{10}$/, "Phone must contain only digits"),
  status: z.enum(["open", "closed"]).default("open"),
  manager: z
    .string()
    .nonempty("Manager is required if not available, please add a manager")
    .regex(/^[a-fA-F0-9]{24}$/, "Invalid Object Id"),
});

export const createManagerFormSchema = z.object({
  managerProfileImg: z.instanceof(File),
  name: z
    .string()
    .nonempty("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),
  address: z
    .string()
    .nonempty("Address is required")
    .min(3, "Address must be at least 3 characters")
    .max(100, "Address cannot exceed 100 characters"),
  pincode: z
    .string()
    .nonempty("Pincode is required")
    .min(6, "Pincode must be 6 digits")
    .max(6, "Pincode must be 6 digits"),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password cannot exceed 50 characters"),
  phone: z
    .string()
    .nonempty("Phone is required")
    .min(10, "Phone must be exactly 10 digits")
    .max(10, "Phone must be exactly 10 digits")
    .regex(/^\d{10}$/, "Phone must contain only digits"),
  dob: z
    .string()
    .regex(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      "Enter date in YYYY-MM-DD format",
    )
    .nonempty("DOB is required"),

  salary: z.number().min(0),
  work_status: z.enum(["working", "resigned", "terminated"]).default("working"),
});

export type CreateWarehouseFormData = z.infer<typeof createWarehouseFormSchema>;

export type CreateManagerFormData = z.infer<typeof createManagerFormSchema>;
