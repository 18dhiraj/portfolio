'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

// function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <Button type="submit" disabled={pending} className="w-full sm:w-auto">
//       {pending ? 'Sending...' : 'Send Message'}
//       {!pending && <Send className="ml-2 h-4 w-4" />}
//     </Button>
//   );
// }

// export function ContactSection() {
//   const { toast } = useToast();
//   const formRef = useRef<HTMLFormElement>(null);
//   const initialState = { message: '', success: false, errors: {} };
//   const [state, formAction] = useFormState(submitContactForm, initialState);

//   useEffect(() => {
//     if (state.message) {
//       toast({
//         title: state.success ? 'Success!' : 'Oops!',
//         description: state.message,
//         variant: state.success ? 'default' : 'destructive',
//       });
//       if (state.success) {
//         formRef.current?.reset();
//       }
//     }
//   }, [state, toast]);

//   return (
//     <section id="contact" className="container py-12 md:py-24 px-4" >
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
//         <p className="text-lg text-muted-foreground mt-2">
//           Have a question or a project in mind? Let's connect.
//         </p>
//       </div>
//       <div className="max-w-xl mx-auto">
//         <form ref={formRef} action={formAction} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" name="name" placeholder="Your Name" required aria-describedby="name-error" />
//             {state.errors?.name && <p id="name-error" className="text-sm text-destructive">{state.errors.name[0]}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" name="email" type="email" placeholder="your@email.com" required aria-describedby="email-error"/>
//             {state.errors?.email && <p id="email-error" className="text-sm text-destructive">{state.errors.email[0]}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               id="message"
//               name="message"
//               placeholder="Your message..."
//               rows={5}
//               required
//               aria-describedby="message-error"
//             />
//             {state.errors?.message && <p id="message-error" className="text-sm text-destructive">{state.errors.message[0]}</p>}
//           </div>
//           <div className="flex justify-end pt-2">
//             <SubmitButton />
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }


export function ContactSection() {
  return (
    <section id="contact" className="container py-12 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Have a question or a project in mind? Reach out anytime — I usually respond within a day.
        </p>
      </div>

      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-muted-foreground text-lg">
          You can contact me directly at:
        </p>

        <div className="bg-muted/40 border rounded-lg p-4 flex items-center justify-center">
          <a
            href="mailto:officialdhiraj00@gmail.com"
            className="text-lg font-medium hover:text-primary transition-colors"
          >
            officialdhiraj00@gmail.com
          </a>
        </div>


        <div className="pt-6">
          <Button asChild size="lg">
            <a href="mailto:officialdhiraj00@gmail.com">
              <Send className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
