export default function cutText(text: string | any, length: number) {
    if (text.length > length) {
        let res = text!.substring(0, length); // cuts to length
        let last = res.lastIndexOf(' '); // gets last space (to avoid cutting the middle of a word)
        res = res.substring(0, last); // cuts from last space (to avoid cutting the middle of a word)
        return res + `...`; // adds ... at the end to show that it's cut
    } else return text;
}