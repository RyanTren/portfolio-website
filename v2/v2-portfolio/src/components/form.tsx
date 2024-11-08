import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { supabase } from '@/db/supabase';

interface FormData {
  Email: string;
  category: string;
  Message: string;
}

export function Form() {
  const { register, handleSubmit } = useForm<FormData>();
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [entries, setEntries] = useState<{ id: number; name: string }[]>([]);

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      // Check if there's already a submission in the past week for the given email
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
      const { data: existingEntries, error: fetchError } = await supabase
        .from('ContactInformation')
        .select('*')
        .eq('Email', formData.Email)
        .gte('created_at', oneWeekAgo.toISOString());
  
      if (fetchError) {
        setError(fetchError.message);
        console.error("Error checking existing submissions:", fetchError.message);
        alert(`Error: ${fetchError.message}`);
        return;
      }
  
      // If there's an existing submission, show an alert
      if (existingEntries && existingEntries.length > 0) {
        alert("You have already submitted this form within the last week. Please try again later.");
        return;
      }
  
      // Proceed with the form submission and request the inserted data
      const { data, error } = await supabase
        .from('ContactInformation')
        .insert([{ Email: formData.Email, category: formData.category, Message: formData.Message }]);
  
      if (error) {
        setError(error.message);
        console.error("Submission error:", error.message);
        alert(`Submission failed: ${error.message}`);
      } else {
        setData("Submitted successfully!"); // Set a custom success message
        console.log("Submission successful!");
        alert("Your information has been submitted successfully!");
        fetchEntries();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Unexpected error occurred.");
      alert(`Unexpected error: ${err}`);
    }
  };
  
  
  const fetchEntries = async () => {
    const { data, error } = await supabase.from("ContactInformation").select('*');
    if (error) {
      setError(error.message);
    } else {
      setEntries(data);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent, transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black shadow-[0_8px_16px_rgb(0_0_0/0.4)] p-4 rounded-lg space-y-4">
        <div>
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            id="Email"
            {...register("Email")}
            placeholder="Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
          <select
            id="category"
            {...register("category", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="">Select...</option>
            <option value="A">Personal</option>
            <option value="B">Business</option>
          </select>
        </div>
        <div>
          <label htmlFor="Message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            id="Message"
            {...register("Message")}
            placeholder="Message"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {data && <p className="text-sm text-green-500 dark:text-green-400">{data}</p>}
        <div>
          <input
            type="submit"
            className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 dark:from-red-500 dark:via-orange-400 dark:to-yellow-300 hover:from-violet-600 hover:via-purple-600 hover:to-blue-600 dark:hover:from-red-600 dark:hover:via-orange-500 dark:hover:to-yellow-400 active:from-violet-700 active:via-purple-700 active:to-blue-700 dark:active:from-red-700 dark:active:via-orange-600 dark:active:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />
        </div>
      </form>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.name}</li>
        ))}
      </ul>
    </div>
  );
}
