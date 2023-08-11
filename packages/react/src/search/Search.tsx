import { Input as ChakraInput, InputProps as ChakraInputProps, forwardRef } from "@chakra-ui/react";

export const Search = forwardRef<ChakraInputProps, "input">(
  ({ size, variant, type = "search", isRequired, isInvalid, isDisabled, ...props }, ref) => {
    return (
      <ChakraInput
        {...props}
        ref={ref}
        size={size}
        type={type}
        variant={variant}
        isRequired={isRequired}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
      />
    );
  }
);