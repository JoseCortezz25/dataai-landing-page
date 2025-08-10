'use client';

import { useActionState, useState } from 'react';
import { Input } from '@/components/ui/input';
import messages from '@/lib/messages.json';

interface FormState {
  isSubmitting: boolean;
  hasError: boolean;
}

async function submitForm(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  // Placeholder server action simulation
  await new Promise(resolve => setTimeout(resolve, 700));
  console.log('form submitted', Object.fromEntries(formData.entries()));
  return { isSubmitting: false, hasError: false };
}

export const ContactForm = () => {
  const { contact } = messages;
  const [state, formAction] = useActionState(submitForm, {
    isSubmitting: false,
    hasError: false
  });
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <form action={formAction} className="space-y-4">
      <Input name="fullName" placeholder={contact.form.fullName} required />
      <Input name="phone" placeholder={contact.form.phone} required />
      <Input
        name="email"
        placeholder={contact.form.email}
        type="email"
        required
      />

      <label className="text-muted-foreground mt-2 flex items-center gap-2 text-xs">
        <input
          type="checkbox"
          checked={isAgreed}
          onChange={e => setIsAgreed(e.target.checked)}
          className="accent-primary"
        />
        {contact.form.privacy}
      </label>

      <button
        type="submit"
        disabled={!isAgreed || state.isSubmitting}
        className="primary-button mt-4 ml-auto block"
      >
        {contact.form.submit}
      </button>
    </form>
  );
};
