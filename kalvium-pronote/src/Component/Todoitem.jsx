import React from "react";

class Todoitem extends React.Component{
    constructor(){
        super();

    }

    render(){
        let {e,index,updateItem,deleteItem} = this.props;
        return(
            <>
                <div>
                    <input type="text" onChange={(e)=>{
                        updateItem(e.target.value,index)
                    }} value={e}/>
                    <button onClick={()=>{
                        deleteItem(index)
                    }}>Delete Item</button>
                </div>
            </>
        )
    }

}

export default Todoitem