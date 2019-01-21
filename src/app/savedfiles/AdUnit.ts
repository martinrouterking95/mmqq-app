import {value_array} from "../value_array"

//AdUnit Interface
export interface AdUnit {
    id: Number;
    save_name: String;
    result_final: Number;
    result_1: Number;
    result_2: Number;
    result_3: Number;
    value_array: value_array;
    project: String;
    user:  String;
}
