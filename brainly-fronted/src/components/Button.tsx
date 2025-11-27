export interface ButtonProps{
    variant: "primary" |"secondary";
    size:"sm"|"md"|"lg";
    text:"string";
    startIcon?:any;
    endIcon?:any;
    onClick:()=>void;

}
const variantStyles={
    "primary": "bg-purple-600 text-white",
    "Secondary": "bg-purple-100 text-purple-700"
}
const sizeStyles={
  "sm": "py-2 px-2",
  "md": "py-3 px-4",
  "lg": "py-4 px-5"

}
export const Button=(props: ButtonProps)=>{
  return <button className={'${variantStyles[props.variant]}$
  {defaultStyles} ${sizeStyles[props.size]}'}>{props.text}</button>  
}
<Button variant="primary" size="md"  onClick={()=>{}} text={"asd"}/>