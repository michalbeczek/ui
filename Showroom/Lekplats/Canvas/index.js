import React from 'react'
import * as Paragraph from '../../../Paragraph'
import grid from '../../../settings/grid'
import * as palette from '../../../settings/palette'

const defaultStyles = {
  base: {
    main: {
      alignItems: 'center',
      backgroundColor: palette.LIGHT_GREY.base,
      boxSizing: 'border-box',
      borderWidth: grid(0.2),
      borderStyle: 'solid',
      borderColor: palette.GREY_LINES,
      display: 'flex',
      height: grid(140),
      justifyContent: 'center',
      width: '100%'
    },

    artboard: {
      boxShadow: `${palette.GREY_LINES} 0 0 ${grid(1)}`,
      overflow: 'scroll',
      position: 'relative',
      height: '100%',
      width: '100%'
    }
  }
}

export default function Canvas ({children, dimensions, ...props}) {
  return <div style={defaultStyles.base.main} {...props}>
    <div
      style={{
        ...defaultStyles.base.artboard,
        ...(dimensions ? {
          height: dimensions[1],
          width: dimensions[0]
        }: {})
      }}>
      <Paragraph.Primary>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph.Primary>
      <Paragraph.Primary>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph.Primary>
      <Paragraph.Primary>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph.Primary>
      {children}
    </div>
  </div>
}
