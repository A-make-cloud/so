import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { EmailJSResponseStatus } from "@emailjs/browser";
type FormInputs = {
    subject: string,
    email: string,
    message: string,
};

export const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data);
        emailjs.send(
            'service_aapem17',
            'template_9175usl',
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },
            'B_YTAgMIgFginJ6Bu'
        )
    }
    return (
        <main className="mt-5 mb-5 pb-5">
            <h3>Contact</h3>
            <p>Email: agnes.cloud@ik.me</p>
            <div className="mt-5 mb-5 pb-5">
                <form className="mt-5 w-50" onSubmit={handleSubmit(onSubmit)}>
                    <label className="block form-label" htmlFor="subject">Subject</label>
                    {/* pour enregistrer le champs */}
                    <input {...register("subject", { required: true })} className="border form-control" type="text" name="subject" id="subject" placeholder="Quel est le sujet ?" />
                    {errors.subject && <span>This field is required</span>}
                    <label className="block form-label mt-3" htmlFor="email">Email</label>
                    <input {...register("email")} className="border form-control" type="text" name="email" id="email" placeholder="Quel est l'email' ?" />
                    <label className="block form-label mt-3" htmlFor="email">Message</label>
                    <textarea {...register("message")} className="border form-control" name="message" id="message" placeholder="Quel est le message' ?" />


                    <input className="block bg-[purple] border-0 p-2 w-100 rounded-pill text-[white] hover:bg-[gray] mt-3 mb-5" type="submit" value="Envoyer" />
                </form>
            </div>

        </main>
    )
}