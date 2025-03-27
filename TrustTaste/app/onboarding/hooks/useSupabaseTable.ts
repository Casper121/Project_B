import supabase from "@/app/config/supabaseClient";


export const useFetchData = async (tableName: string) => {

    const { data, error } = await supabase.from(tableName).select();

    if (error) {
        console.error(error.message);
    } else {
        console.log(data);
  }
};
