import React from 'react'
import {Motion, spring} from 'react-motion'
import * as Title from '../../Title'
import * as Paragraph from '../../Paragraph'
import Shadow from '../Shadow'
import RadioMark from '../../RadioMark'

import grid from '../../settings/grid'
import rgba from '../../settings/rgba'
import * as palette from '../../settings/palette'

export const OPTION_HEIGHT = 16 * 5
export const OPTION_CONTENT_PADDING = grid(4)

const defaultStyles = {
  base: {
    main: {
      backgroundColor: palette.WHITE,
      cursor: 'pointer',
      paddingBottom: grid(4),
      paddingTop: grid(4),
      position: 'relative',
      width: '100%',
      WebkitTapHighlightColor: rgba(0)(0)(0)(0)
    },
    content: {
      paddingTop: OPTION_CONTENT_PADDING
    },
    header: {
      position: 'relative',
      paddingLeft: grid(7)
    },
    radioMarkWrapper: {
      position: 'absolute',
      left: 0,
      top: 'calc(50% - 8px)'
    },
    // paragraph: {
    //   base: {
    //     main: {
    //       color: theme.color.paragraph,
    //       fontFamily: theme.fontFamily.base,
    //       fontSize: theme.fontSize.text,
    //       fontWeight: theme.fontWeight.paragraph,
    //       lineHeight: theme.lineHeight.paragraph,
    //       marginBottom: 0,
    //       marginTop: 0,
    //       paddingTop: theme.paddingTop.paragraph
    //     }
    //   }
    // },
    innerShadowContainer: {
      top: 0,
      position: 'absolute',
      pointerEvents: 'none',
      left: 0,
      width: '100%',
      height: '100%'
    },
    outerShadowContainer: {
      top: grid(-4),
      position: 'absolute',
      pointerEvents: 'none',
      left: 0,
      width: '100%',
      height: '100%'
    }
  },
  notFirst: {
    topLine: {
      opacity: 1
    }
  },
  radioMarkRight: {
    header: {
      paddingLeft: undefined
    },
    radioMarkWrapper: {
      left: undefined,
      right: 0
    }
  }
}

export default function Option ({
  children,
  description,
  index,
  label,
  name,
  previousOptionHeight,
  previousSelected,
  radioMarkRight,
  selected,
  ...props
}) {
  return <div
    style={{
      ...defaultStyles.base.main,
      zIndex: index
    }}
    {...props}>
    <div style={defaultStyles.base.outerShadowContainer}>
      <Shadow
        show={selected}
        withLine={index > 0 && !previousSelected && !selected}
      />
    </div>
    <div style={defaultStyles.base.innerShadowContainer}>
      <Shadow reversed show={previousSelected} />
    </div>

    <header
      style={{
        ...defaultStyles.base.header,
        ...(radioMarkRight ? defaultStyles.radioMarkRight.header : {})
      }}>
      <div
        style={{
          ...defaultStyles.base.radioMarkWrapper,
          ...(radioMarkRight
            ? defaultStyles.radioMarkRight.radioMarkWrapper
            : {}
          )
        }}>
        <RadioMark checked={selected} />
      </div>
      <Title.Secondary>{label}</Title.Secondary>
      <Paragraph.Secondary condensed style={{paddingBottom: 0}}>
        {description}
      </Paragraph.Secondary>
    </header>
    {children && <Motion
      style={{opacity: spring(selected ? 1 : 0)}}>
      {({opacity}) => <div
        style={{
          ...defaultStyles.base.content,
          opacity
        }}>
        {children}
      </div>}
    </Motion>}
  </div>
}