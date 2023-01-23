import {useReducer} from "react";
import axios from "axios";



export default function Login (){

    const [status, dispatch] = useReducer((state: any, action: { type: any; data: any; }) => {
        switch (action.type) {
            case "mailInput":
                return {
                    ...state,
                    mail: action.data
                }
            case "passwordInput":
                return {
                    ...state,
                    password: action.data
                }
        }
    }, {
        mail: "",
        password: ""
    })

    const login = () => {
        axios.post("http://localhost:8080/v1/auth/login", {
            mail: status.mail,
            password: status.password
        }).then((r) => {
            alert("로그인에 성공했습니다.")
            console.log(r)
        }).catch((e) => {
            alert("로그인에 실패했습니다.: ")
            console.log(e)
        })
    }

    return (
        <>
            <h1>로그인</h1>
            <input
                placeholder={"메일을 입력해 주세요"}
                onChange={(e) => dispatch({
                    type: "mailInput",
                    data: e.target.value
                })}
            />
            <br/>
            <input
                type={"password"}
                placeholder={"비밀번호를 입력해 주세요"}
                onChange={(e) => dispatch({
                    type: "passwordInput",
                    data: e.target.value
                })}
            />
            <br/>
            <input type={"button"} onClick={login} value={"로그인"}/>
        </>
    )
}