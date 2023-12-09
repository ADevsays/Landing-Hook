export default function everyValueIsFill(obj: Object){
    return Object.values(obj).every(value=>value)
}