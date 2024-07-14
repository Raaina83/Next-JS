import { handleGithubLogin } from "@/lib/action"
import { auth } from "@/lib/auth"

const LoginPage = async() => {
    const session = await auth()
    console.log("login session",session)

    return (
        <div>
            <form action={handleGithubLogin}>
                <button type="submit">Sign in with github</button>
            </form>
        </div>
    )
}

export default LoginPage