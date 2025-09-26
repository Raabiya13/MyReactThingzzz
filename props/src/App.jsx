import Parent from "./Parent"
import ShoppingList from "./ShoppingList"


const data=[
  {id:1, item:'egg', quantity:12, completed:false},
  {id:2, item:'Oats',quantity:1, completed:true},
  {id:3, item:'Bread',quantity:2, completed:false},
  {id:4, item:'fruits', quantity:1, completed:true},

]

export default function App(){
  return(
   <div>

    <Parent></Parent>
   <ShoppingList items={data}/>
   </div>
    
   

  )
}