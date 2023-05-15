import { useDispatch } from "react-redux";
import { addUser, postUser } from "./userSlice";

const AddUser = () => {
    
    let dispatch = useDispatch();

    let empty = {
        tz: "",
        name: "",
        telphone: null
    }
    const change = (e) => {
        let { name, value, type } = e.target;
        if (type === "number")
            value = Number(value);
        else if (type === "checkbox")
            value = e.target.checked;

        empty[name] = value;
    }
    return (<form onSubmit={(e) => {
        e.preventDefault();
        if (empty.tz && empty.name && empty.telphone) {

        dispatch(postUser(empty.tz, empty.name, empty.telphone))
       
        }

    }}>
        <input type="text" name="tz" placeholder="tz" onChange={change} />
        <input type="text" name="name" placeholder="name" onChange={change} />
        <input type="text" name="telphone" placeholder="telphone" onChange={change} />

        <input type="submit" />
    </form>);
}

export default AddUser;