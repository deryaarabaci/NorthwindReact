import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

export default function Payment() {
    return (
        <div>
            <Step.Group>
                <Step>
                    <Icon name='truck' />
                    <Step.Content>
                        <Step.Title>Teslimat</Step.Title>
                        <Step.Description>Teslimat bilgilerinizi giriniz.</Step.Description>
                    </Step.Content>
                </Step>

                <Step active>
                    <Icon name='payment' />
                    <Step.Content>
                        <Step.Title>Ödeme</Step.Title>
                        <Step.Description>Ödeme bilgilerinizi giriniz.</Step.Description>
                    </Step.Content>
                </Step>

                <Step disabled>
                    <Icon name='info' />
                    <Step.Content>
                        <Step.Title>Bilgi</Step.Title>
                    </Step.Content>
                </Step>
            </Step.Group>
        </div>
    )
}
