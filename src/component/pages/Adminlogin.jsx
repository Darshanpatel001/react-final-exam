import React, { useRef } from 'react'

const Adminlogin = () => {
    let name = useRef();
    let passowrd = useRef();

    const logindata = async () => {
        let data = {
            name: name.current.value,
            password: passowrd.current.value
        }
        console.log(data);
        if ("darshan" == data.name && "123" == data.password) {
            localStorage.setItem("role", "admin");
            window.location.href = "/adminhome"
            console.log("login successfull");
            alert("login successfull")
        } else {
            alert("Error")
        }
    }
    return (
        <>
            <div class="mx-auto m-5" style={{ width: "400px" }}>
            <h1>LOGIN</h1>
                <label>Name  </label>
                <input type="text" placeholder='Enter admin Name' ref={name} /><br />
                <label>passowrd </label>
                <input type="password" placeholder='Enter admin password' ref={passowrd} /><br />
                <button onClick={logindata}>submit</button>
            </div>
        </>

    )
}

export default Adminlogin