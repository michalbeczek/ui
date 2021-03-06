import React from 'react'
import * as Block from '../Block'
import { Primary as Paragraph } from '../Paragraph'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Block',
  icon: 'Block',

  examples: {
    require: `import * as Block from '@klarna/ui/Block'`,
    type: LIVE,

    examples: {
      Regular: <Block.Installments.Main>
        <Block.Installments.Title>
          Your Installments
        </Block.Installments.Title>
        <Block.Installments.Content>
          <Block.Installments.Value
            title='Estimated total'
            value='€100'
          />
          <Block.Installments.Value
            clarification='†'
            title='APR'
            value='9.99%'
          />
        </Block.Installments.Content>
      </Block.Installments.Main>,

      'Left-Aligned': <Block.Installments.Main leftAlign>
        <Block.Installments.Content>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at aliquet leo.
          </Paragraph>
        </Block.Installments.Content>
      </Block.Installments.Main>
    }
  }
}
