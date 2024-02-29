import { YStack, styled } from 'tamagui'

export const MyComponent = styled(YStack, {
  name: 'MyComponent',
  backgroundColor: 'red',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
      false: {},
    },
    foo: {
      bar: (value, { props }) => {
        if (props.blue === true) {
          return {
            padding: 10,
          }
        }

        return {
          padding: 20,
        }
      },
    },
  } as const,
})
