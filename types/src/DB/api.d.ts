import { Database } from "../../database.types";
export declare function addData({ data }: {
    data: Database['public']['Tables']['demo_form']['Insert'];
}): Promise<void>;
export declare function addDataQuestion({ data }: {
    data: Database['public']['Tables']['questions_form']['Insert'];
}): Promise<void>;
