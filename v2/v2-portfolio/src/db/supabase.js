
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;

console.log("supa",supabaseUrl);
console.log("basse", supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
        
