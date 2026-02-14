
import {list} from "../list";
export default function ListSelect(props: { state: any; setState: any; }) {
   const  {state, setState} = props


    return (
        <>
    <select value ={state} onChange={e => setState(e.target.value)}>
        {list.map((each) => <option value={each.code}>{each.name}</option>)}
    </select>
    </>
    )
}