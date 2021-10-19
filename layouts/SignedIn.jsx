import React from 'react'
import { Dropdown, DropdownItem, Menu, Image, DropdownMenu } from 'semantic-ui-react'

export default function SignedIn({signOut},{userInfo}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced ="right" src="http://www.planetbutik.com/Uploads/UrunResimleri/buyuk/pikachu-bardak-altligi-0080.jpg"/>
                <Dropdown pointing="top left" text="Derya">
                    <DropdownMenu>
                        <DropdownItem onClick={userInfo} text="Bilgilerim" icon="info"/>
                        <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </DropdownMenu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
