
import {getRandomColor} from "./randomcolors";

export interface Documentlist {
    id: string;
    title: string;
    url: string;
    documentlink: string;
    color: string;
    author: string;
}
export const document: Documentlist[] = [
    {
        id: "1",
        title:"My resume",
        color: getRandomColor(),
        url:"https://res.cloudinary.com/dafudehxr/image/upload/f_auto,q_auto/sy4khajobwbf47wnvb0i",
        author: "Ritheasor H. Sreng",
        documentlink: "https://drive.google.com/file/d/19ET38iLOtVekAPEDQg3P_4sQ3gVQoS3b/view?usp=sharing"
    }]