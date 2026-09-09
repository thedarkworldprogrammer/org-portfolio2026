import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle,
} from "react-icons/fa";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const ContactForm = () => {
    const [formData, setFormData] = useState(initialForm);

    const [errors, setErrors] = useState({});

    const [status, setStatus] = useState("idle");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
            )
        ) {
            newErrors.email =
                "Please enter a valid email address.";
        }

        if (!formData.subject.trim()) {
            newErrors.subject =
                "Please enter a subject.";
        }

        if (!formData.message.trim()) {
            newErrors.message =
                "Please enter your message.";
        } else if (formData.message.trim().length < 10) {
            newErrors.message =
                "Message should contain at least 10 characters.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus("loading");
        try {
            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Unable to send message."
                );
            }

            setStatus("success");
            setFormData(initialForm);
        } catch (error) {
            console.error(error);

            setStatus("error");
        }
    };



    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
        >
            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:ring-2 dark:bg-neutral-950 dark:text-white ${errors.name
                                ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                                : "border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400/10 dark:border-neutral-800 dark:focus:border-neutral-600"
                            }`}
                    />

                    {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:ring-2 dark:bg-neutral-950 dark:text-white ${errors.email
                                ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                                : "border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400/10 dark:border-neutral-800 dark:focus:border-neutral-600"
                            }`}
                    />

                    {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>

            {/* Subject */}
            <div>
                <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                    Subject
                </label>

                <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:ring-2 dark:bg-neutral-950 dark:text-white ${errors.subject
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                            : "border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400/10 dark:border-neutral-800 dark:focus:border-neutral-600"
                        }`}
                />

                {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-500">
                        {errors.subject}
                    </p>
                )}
            </div>

            {/* Message */}
            <div>
                <div className="mb-2 flex items-center justify-between">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                        Message
                    </label>

                    <span className="text-xs text-neutral-400">
                        {formData.message.length}/1000
                    </span>
                </div>

                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    maxLength="1000"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your idea..."
                    className={`w-full resize-none rounded-xl border bg-white px-4 py-3.5 text-sm leading-6 text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:ring-2 dark:bg-neutral-950 dark:text-white ${errors.message
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400/10"
                            : "border-neutral-200 focus:border-neutral-400 focus:ring-neutral-400/10 dark:border-neutral-800 dark:focus:border-neutral-600"
                        }`}
                />

                {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">
                        {errors.message}
                    </p>
                )}
            </div>

            {/* Submit */}
            <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={
                    status !== "loading"
                        ? {
                            y: -2,
                        }
                        : {}
                }
                whileTap={
                    status !== "loading"
                        ? {
                            scale: 0.98,
                        }
                        : {}
                }
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-neutral-950 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-950"
            >
                {status === "loading" ? (
                    <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-neutral-950/30 dark:border-t-neutral-950" />

                        Sending...
                    </>
                ) : (
                    <>
                        Send Message

                        <FaPaperPlane className="text-xs" />
                    </>
                )}
            </motion.button>

            {/* Status Messages */}
            <AnimatePresence mode="wait">
                {status === "success" && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                            scale: 0.98,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -10,
                        }}
                        className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-400"
                    >
                        <FaCheckCircle />

                        <span>
                            Message sent successfully! I'll get back to
                            you soon.
                        </span>
                    </motion.div>
                )}

                {status === "error" && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
                    >
                        <FaExclamationCircle />

                        <span>
                            Something went wrong. Please try again.
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
};

export default ContactForm;