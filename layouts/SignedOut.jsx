import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button as={Link} to={"/login"} inverted color='purple' style={{marginRight:"0.5em"}}>Giriş Yap</Button>
                <Button positive as={Link} to={"/register"} inverted color='violet'>Kayıt Ol</Button>
            </Menu.Item>
            
        </div>
    )
}
