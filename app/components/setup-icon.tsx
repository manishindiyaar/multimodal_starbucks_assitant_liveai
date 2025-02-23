import { Settings } from "lucide-react";

interface CustomButtonProps {
  onClick: () => void;
  variant?: "outline" | "solid"; // Add more variants as needed
  size?: "icon" | "small" | "medium"; // Define sizes
  children: React.ReactNode;
}

const CustomButton = ({ variant = "outline", size = "medium", children }: CustomButtonProps) => {
  const baseStyles = "flex items-center justify-center rounded";
  const variantStyles = variant === "outline" ? "border border-gray-300 text-gray-700" : "bg-gray-700 text-white";
  const sizeStyles = size === "icon" ? "h-10 w-10" : size === "small" ? "h-8 w-8" : "h-12 w-12";

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles}`}>
      {children}
    </button>
  );
};

interface SetupIconProps {
  onClick: () => void;
}

export function SetupIcon() {
  return (
    <CustomButton onClick={() => {}} variant="outline" size="icon">
      <Settings className="h-6 w-6" />
      <span className="sr-only">Open setup</span>
    </CustomButton>
  );
}