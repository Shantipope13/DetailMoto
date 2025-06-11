import { useState, useCallback } from 'react';

interface ValidationRules {
  [key: string]: (value: string) => string | undefined;
}

interface FormErrors {
  [key: string]: string;
}

export const useForm = <T extends Record<string, any>>(initialValues: T, validationRules?: ValidationRules) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = useCallback((values: T): FormErrors => {
    if (!validationRules) return {};
    
    const newErrors: FormErrors = {};
    Object.keys(validationRules).forEach((key) => {
      const error = validationRules[key](values[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  }, [validationRules]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (validationRules?.[name]) {
      const error = validationRules[name](value);
      setErrors(prev => ({
        ...prev,
        [name]: error || ''
      }));
    }
  }, [validationRules]);

  const handleSubmit = useCallback(async (onSubmit: (values: T) => Promise<void>) => {
    setIsSubmitting(true);
    const validationErrors = validate(values);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(values);
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validate, initialValues]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
    setValues
  };
}; 