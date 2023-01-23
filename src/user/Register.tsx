import {useReducer} from "react";
import axios from "axios";

function Register() {

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
            case "ageInput":
                return {
                    ...state,
                    age: action.data
                }
            case "nameInput":
                return {
                    ...state,
                    name: action.data
                }
            case "genderInput":
                return {
                    ...state,
                    gender: action.data
                }
            case "typeInput":
                return {
                    ...state,
                    type: action.data
                }
        }
    }, {
        mail: "",
        password: "",
        age: 0,
        name: "",
        gender: "MALE",
        type: "JOB_SEEKER"
    })

    const register = () => {
        console.log(status.mail)
        console.log(status.password)
        console.log(status.age)
        console.log(status.name)
        console.log(status.gender)
        console.log(status.type)
        axios.post("http://localhost:8080/v1/auth/users", {
            mail: status.mail,
            password: status.password,
            age: status.age,
            name: status.name,
            gender: status.gender,
            type: status.type
        }).then((r) => {
            alert("회원가입에 성공했습니다.")
            console.log(r)
        }).catch((e) => {
            alert("회원가입에 실패했습니다.: ")
            console.log(e)
        })
    }

    return (
        <>
            <h1>회원가입</h1>
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
            <input
                type={"number"}
                placeholder={"나이를 입력해 주세요"}
                onChange={(e) => dispatch({
                    type: "ageInput",
                    data: e.target.value
                })}
            />
            <br/>
            <input
                placeholder={"이름을 입력해 주세요"}
                onChange={(e) => dispatch({
                    type: "nameInput",
                    data: e.target.value
                })}
            />
            <br/>
            <select
                // value={"MALE"}
                // placeholder={"성별을 설정해 주세요."}
                onChange={(e) => dispatch({
                type: "genderInput",
                data: e.target.value
            })
            }>
                <option value={"MALE"}>남성</option>
                <option value={"FEMALE"}>여성</option>
            </select>
            <br/>
            <select
                // value={"JOB_SEEKER"}
                // placeholder={"가입형태를 설정해 주세요."}
                onChange={(e) => dispatch({
                type: "genderInput",
                data: e.target.value
            })
            }>
                <option value={"JOB_SEEKER"}>구직회원</option>
                <option value={"ENTERPRISE"}>기업회원</option>
            </select>
            <br/>
            <input type={"button"} onClick={register} value={"회원가입"}/>
        </>
    )
}

export default Register