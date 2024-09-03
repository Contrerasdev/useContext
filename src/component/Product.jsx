
import { useUserContext, useUserToggleContext } from "../Provider/UserProvider"
import Detalles from "./Detalles";
const Product = () => {
    const user = useUserContext();
    const handleLogin = useUserToggleContext()
    console.log(user);
    return (
        <div className="container-product">
            <h3>Product</h3>
            {user && (<span>Bienvenido : {user.name}</span>)}
            <p>Nombre desde product</p>
            <button onClick={handleLogin}>{user ? 'Logout' : 'Login'}</button>
            <Detalles />
        </div>

    )
}

export default Product;